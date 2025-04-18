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
            <img
              key={card.id}
              src={card.img_url}
              alt={card.name}
              className="w-1/8 hover:scale-110 transition"
            />
          ))}
      </div>
    </div>
  );
}

export default Cards;
