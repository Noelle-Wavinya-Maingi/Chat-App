import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" classname="mb-4" style={{ height: "3.75rem" }}>
      <Container>
        <h1>
          <Link to="/" className="link-light text-decoration-none">
            ChatApp
          </Link>
        </h1>
        <span className="text-warning">Logged in as Charles</span>
        <Nav>
          <Stack direction="horizontal" gap={3}>
            <Link to="/login" className="link-light text-decoration-none">
              Login
            </Link>
            <Link to="/register" className="link-light text-decoration-none">
              Register
            </Link>
          </Stack>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
