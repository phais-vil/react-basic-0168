import React from "react";
import NavberBase from "../common/NavbarBase";
import FooterBase from "../common/FooterBase";
import { Container } from "react-bootstrap";
export default function MainLayout({ chaildran }) {
  return (
    <div className="app">
      <NavberBase />
      <Container>{chaildran}</Container>
      <FooterBase />
    </div>
  );
}
