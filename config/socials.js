import { faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Col } from "react-bootstrap"

const SOCIALS = [
  {
    variant: 'twitter',
    link: 'https://twitter.com/BrokenNeckGang',
    icon: faTwitter,
    text: 'Follow Us @BrokenNeckGang'
  },
  {
    variant: 'youtube',
    link: 'https://www.youtube.com/channel/UCDNSabrTdcK325q3n3Jvo5A',
    icon: faYoutube,
    text: 'Subscribe on Youtube'
  },
  
]

export const MappedSocialButtons =  SOCIALS.map((social, key) => (
  <Col xs={12} sm={6}>
    <Button block key={key} size="lg" variant={social.variant} href={social.link} target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={social.icon} className="mr-2" />
      {social.text}
    </Button>
  </Col>
  )
)