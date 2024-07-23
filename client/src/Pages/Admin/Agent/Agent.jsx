import React, { useEffect, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../../api/axiosInstance";

function Agent() {
  const [agents, setAgents] = useState([]);
  const navigateTo = useNavigate();

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await axiosInstance.get("/agents");
        setAgents(response.data);
      } catch (err) {
        console.error("There was an error fetching the agents!", err);
      }
    };

    fetchAgents();
  }, []);

  const handleClick = () => {
    navigateTo("/admin/agent-add");
  };

  return (
    <>
      <Row className="mt-5 g-0">
        <Col xs="auto">
          <Button variant="primary" size="md" onClick={handleClick}>
            Add Agent
          </Button>
        </Col>
      </Row>
      <Row className="table-responsive mt-5">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Facebook</th>
              <th>Instagram</th>
              <th>Twitter</th>
              {/* <th>Image</th> */}
            </tr>
          </thead>
          <tbody>
            {agents.map((agent, index) => (
              <tr key={agent._id}>
                <td>{index + 1}</td> {/* Displaying index as 1-based */}
                <td>{agent.Name}</td>
                <td>{agent.Description}</td>
                <td>
                  <a
                    href={agent.FbLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </td>
                <td>
                  <a
                    href={agent.InstaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </td>
                <td>
                  <a
                    href={agent.TwitterLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </td>
                {/* <td>
                  <img
                    src={agent.Image}
                    alt={agent.Name}
                    style={{ width: "50px", height: "auto" }}
                  />
                </td> */}
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </>
  );
}

export default Agent;
