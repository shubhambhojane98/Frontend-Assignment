import { useEffect, useState } from "react";

function useData() {
  const [teams, setTeams] = useState([]);
  const [order, setOrder] = useState("ASC");
  const [isloading, setIsLoading] = useState(false);

  const getAllGames = () => {
    setIsLoading(true);
    return fetch("https://www.balldontlie.io/api/v1/games")
      .then((res) => res.json())
      .then((json) => {
        setTeams(json.data);
        setIsLoading(false);
      });
  };
  function handleHeaderClick() {
    if (order === "ASC") {
      const newdata = [...teams].sort((a, b) =>
        a["home_team"].city > b["home_team"].city ? 1 : -1
      );
      setTeams(newdata);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const newdata = [...teams].sort((a, b) =>
        a["home_team"].city < b["home_team"].city ? 1 : -1
      );
      setTeams(newdata);
      setOrder("ASC");
    }
  }

  useEffect(() => {
    getAllGames();
  }, []);

  return { teams, handleHeaderClick, order, isloading };
}

export default useData;
