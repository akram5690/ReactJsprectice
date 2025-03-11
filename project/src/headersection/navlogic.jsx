import React from 'react';
import Nav from 'react-bootstrap/Nav';

const Navlogic = () => {
  let list = ["Home", "Our Mission", "About Us", "Gallery", "Contact"];

  return (
    <Nav className="ms-auto text-uppercase fw-semibold">
      {list.map((menu, i) => (
        <Nav.Link key={i} href="#" className="text-dark mx-2 px-3 py-2 rounded fs-5 fw-600">
          {menu}
        </Nav.Link>
      ))}
    </Nav>
  );
}

export default Navlogic;
