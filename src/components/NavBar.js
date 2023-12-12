import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activateLink, setActivateLink] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActivateLink = (value) => {
    setActivateLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="7">
          <img src={''} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <span className="navbar-toggles-icon"></span>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={activateLink === 'home' ? 'avtivate navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActivateLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={activateLink === 'skills' ? 'avtivate navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActivateLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={activateLink === 'projects' ? 'avtivate navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActivateLink('projects')}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <img src={''} alt="" />
              </a>
              <a href="#">
                <img src={''} alt="" />
              </a>
              <a href="#">
                <img src={''} alt="" />
              </a>
            </div>
            <button className="vvd" onClick={() => console.log('conectado')}>
              <span>iniciar secion</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
