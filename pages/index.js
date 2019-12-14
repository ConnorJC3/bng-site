import "../scss/styles.scss"

import { Container } from 'react-bootstrap'

import { SiteNav as Nav } from '../components/'
import { NAV_LINKS } from '../config'

const App = () => {
  return (
    <>
    <Nav links={NAV_LINKS} />
    <Container>
    </Container>
    </>
  )
}

export default App