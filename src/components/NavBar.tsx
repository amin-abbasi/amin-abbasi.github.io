import { Navbar, Nav, Container } from "react-bootstrap";
import React, { useEffect, useState, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled, { ThemeContext } from "styled-components";
import endpoints from "../constants/endpoints";
import ThemeToggler from "./ThemeToggler";
import { Theme } from "../theme/themes";
import { NavbarData } from "../types/profile.types";

const styles = {
  logoStyle: {
    width: 50,
    height: 40,
  },
};

const ExternalNavLink = styled.a<{ theme: Theme }>`
  color: ${(props) => props.theme.navbarTheme.linkColor};
  margin-left: 0.75em;
  margin-right: 0.75em;
  font-size: 0.82rem;
  font-family: var(--font-mono);
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  border-bottom: 3px solid transparent;

  &:hover {
    color: ${(props) => props.theme.navbarTheme.linkHoverColor};
  }
  &::after {
    background-color: ${(props) => props.theme.accentColor};
  }
`;

const InternalNavLink = styled(NavLink)<{ theme: Theme }>`
  color: ${(props) => props.theme.navbarTheme.linkColor};
  margin-left: 0.75em;
  margin-right: 0.75em;
  font-size: 0.82rem;
  font-family: var(--font-mono);
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  border-bottom: 3px solid transparent;

  &:hover {
    color: ${(props) => props.theme.navbarTheme.linkHoverColor};
  }
  &::after {
    background-color: ${(props) => props.theme.accentColor};
  }
  &.active {
    color: ${(props) => props.theme.navbarTheme.linkActiveColor};
  }
`;

function NavBar() {
  const theme = useContext(ThemeContext) as Theme;
  const [data, setData] = useState<NavbarData | null>(null);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    fetch(endpoints.navbar, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res: NavbarData) => setData(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Navbar
      fixed="top"
      expand="md"
      bg={theme.bsPrimaryVariant}
      variant={theme.bsPrimaryVariant}
      className="navbar-custom"
      expanded={expanded}
    >
      <Container>
        {data?.logo && (
          <Navbar.Brand as={NavLink} to="/">
            <img
              src={data?.logo?.source}
              className="d-inline-block align-top"
              alt="main logo"
              style={
                data?.logo?.height && data?.logo?.width
                  ? { height: data?.logo?.height, width: data?.logo?.width }
                  : styles.logoStyle
              }
            />
          </Navbar.Brand>
        )}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />
          <Nav>
            {data &&
              data.sections?.map((section) =>
                section?.type === "link" ? (
                  <ExternalNavLink
                    key={section.title}
                    href={section.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setExpanded(false)}
                    className="navbar__link"
                    theme={theme}
                  >
                    {section.title}
                  </ExternalNavLink>
                ) : (
                  <InternalNavLink
                    key={section.title}
                    onClick={() => setExpanded(false)}
                    className="navbar__link"
                    to={section.href}
                    end={section.href === "/"}
                  >
                    {section.title}
                  </InternalNavLink>
                ),
              )}
          </Nav>
          <ThemeToggler onClick={() => setExpanded(false)} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
