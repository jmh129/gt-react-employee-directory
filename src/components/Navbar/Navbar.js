import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const Navigation = (props) => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Employee Directory</NavbarBrand>
      </Navbar>
    </div>
  );
};

export default Navigation;
