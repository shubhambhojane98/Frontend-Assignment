import React, { useState } from "react";
import SearchBar from "../component/SearchBar/SearchBar";
import DataTable from "../component/DataTable/DataTable";
import Pagination from "../component/Pagination/Pagination";
import "./Home.css";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  return (
    <div className="main-container">
      <div>
        <h1 className="heading">NBA TEAMS</h1>
      </div>
      <div>
        <SearchBar setSearchTerm={(ev) => setSearchTerm(ev)} />
      </div>

      <div>
        <DataTable page={page} searchTerm={searchTerm} />
      </div>

      <div>
        <Pagination page={page} setPage={(page) => setPage(page)} />
      </div>
    </div>
  );
};

export default Home;
