import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { userLogout } from "../api/authorization";
function Header() {
  const user = JSON.parse(localStorage.getItem("user"));
  const handleLogout = async () => {
    await userLogout("/logout");
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Collapse className="justify-content-end">
          {user?.user?.first_name ? (
            <Navbar.Text>
              Welcome to {user.user.first_name}
              <br />
              <a onClick={handleLogout} href="/signin">
                Logout
              </a>
            </Navbar.Text>
          ) : (
            <>
              <Navbar.Text>
                Welcome To Test Admin
                <br />
                <a href="/signin">Login</a>
              </Navbar.Text>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
