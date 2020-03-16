import "../scss/styles.scss"

import { Container, Image, Button, Col, Row } from 'react-bootstrap'

import { SiteNav as Nav } from '../components/'
import { NAV_LINKS } from '../config'

import { TwitterTimelineEmbed } from 'react-twitter-embed';

import Teams from '../components/teams'
import { MappedSocialButtons } from '../config/socials'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faScroll } from '@fortawesome/free-solid-svg-icons'
import Footer from "../components/footer";

const App = () => {
  return (
    <>
    <Nav links={NAV_LINKS} />
    <div className="banner">
      <div className="banner-gradient" />
      <div className="over-img">
        <h1 className="banner-text display-4 d-none d-sm-block">BNG is Gaineville's Fastest Growing Esports Team</h1>
      </div>
    </div>
    
    <Container>
      <h1>For the love of the game,</h1>
      <p>Broken Neck Gang was founded on the principle of creating a community for passionate players.</p>
      <h1>Our Socials</h1>
      <Container>
      <Row>
        {MappedSocialButtons}
      </Row>
      </Container>
      <h1>Our Members</h1>
    </Container>
    <Teams />
    <Footer />
    </>
  )
}

export default App