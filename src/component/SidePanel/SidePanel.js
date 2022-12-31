import React from "react";
import Modal from "react-bootstrap/Modal";
import "./SidePanel.css";

const SidePanel = ({ show, setShow, selectedTeam }) => {
  return (
    <div>
      <div className="custom-modal">
        <Modal
          className="custom"
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="custom-width"
          contentClassName="custom-height"
          aria-labelledby="example-custom-modal-styling-title"
          fullscreen={true}
        >
          <Modal.Header className="team-name" closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              {selectedTeam?.home_team.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ height: "90%" }}>
            <div>
              <div className="game">
                <table>
                  <tr>
                    <td>Team Full Name</td>
                    <td>{selectedTeam?.home_team.full_name}</td>
                  </tr>
                  <tr>
                    <th>Random Game Detail</th>
                  </tr>
                  <tr>
                    <th>Date</th>
                    <th>{selectedTeam?.date.slice(0, 10)}</th>
                  </tr>
                  <tr>
                    <th>Home Team</th>
                    <th>{selectedTeam?.home_team.name}</th>
                  </tr>
                  <tr>
                    <th>Home Team Score</th>
                    <th>{selectedTeam?.home_team_score}</th>
                  </tr>
                  <tr>
                    <th>Visitor Team</th>
                    <th>{selectedTeam?.visitor_team.name}</th>
                  </tr>
                  <tr>
                    <th>Visitor Team Score</th>
                    <th>{selectedTeam?.visitor_team_score}</th>
                  </tr>
                </table>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default SidePanel;
