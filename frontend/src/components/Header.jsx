import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Badge,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import "../index.css";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.log(Error);
    }
  };

  return (
    <header>
      <Navbar className="color-nav" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img className="logo" src={"../logo/logo.png"} alt="Logo" />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {userInfo ? (
                <>
                  <NavDropdown
                    title={
                      <span style={{ color: "#000" }}>
                        <b>{userInfo.name}</b>
                      </span>
                    }
                    id="username"
                  >
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>
                        <span style={{ color: "#000" }}>
                          <b>Profile</b>
                        </span>
                      </NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/itemCreation">
                      <NavDropdown.Item>
                        <span style={{ color: "#000" }}>
                          <b>List Item</b>
                        </span>
                      </NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      <span style={{ color: "#000" }}>
                        <b>Log Out</b>
                      </span>
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <LinkContainer to="/login">
                    <Nav.Link>
                      <FaSignInAlt />{" "}
                      <span style={{ color: "#000" }}>
                        <b>Log In</b>
                      </span>
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/register">
                    <Nav.Link>
                      <FaSignInAlt />{" "}
                      <span style={{ color: "#000" }}>
                        <b>Register</b>
                      </span>
                    </Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
