import api from "../../services/api";
import { useState } from "react";
import Preview from "./Preview";
import Form from "./Form";
import imageProfile from "../../images/secretaria.png";
import imageProject from "../../images/project.jpg";

function CreateProject() {
  const [data, setData] = useState({
    name: "",
    slogan: "",
    repo: "",
    demo: "",
    technologies: "",
    desc: "",
    autor: "",
    job: "",
    image: "",
    photo: "",
  });
  const [msgError, setMsgError] = useState({
    name: "",
    slogan: "",
    repo: "",
    demo: "",
    technologies: "",
    desc: "",
    autor: "",
    job: "",
    image: "",
    photo: "",
  });

  const [url, setUrl] = useState("");
  const [info, setInfo] = useState("");
  const [card, setCard] = useState("");
  const [avatar, setAvatar] = useState("");


  const updateAvatar = (avatar) => {
    setAvatar(avatar);
    setData({
      ...data,
      photo: avatar,
    });
  };

  const [project, setProject] = useState("");
  const updateProject = (project) => {
    setProject(project);
    setData({
      ...data,
      image: project,
    });
  };

  const handleInput = (inputValue, inputName) => {
    setData({
      ...data,
      [inputName]: inputValue,
    });
    if (inputName === "name") {
      required(inputValue, setMsgError, "name");
    }
    if (inputName === "slogan") {
      required(inputValue, setMsgError, "slogan");
    }
    if (inputName === "repo") {
      required(inputValue, setMsgError, "repo");
    }
    if (inputName === "demo") {
      required(inputValue, setMsgError, "demo");
    }
    if (inputName === "technologies") {
      required(inputValue, setMsgError, "technologies");
    }
    if (inputName === "autor") {
      required(inputValue, setMsgError, "autor");
    }
    if (inputName === "job") {
      required(inputValue, setMsgError, "job");
    }
  };

  const required = (inputValue, setError, field) => {
    if (!inputValue) {
      const clonedMsg = { ...msgError };
      clonedMsg[field] = "* Campo requerido";
      setError(clonedMsg);
    } else {
      setError(" ");
    }
  };

  const handleSend = () => {
    api.dataApi(data).then((info) => {
      console.log(info);
      if (!info.success) {
        if (info.error.includes("Mandatory fields:")) {
          setCard(
            "Todos los campos son obligatorios. Por favor, revise y cubra los campos restantes."
          );
        } else if (info.error.includes("Database error: ER_DATA_TOO_LONG")) {
          setCard(
            "La foto es desmasiado grande debe ser de 200x200 px y menor a 120 KB, intente reducirla o use otra foto."
          );
        } else if (
          info.error.includes("Database error: Database was shut down")
        ) {
          setCard(
            "Ha ocurrido un error con el servidor, inténtelo de nuevo más tarde."
          );
        } else {
          setCard(
            "Lo sentimos, ha ocurrido un error, inténtelo de nuevo más tarde."
          );
        }
        setUrl("");
        setInfo("");
      } else if (info.success) {
        setUrl(info.cardURL);
        setInfo(info);
      }
    });
  };
  return (
    <main className="main">
      <Preview
        imageProfile={imageProfile}
        imageProject={imageProject}
        data={data}
        project={project}
        avatar={avatar}
      ></Preview>
      <Form
        msgError={msgError}
        handleChangeInput={handleInput}
        data={data}
        info={info}
        url={url}
        card={card}
        handle={handleSend}
        avatar={avatar}
        updateAvatar={updateAvatar}
        project={project}
        updateProject={updateProject}
      ></Form>
    </main>
  );
}

export default CreateProject;
