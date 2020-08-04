import React from "react";
import {
  Navbar,
  NavbarBrand,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const Navigation = (props) => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Employee Directory</NavbarBrand>
        <FormGroup>
          <Label for="exampleEmail"></Label>
          <Input
            type="text"
            name="input"
            id="Search"
            placeholder="Search Last Name"
          />
        </FormGroup>
      </Navbar>
    </div>
  );
};

export default Navigation;
