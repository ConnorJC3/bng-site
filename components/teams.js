import "../scss/styles.scss"

import { Container, Card, Col, Row, Badge, Nav, Button } from 'react-bootstrap'

import { SiteNav } from '../components'
import { NAV_LINKS, ROSTER } from '../config'
import { useState } from "react"
import posed, { PoseGroup } from 'react-pose'

const Posing = posed.div({
  enter: { width: '100%', scale: 1, x: 0, transition: {duration: 300}},
  exit: { width: '25%', scale: 1, x: 0 },
  hover: { x: -10, scale: 1.1 }
})

const RosterCard = (props) => {
  const member = props.member

  const [active, setActive] = useState(false)
  const [shouldClose, startClosing] = useState(false)
  const imageSize = active && !shouldClose ? 4 : shouldClose ? 6 : 12

  const [hovering, setHovering] = useState(false)

  const closeButton = (
    <Card.Header>
      <button type="button" className="close" aria-label="Close" onClick={() => startClosing(true)}>
        <span aria-hidden="true">&times;</span>
      </button>
    </Card.Header>
  )

  const mainBadges = member.mains.map((main, key) => (
    <Badge pill key={key} variant="info" className = 'mr-1'>
      {main}
    </Badge>
  ))

  let bio = (
    <Col xs={8}>
      <Card.Body>
        <Card.Text>
          <Card.Title>{member.name}</Card.Title>
          <Card.Subtitle>{member.realName}</Card.Subtitle>
          {mainBadges}
          <hr />
          {member.bio}
        </Card.Text>
      </Card.Body>
    </Col>
  )

  if (!active || shouldClose) {
    bio = (
      <Col xs={shouldClose ? 8 : 12}>
        <Card.Body>
          <Card.Title>{member.name}</Card.Title>
          <Card.Subtitle>{member.realName}</Card.Subtitle>
        </Card.Body>
      </Col>
    )
  }

  const pose = !shouldClose && active ? 'enter' : shouldClose ? 'exit' : hovering ? 'hover' : 'exit'

  const minimize = () => {
    if (shouldClose) {
      startClosing(false)
      setActive(false)
      setHovering(false)
    }
  }

  return (
    <Posing pose={pose} onPoseComplete={minimize}>
      <Card 
        className={hovering || active ? 'shadow m-2' : 'm-2'} 
        onMouseEnter={() => setHovering(true)} 
        onMouseLeave={() => setHovering(false)}
        onClick={() => {if (!active) setActive(true)}}
        style={hovering && !active ? {cursor: 'pointer'} : {}}
      >
        {active ? closeButton : null}
        <Row>
          <Col xs={imageSize}>
            <Card.Img variant="top" src={member.image} />
          </Col>
          {bio}
        </Row>
      </Card>
    </Posing>
  )
}

// 4 - width | 4, 4 ,4
// Click
// 12 - width (collapse animation right) | 12, 4, 4

const Teams = () => {
  const rosterList = ROSTER.map((member, key) => (
    <RosterCard key={key} member={member} />
  ))

  return (
    <Container>
      <Row>
          <PoseGroup>
            {rosterList}
          </PoseGroup>
      </Row>
    </Container>
  )
}

export default Teams