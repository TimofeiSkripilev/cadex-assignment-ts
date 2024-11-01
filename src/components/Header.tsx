"use client";

import React from "react";
import { AppBar, Toolbar, Typography, Link } from "@mui/material";
import ContactButton from "./ContactButton";
import { styled } from "@/stitches.config";
const StyledAppBar = styled(AppBar, {
  background: "$background",
  backdropFilter: "blur(10px)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  position: "sticky",
  top: 0,
  zIndex: 1100,
  width: "100%",
});

const NavLinks = styled("div", {
  marginLeft: "auto",
  display: "flex",
  alignItems: "center",
  gap: "$3",

  "& a": {
    color: "$textInverse",
    textDecoration: "none",
    transition: "$default",

    "&:hover": {
      opacity: 0.9,
      transform: "translateY(-1px)",
    },
  },
});

const LogoLink = styled(Link, {
  color: "$textLight",
  textDecoration: "none",
  fontWeight: "$bold",
  transition: "color 0.2s ease-in-out",
  padding: "$2",

  "&:hover": {
    color: "$text",
  },
});

const Header: React.FC = () => (
  <StyledAppBar position="sticky" role="banner">
    <nav aria-label="Main navigation">
      <Toolbar>
        <LogoLink href="/" aria-label="Home">
          <Typography variant="h6" component="span">
            Some Company
          </Typography>
        </LogoLink>
        <NavLinks>
          <ContactButton />
        </NavLinks>
      </Toolbar>
    </nav>
  </StyledAppBar>
);

export default Header;
