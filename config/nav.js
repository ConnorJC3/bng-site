import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'

const IconLink = (props) => (
  <><FontAwesomeIcon icon={props.icon} /> {props.name}</>
)

const NAV_LINKS = [
  {
    label: "Home",
    path: "/"
  },
  {
    label: "Teams",
    path: "/teams"
  },
  {
    label: <IconLink icon={faDiscord} name="Join Our Discord" />,
    path: "https://discord.gg/b3hajH3",
    right: true
  }
]

export default NAV_LINKS