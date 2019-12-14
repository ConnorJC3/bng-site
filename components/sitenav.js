import { Navbar, Nav } from 'react-bootstrap'

const GenLink = (link, key) => (
  <Nav.Link key={key} href={link.path}>{link.label}</Nav.Link>
)

const SiteNav = (props) => {
  const leftLinks = props.links.filter(link => !link.right).map(GenLink)
  const rightLinks = props.links.filter(link => link.right).map(GenLink)

  return (
    <Navbar bg="light" expand="lg" className="mb-3">
      <Navbar.Brand href="#home">BNG</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {leftLinks}
        </Nav>
        <Nav>
          {rightLinks}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default SiteNav