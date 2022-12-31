import { useEffect, useState } from "react";

function useData() {
  const [teams, setTeams] = useState([]);

  const getAllGames = () => {
    return fetch("https://www.balldontlie.io/api/v1/games")
      .then((res) => res.json())
      .then((json) => setTeams(json.data));
  };

  useEffect(() => {
    getAllGames();
  }, []);

  return { teams };
}

export default useData;
