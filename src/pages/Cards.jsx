import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabase";

function Cards() {
  const [wingspanCards, setWingspanCards] = useState(null);
  useEffect(() => {
    getCards();
  }, []);

  async function getCards() {
    try {
      const { data, error } = await supabase.from("cards").select("*");
      if (error) {
        throw new Error(error.message);
      }
      setWingspanCards(data);
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div className="flex-1 overflow-auto p-4">
      <div className="flex flex-wrap gap-4 justify-center">
        {wingspanCards &&
          wingspanCards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col items-center w-64 bg-chart-4 rounded-lg shadow-md p-4"
            >
              <h3 className="text-lg font-semibold mb-2">{card.name}</h3>
              <img
                src={card.img_url}
                alt={card.name}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Cards;
