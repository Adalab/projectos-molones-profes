import { Link } from "react-router-dom";
import CardList from "./CardList";
import "../../styles/layout/Landing.scss";

function Landing(props) {


  return (
    <main className="mainLanding">
      <section className="mainLanding__section">
        {/* <label className="sectionForm__form__button--btn"> */}
        <label className="btn">
          <Link className="mainLanding__link" to="/create">
            Crea un nuevo proyecto
          </Link>
        </label>
      </section>
      <section className="mainLanding__sectionCard">
        <CardList cardsToShowP={props.allCards} />
      </section>
    </main>
  );
}
export default Landing;
