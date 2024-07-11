import React, { useEffect, useState } from "react";
import { Navbar, Container } from "react-bootstrap";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(fale)

  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 50 ?
        setScrolled(true) :
        setScrolled(false)

    }
    window.addEventListener("scroll",onScroll);
    return () => window.removeEventListener("scroll",onscroll)
  },[])

  return (
    <Navbar expand="lg" className={scrolled?"scrolled":""}>
      <Container>
        <Navbar.Brand href="#home">PORTFOLIO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggle-button"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='home'?active-navbar-link: navbar-link}  onClick={()=>{
              setActiveLink('home')
            }}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? active - navbar - link : navbar - link} onClick={() => {
              setActiveLink('skills')
            }}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? active - navbar - link : navbar - link} onClick={() => {
              setActiveLink('projects')
            }}>Projects</Nav.Link>
          </Nav>
          <span>
            <div className="social-icon">
              <a href="#" alt="">
                <img src={" "} alt="" />
              </a>
              <a href="#" alt="">
                <img src={" "} alt="" />
              </a>
              <a href="#" alt="">
                <img src={" "} alt="" />
              </a>
            </div>
            <button className="vvd" onClick={() => { console.log("connect") }}>
              <span>Download My Resume</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
