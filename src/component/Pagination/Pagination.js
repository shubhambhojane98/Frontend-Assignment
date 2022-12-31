import React from "react";
import useData from "../../hooks/useAllGamesData";
import "./Pagination.css";

const Pagination = ({ page, setPage }) => {
  const { teams } = useData();

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= teams.length / 8 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  return (
    <div className="pagination">
      <span
        onClick={() => selectPageHandler(page - 1)}
        className="pagination-button"
      >
        {"<"}
      </span>

      {[...Array(Math.round(teams.length / 8))].map((_, i) => {
        return (
          <span
            key={i}
            className="pagination-button"
            onClick={() => selectPageHandler(i + 1)}
          >
            {i + 1}
          </span>
        );
      })}

      <span
        onClick={() => selectPageHandler(page + 1)}
        className="pagination-button"
      >
        {">"}
      </span>
    </div>
  );
};

export default Pagination;
