import { Container, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand>
            <Link href="/">
              <a className="text-decoration-none"> NextJs ❤️</a>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
              <Link href="/about-us">
                <a className="nav-link">About</a>
              </Link>
              <Link href="/blog">
                <a className="nav-link">Blog</a>
              </Link>
              <Link href="/product">
                <a className="nav-link">Product</a>
              </Link>
              <Link href="/contact">
                <a className="nav-link">Contact</a>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
