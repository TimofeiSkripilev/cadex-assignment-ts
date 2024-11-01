"use client";

import React from "react";
import { AppBar, Toolbar, Typography, Link } from "@mui/material";
import ContactButton from "./ContactButton";
import { styled } from "@/stitches.config";
const StyledAppBar = styled(AppBar, {
  backgroundColor: "$primary",
  boxShadow: "$md",
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
  color: "$textInverse",
  textDecoration: "none",
  transition: "$default",
  padding: "$2",

  "&:hover": {
    opacity: 0.9,
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
