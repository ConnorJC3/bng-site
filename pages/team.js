import "../scss/styles.scss"

import { Container } from 'react-bootstrap'

import { SiteNav as Nav } from '../components/'
import { NAV_LINKS } from '../config'

const Team = () => {
  return (
    <>
    <Nav links={NAV_LINKS} />
    <Container>
      ahhh
    </Container>
    </>
  )
}

export default Team