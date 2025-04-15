import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabase";

function Cards() {
  const [wingspanCards, setWingspanCards] = useState(null);
  useEffect(() => {
    console.log("CALL CARD API");
    getCards();
  }, []);

  async function getCards() {
    try {
      const response = await supabase.from("cards").select("*");
      if (!response.ok) {
        throw new Error("Reponse status: " + response.status);
      }
      const json = await response.json();
      setWingspanCards(json);
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <h1>CARDS PAGE HERE</h1>
      {wingspanCards && wingspanCards[0].name}
    </div>
  );
}

export default Cards;
