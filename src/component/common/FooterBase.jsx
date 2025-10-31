import { Container, Navbar } from "react-bootstrap";
function FooterBase() {
  return (
    <Navbar bg="warning" data-bs-theme="dark" fixed="bottom">
      <Container>
        <Navbar.Brand href="/home">DPU UNIVERSITy</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default FooterBase;
