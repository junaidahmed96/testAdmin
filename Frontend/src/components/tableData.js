import Table from "react-bootstrap/Table";

function TableData(prop) {
  console.log(prop.userData);
  return (
    <Table style={{ width: "97%" }} striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Country</th>
          <th>Age</th>
          <th>Profession</th>
          <th>Office</th>
          <th>Contact No</th>
          <th>Experience</th>
        </tr>
      </thead>
      {prop?.userData?.length
        ? prop.userData.map((data, index) => {
            return (
              <tbody>
                <tr>
                  <td key={index}>{index}</td>
                  <td>{data.first_name}</td>
                  <td>{data.last_name}</td>
                  <td>{data.email}</td>
                  <td>{data.country}</td>
                  <td>{data.age}</td>
                  <td>{data.profession}</td>
                  <td>{data.office}</td>
                  <td>{data.contact_no}</td>
                  <td>{data.experience}</td>
                </tr>
              </tbody>
            );
          })
        : "No Data Found"}
    </Table>
  );
}

export default TableData;
