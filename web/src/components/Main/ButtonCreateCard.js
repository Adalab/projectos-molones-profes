function ButtonCreateCard({ handle }) {

  const createCard = () => {
    handle()
  }

  return (
    <input
      className="sectionForm__form__button--btnLarge"
      type="submit"
      value="CREAR TARJETA"
      onClick={createCard}
    />
  )
}

export default ButtonCreateCard;