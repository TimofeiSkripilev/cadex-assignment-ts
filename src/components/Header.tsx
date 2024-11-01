"use client";

import React from "react";
import { AppBar, Toolbar, Typography, Link } from "@mui/material";
import ContactButton from "./ContactButton";
import { styled } from "@/stitches.config";
const StyledAppBar = styled(AppBar, {
  background: "$background !important", // Add !important
  backdropFilter: "blur(10px)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  borderTop: "0px",
  position: "fixed !important",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1100,
  width: "100%",
  height: "$headerHeight",
  display: "flex",
  justifyContent: "center",
});

const StyledToolbar = styled(Toolbar, {
  width: "100%",
  padding: "$4 !important",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100%",
});

const StyledNav = styled("nav", {
  width: "100%",
});

const NavLinks = styled("div", {
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
  "&.MuiLink-root": {
    color: "$textLight !important",
    textDecoration: "none !important",
    fontWeight: "$bold",
    transition: "color 0.2s ease-in-out",
    padding: "$2",

    "&:hover": {
      color: "$text !important",
      textDecoration: "none !important",
    },
  },
});

const Header: React.FC = () => (
  <StyledAppBar position="sticky" role="banner">
    <StyledNav aria-label="Main navigation">
      <StyledToolbar>
        <LogoLink href="/" aria-label="Home">
          <Typography variant="h6" component="span">
            Some Company
          </Typography>
        </LogoLink>
        <NavLinks>
          <ContactButton />
        </NavLinks>
      </StyledToolbar>
    </StyledNav>
  </StyledAppBar>
);

export default Header;
