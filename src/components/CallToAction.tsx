"use client";

import React from "react";
import { Typography, Button, Container } from "@mui/material";
import { styled } from "@/stitches.config";
import ContactButton from "./ContactButton";

const CTASection = styled("section", {
  background: `
    linear-gradient(45deg, $colors$primary 0%, $colors$secondary 100%),
    radial-gradient(circle at top right, $colors$primaryLight 0%, transparent 50%)
  `,
  color: "$textInverse",
  padding: "$7 0",
  position: "relative",
  overflow: "hidden",
  textAlign: "center",

  "&::before": {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "radial-gradient(circle at center, $colors$primaryLight 0%, transparent 70%)",
    opacity: 0.1,
  },
});

const CTATitle = styled(Typography, {
  marginBottom: "$4",
  fontWeight: "$bold",
  position: "relative",
  color: "$textLight",
  zIndex: 1,
});

const CallToAction: React.FC = () => (
  <CTASection>
    <Container>
      <CTATitle variant="h4" gutterBottom>
        Less Important Title
      </CTATitle>
      <ContactButton size="large" />
    </Container>
  </CTASection>
);

export default CallToAction;
