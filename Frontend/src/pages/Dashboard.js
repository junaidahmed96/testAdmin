import React, { useEffect, useState } from "react";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";
import TableData from "../components/tableData";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { getUser } from "../api/user";

function Dashboard({ filterVal }) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log(filterVal);
    const fetchData = async () => {
      const data = await getUser("/user");

      setUsers(data);
    };
    fetchData().catch(console.error);
  }, []);

  const regx = new RegExp(filterVal, "g");
  const filterdUsers = users.filter((item) => item?.first_name?.match(regx));

  return (
    <Container>
      <Row>
        <Col
          style={{ width: 330 }}
          md={4}
          className="square border m-3 bg-light border"
        >
          <BarChart
            chartData={{
              labels: filterdUsers.map((data) => data.profession),
              datasets: [
                {
                  label: "User Gained",
                  data: filterdUsers.map((data) => data.experience),
                },
              ],
            }}
          />
        </Col>
        <Col
          style={{ width: 330 }}
          md={4}
          className="square border m-3 bg-light border"
        >
          <LineChart
            chartData={{
              labels: filterdUsers?.map((data) => data.country),
              datasets: [
                {
                  label: "User Gained",
                  data: filterdUsers.map((data) => data.experience),
                },
              ],
            }}
          />
        </Col>
        <Col
          md={4}
          style={{ width: 350 }}
          className="square border m-3 bg-light border"
        >
          <PieChart
            chartData={{
              labels: filterdUsers.map((data) => data.office),
              datasets: [
                {
                  label: "User Gained",
                  data: filterdUsers.map((data) => data.experience),
                },
              ],
            }}
          />
        </Col>
      </Row>
      <TableData userData={filterdUsers} />
    </Container>
  );
}

export default Dashboard;
