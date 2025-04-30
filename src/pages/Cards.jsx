import { useContext } from "react";
import { CardsContext } from "@/hooks/cardsContext";

function Cards() {
  const { cardResults } = useContext(CardsContext);
  console.log(cardResults);
  return (
    <div className="flex-1 overflow-auto p-4">
      <main className="flex flex-wrap gap-4 justify-center">
        {cardResults &&
          cardResults.map((card) => (
            <img
              key={card.id}
              src={card.img_url}
              alt={card.name}
              className="w-1/8 hover:scale-110 transition"
            />
          ))}
      </main>
    </div>
  );
}

export default Cards;
