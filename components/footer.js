import { Container } from "react-bootstrap"

const Footer = (props) => (
  <div className="w-100 footer-color text-center">
    <Container className="mt-5">
      <p className="mb-0 py-2">Made with love by <a href="https://twitter.com/FrogerWasTaken">Chris</a></p>
      <p className="mb-0 py-2"><a href="https://github.com/ChristopherJMiller/bng-site">Github</a> | <a href="https://quay.io/repository/christopherjmiller/bng-home">Quay.io</a></p>
    </Container>
  </div>
)

export default Footer