import { Input } from "../ui/input";
import { supabase } from "../../../utils/supabase";
import { useState, useEffect } from "react";

function HeaderSearchBar() {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        handleSubmit();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function handleSubmit() {
    searchBirdsByName();
  }

  async function searchBirdsByName() {
    try {
      const { data, error } = await supabase
        .from("cards")
        .select("name, image_url")
        .ilike("name", `%${searchText}%`);

      if (error) {
        throw new Error(error.message);
      }

      console.log("Search results:", data);
    } catch (error) {
      console.error("Search error:", error);
    }
  }

  return (
    <Input
      type="search"
      placeholder="Search birds..."
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />
  );
}

export default HeaderSearchBar;
