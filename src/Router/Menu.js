import React from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";

function Menu() {
  return (
    <div>
      <Navbar>
        <Nav className="me-auto">
          <NavItem>
            <NavLink href="/">MCinema</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/tickets">Tickets</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/movies">Movies</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/cinemas">Cinemas</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/articles">Articles</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/community">Community</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Settings
            </DropdownToggle>
            <DropdownMenu right>
              <NavItem>
                <NavLink href="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/logout">Logout</NavLink>
              </NavItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Menu;
