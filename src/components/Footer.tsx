"use client";
import React from "react";
import { Typography, Container } from "@mui/material";
import { styled } from "../stitches.config";

const FooterSection = styled("footer", {
  backgroundColor: "$background",
  color: "$text",
  padding: "$4 0",
  position: "relative",
  overflow: "hidden",

  "&::before": {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "1px",
    background:
      "linear-gradient(90deg, transparent, $colors$primaryLight, transparent)",
    opacity: 0.2,
  },
});

const FooterContent = styled(Container, {
  textAlign: "center",

  "& .MuiTypography-root": {
    opacity: 0.9,
    fontSize: "$sm",
  },
});

interface FooterProps {
  companyName?: string;
  year?: number;
}

const Footer: React.FC<FooterProps> = ({
  companyName = "Some Company",
  year = new Date().getFullYear(),
}) => (
  <FooterSection>
    <FooterContent>
      <Typography variant="body2">
        {companyName} {year}
      </Typography>
    </FooterContent>
  </FooterSection>
);

export default Footer;
