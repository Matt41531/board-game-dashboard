import { useContext } from "react";
import { CardsContext } from "@/hooks/cardsContext";
import TransformedImage from "@/components/common/TransformedImage";

function Cards() {
  const { cardResults } = useContext(CardsContext);
  console.log(cardResults);
  return (
    <div className="flex-1 overflow-auto p-4">
      <main className="flex flex-wrap gap-4 justify-center">
        {cardResults &&
          cardResults.map((card) => (
            <div className="aspect-[240/336] w-[240px]" key={card.id}>
              <TransformedImage
                src={card.img_url}
                alt={card.name}
                width={240}
                height={336}
                className="w-full h-full hover:scale-110 transition object-cover"
                quality={85}
              />
            </div>
          ))}
      </main>
    </div>
  );
}

export default Cards;
