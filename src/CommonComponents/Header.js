import React from "react";
import { MDBCardHeader } from "mdbreact";

const Header = ({ title }) => {
  return (
    <MDBCardHeader color="deep-orange lighten-1" className="mb-5">
      <h3>{title}</h3>
    </MDBCardHeader>
  );
};

export default Header;
