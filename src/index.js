const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

//creo el servidor
const server = express();

//configurar el servidor
server.use(cors());
server.use(express.json({ limit: '100mb' }));
server.set('view engine', 'ejs');

/*
mysql
  .createConnection({
    host: 'sql.freedb.tech',
    datatabase: 'freedb_projectMolones',
    user: 'freedb_adminMolon',
    password: '9wkd##&D@va8rUr',
  })
  .then((conn) => {
    connection = conn;
    connection.connect().then(() => {
      console.log(`Conexion establecida ${connection.threadId}`);
    });
  });
*/

async function connectDB() {
  const connection = await mysql.createConnection({
    host: 'sql.freedb.tech',
    database: 'freedb_projectMolones',
    user: 'freedb_adminMolon',
    password: '9wkd##&D@va8rUr',
  });
  await connection.connect();
  console.log(`Conexion establecida ${connection.threadId}`);
  return connection;
}

const PORT = 4000;
server.listen(PORT, () => {
  console.log('Se ha conectado al puerto ' + PORT);
});

server.get('/api/allproject', async (req, res) => {
  const select = 'select * from projects ';
  const connect = await connectDB();
  const [result] = await connect.query(select);
  //const data = result[0];
  console.log(result);
  res.json(result);
});
//CRUD-->  INSERT, SELECT, UPDATE, DELETE
/* 
1.- endPoint-> post (body)
2.- INSERT INTO AUTHORS
3.- INSERT INTO PROJECTS
4.- responder con la url del project
*/

server.post('/api/projects/add', async (req, res) => {
  const body = req.body;
  console.log(body);

  let insertAuthors =
    'INSERT INTO authors (author, job,image) VALUES (?, ?, ?)';
  const connect = await connectDB();
  const [result] = await connect.query(insertAuthors, [
    body.name,
    body.job,
    body.image,
  ]);
  const idAuthor = result.insertId;

  let insertProject =
    'INSERT INTO projects (name, description, slogan, repo, demo, technologies, image, fk_author )  values(?,?,?,?,?,?,?,?) ';

  const [resultProject] = await connect.query(insertProject, [
    body.name,
    body.desc,
    body.slogan,
    body.repo,
    body.demo,
    body.technologies,
    body.photo,
    idAuthor,
  ]);
  console.log(resultProject.insertId);
  //http://localhost:4000/project/${resultProject.insertId}
  res.json({ msj: 'holis' }); //objeto con la url del proyecto
});

server.get('/project/:idProject', async (req, res) => {
  const id = req.params.idProject;
  const query =
    'SELECT  * FROM authors INNER JOIN projects  ON fk_author = idauthor WHERE idprojects = ? ';
  const connect = await connectDB();
  const [results] = await connect.query(query, id);

  res.render('detailProject', results[0]);
});
