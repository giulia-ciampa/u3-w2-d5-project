import { Navbar, Nav, Container, Button } from "react-bootstrap"

const WeatherNavbar = function () {
  return (
    <>
      <Navbar expand="md" className="background1">
        <Container fluid className="px-5">
          <Navbar.Brand>
            <img src="/meteo.png" alt="logo-meteo" className="navbar-logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="#home" className="active text-white mx-2">
                Home
              </Nav.Link>
              <Nav.Link href="#link" className="navbar-text mx-2">
                Contatti
              </Nav.Link>
            </Nav>
            <Button className="py-1 fs-6 btn-color">Accedi</Button>
          </Navbar.Collapse>
          <Nav className="mx-auto">
            <Nav.Link href="#link" className="fs-5 fst-italic text-white ps-3">
              Benvenuti sul nostro sito
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default WeatherNavbar
