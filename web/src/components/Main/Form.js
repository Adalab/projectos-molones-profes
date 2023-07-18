import ButtonCreateCard from "./ButtonCreateCard";
import GetAvatar from "./GetAvatar";
import Input from "./Input";

function Form({
  data,
  handle,
  info,
  url,
  card,
  handleChangeInput,
  avatar,
  updateAvatar,
  project,
  updateProject,
  msgError,
}) {
  const changeInput = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    handleChangeInput(inputValue, inputName);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <section className="sectionForm">
      <h2 className="sectionForm__title">Información</h2>
      <form className="sectionForm__form" onSubmit={handleSubmit}>
        <fieldset className="sectionForm__form__project">
          <legend className="sectionForm__form__project--info">
            Cuéntanos sobre el proyecto
          </legend>
          <Input
            htmlFor={"name"}
            placeholder={"Ejemplo: Mi proyecto"}
            data={data.name}
            handleChangeInput={handleChangeInput}
            text={"Nombre del proyecto:"}
          ></Input>
          <p className="msgError">{msgError.name}</p>
          <Input
            htmlFor={"slogan"}
            placeholder={"Ejemplo: Crea proyectos sin límites"}
            data={data.slogan}
            handleChangeInput={handleChangeInput}
            text={"Slogan:"}
          ></Input>
          <p className="msgError">{msgError.slogan}</p>
          <Input
            htmlFor={"repo"}
            placeholder={"Ejemplo: https://github.com/Adalab/my-project"}
            data={data.repo}
            handleChangeInput={handleChangeInput}
            text={"Repositorio:"}
            pattern="^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$"
          ></Input>
          <p className="msgError">{msgError.repo}</p>
          <Input
            htmlFor={"demo"}
            placeholder={"Ejemplo: http://beta.adalab.es/my-project/"}
            data={data.demo}
            handleChangeInput={handleChangeInput}
            text={"Demo:"}
            pattern="^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$"
          ></Input>
          <p className="msgError">{msgError.demo}</p>
          <Input
            htmlFor={"technologies"}
            placeholder={"Ejemplo: React - SASS - HTML"}
            data={data.technologies}
            handleChangeInput={handleChangeInput}
            text={"Tecnologías:"}
          ></Input>
          <p className="msgError">{msgError.technologies}</p>
          <label htmlFor="desc" className="sectionForm__form__project--label">
            Descripción:
            <textarea
              className="sectionForm__form__project--textarea"
              type="text"
              placeholder="Ejemplo: Este es mi proyecto."
              name="desc"
              id="desc"
              value={data.desc}
              onChange={changeInput}
            ></textarea>
          </label>
        </fieldset>

        <fieldset className="sectionForm__form__autor">
          <legend className="sectionForm__form__autor--info">
            Cuéntanos sobre la autora
          </legend>
          <Input
            htmlFor={"autor"}
            placeholder={"Ejemplo: MariCarmen"}
            data={data.autor}
            handleChangeInput={handleChangeInput}
            text={"Nombre:"}
          ></Input>
          <p className="msgError">{msgError.autor}</p>
          <Input
            htmlFor={"job"}
            placeholder={"Ejemplo: Front-end developer"}
            data={data.job}
            handleChangeInput={handleChangeInput}
            text={"Profesión:"}
          ></Input>
          <p className="msgError">{msgError.job}</p>
        </fieldset>
        <fieldset className="sectionForm__form__button">
          <GetAvatar
            htmlFor="project"
            text="Subir foto del proyecto"
            avatar={project}
            updateAvatar={updateProject}
          />
          <GetAvatar
            htmlFor="autor"
            text="Subir foto de la autora"
            avatar={avatar}
            updateAvatar={updateAvatar}
          />
        </fieldset>
        <fieldset className="sectionForm__form__button">
          <ButtonCreateCard handle={handle} />
        </fieldset>
      </form>
      <div
        className={
          info.success
            ? "sectionForm__form__card"
            : "sectionForm__form__card hidden"
        }
      >
        <p className="sectionForm__form__card--text">
          {" "}
          La tarjeta ha sido creada:{" "}
        </p>
        <a
          className="sectionForm__form__card--link"
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          {url}
        </a>
      </div>
      <p
        className={
          info.success ? "hidden" : "sectionForm__form__card--errorMsg"
        }
      >
        {card}
      </p>
    </section>
  );
}
export default Form;
