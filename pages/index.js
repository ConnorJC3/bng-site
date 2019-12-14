import "../scss/styles.scss"

import { Container, Image } from 'react-bootstrap'

import { SiteNav as Nav } from '../components/'
import { NAV_LINKS } from '../config'

const App = () => {
  return (
    <>
    <Nav links={NAV_LINKS} />
    <div className="banner text-center">
      <Image src={require('../assets/images/banner.jpg')} fluid />
      <div className="over-img">
        <h1 className="display-1 d-none d-sm-block">GG, Easy.</h1>
      </div>
    </div>
    <Container>
    </Container>
    </>
  )
}

export default App