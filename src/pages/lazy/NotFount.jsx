import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Container className="min-vh-100 d-flex align0-items-center">
      <div className="justify-content-center">
        <p>
          <h1>Error 404 ไม่่พบหน้านี้</h1>
        </p>
        <Button as={Link} to="/" variant="primary">
          ไปหน้าหลัก
        </Button>
      </div>
    </Container>
  );
}
