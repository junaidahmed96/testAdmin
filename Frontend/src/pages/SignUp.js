import React from "react";
import { useState } from "react";
import { Button, Form, Col, Container, Row } from "react-bootstrap";
import { userRegister } from "../api/authorization";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

const SignUp = () => {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [office, setOffice] = useState("");
  const [experience, setExperience] = useState(0);
  const [profession, setProfession] = useState("");
  const [country, setCountry] = useState("");
  const [contactNo, setContactno] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      email: user,
      password: pwd,
      first_name: fName,
      last_name: lName,
      age: age,
      office: office,
      experience: experience,
      profession: profession,
      address: address,
      country: country,
      contact_no: contactNo,
    };

    const authorization = await userRegister("/register", data);

    setUser("");
    setPwd("");
    setFname("");
    setLname("");
    setAge("");
    setOffice("");
    setExperience(0);
    setProfession("");
    setAddress("");
    setCountry("");
    setContactno("");
    swal({
      title: "You are Successfully Created",
      icon: "success",
      button: "Done",
      type: "success",
    }).then((success) => {
      history.push("/signin");
    });
  };

  return (
    <>
      <Container className="mt-5 text-center">
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={(e) => setUser(e.target.value)}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(e) => setPwd(e.target.value)}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>FirstName</Form.Label>
              <Form.Control
                onChange={(e) => setFname(e.target.value)}
                type="text"
                placeholder="Enter FirstName"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>LastName</Form.Label>
              <Form.Control
                onChange={(e) => setLname(e.target.value)}
                type="text"
                placeholder="Enter LastName"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridAddress">
              <Form.Label>Contact</Form.Label>
              <Form.Control
                onChange={(e) => setContactno(e.target.value)}
                type="text"
                placeholder="Enter ContactNo"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Age</Form.Label>
              <Form.Control
                onChange={(e) => setAge(e.target.value)}
                type="text"
                placeholder="Enter Age"
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Country"
                onChange={(e) => setCountry(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Office</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Company Name"
                onChange={(e) => setOffice(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Experience</Form.Label>
              <Form.Control
                type="Number"
                placeholder="Enter Experience"
                onChange={(e) => setExperience(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Profession</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Profession Name"
                onChange={(e) => setProfession(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};
export default SignUp;
