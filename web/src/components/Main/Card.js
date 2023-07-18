import Profile from './Profile';

function Card({ data, avatar, imageProfile }) {
  return (
    <article className="preview__autor">
      <div className="preview__autor__info-project">
        <p className="preview__autor__info-project--subtitle">
          Proyecto Molones
        </p>
        <h2 className="preview__autor__info-project--title">
          {data.name || 'Gestor de Proyectos'}
        </h2>
        <p className="preview__autor__info-project--slogan">
          {data.slogan || 'Emprende tus proyectos sin límites'}
        </p>
        <p className="preview__autor__info-project--desc">
          {data.description ||
            'Nuestra web es un gestor de proyectos online que te permite organizar tus proyectos de forma inteligente y eficiente con solo crear una tarjeta para cada uno.'}
        </p>
        <div className="preview__autor__info-project--technologies">
          <p className="preview__autor__info-project--technologies--text">
            {data.technologies || 'React JS, SASS'}
          </p>
        </div>
        <div className="preview__autor__info-project--icons">
          <a
            className={data.repo === '' ? 'hidden' : 'cardLink'}
            href={data.repo}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github-alt"></i>
          </a>
          <a
            className={data.demo === '' ? 'hidden' : 'cardLink'}
            href={data.demo}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-solid fa-globe"></i>
          </a>
        </div>
      </div>

      <div className="preview__autor__info-autor">
        <Profile
          imageProfile={imageProfile}
          avatar={avatar}
          className={'preview__autor__info-autor--image'}
        />
        <p className="preview__autor__info-autor--job">
          {data.job || 'Full Stack Developer'}
        </p>
        <p className="preview__autor__info-autor--name">
          {data.autor || 'Pepa Miguez'}
        </p>
      </div>
    </article>
  );
}

export default Card;
