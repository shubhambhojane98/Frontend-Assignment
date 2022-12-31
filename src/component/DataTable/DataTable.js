import { useState } from "react";
import Table from "react-bootstrap/Table";
import useData from "../../hooks/useAllGamesData";
import SidePanel from "../SidePanel/SidePanel";
import "./DataTable.css";

function DataTable({ searchTerm, page }) {
  const { teams } = useData();
  const [show, setShow] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState();

  return (
    <>
      <Table className="table" borderless={true} size="sm">
        <thead className="table-head">
          <tr>
            <th>Team Name</th>
            <th>City</th>
            <th>Abbrevation</th>
            <th>Conference</th>
            <th>Division</th>
          </tr>
        </thead>
        <tbody>
          {teams
            .slice(page * 8 - 8, page * 8)
            .filter((value) => {
              if (
                value.home_team.name
                  ?.toLowerCase()
                  .includes(searchTerm?.toLowerCase())
              ) {
                return value;
              } else if (value === "") {
                console.log(value);
                return value;
              }
            })
            .map((team) => (
              <tr
                className="table-row"
                style={{
                  backgroundColor:
                    selectedTeam?.id === team.id && show
                      ? "#F2F2F2"
                      : "#F8FBFD",
                }}
                key={team.id}
                onClick={() => {
                  setShow(true);
                  setSelectedTeam(team);
                }}
              >
                <td>{team.home_team.name}</td>
                <td>{team.home_team.city}</td>
                <td>{team.home_team.abbreviation}</td>
                <td>{team.home_team.conference}</td>
                <td>{team.home_team.division}</td>
              </tr>
            ))}
        </tbody>
      </Table>
      <SidePanel selectedTeam={selectedTeam} show={show} setShow={setShow} />
    </>
  );
}

export default DataTable;
