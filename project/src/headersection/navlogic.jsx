import React from "react";
import { Nav } from "react-bootstrap";

const Navlogic = () => {
  let list = ["Home", "Our Mission", "About Us", "Gallery", "Contact"];

  return (
    <Nav className="ms-auto text-uppercase fw-semibold flex-column flex-lg-row">
      {list.map((menu, i) => (
        <Nav.Link
          key={i}
          href="#"
          className="text-dark mx-lg-2 px-3 py-2 rounded fs-5 fw-600 text-center text-lg-start"
        >
          {menu}
        </Nav.Link>
      ))}
    </Nav>
  );
};

export default Navlogic;
