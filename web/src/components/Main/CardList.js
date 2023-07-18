import Card from './Card';

function CardList({ cardsToShowP }) {
  console.log(cardsToShowP);
  const loqsea = cardsToShowP.map((eachCard) => {
    return (
      <li className="eachCard">
        <Card data={eachCard} avatar={eachCard.photo} />
      </li>
    );
  });

  return <ul className="ulCard">{loqsea}</ul>;
}

export default CardList;
