import { Navbar, Nav } from 'react-bootstrap'
import logo from '../assets/bng_logo.png'

const GenLink = (link, key) => (
  <Nav.Link key={key} href={link.path}>{link.label}</Nav.Link>
)

const SiteNav = (props) => {
  const leftLinks = props.links.filter(link => !link.right).map(GenLink)
  const rightLinks = props.links.filter(link => link.right).map(GenLink)

  let padding = props.paddingBottom ? "mb-3" : ""
  padding = padding + " navbar-color navbar-dark"

  return (
    <Navbar expand="lg" className={padding}>
      <Navbar.Brand href="#home"><img className="navbar-logo" src={logo} /></Navbar.Brand>
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