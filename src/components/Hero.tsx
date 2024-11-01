"use client";

import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@/stitches.config";
import { YouTubeEmbed } from "@next/third-parties/google";

const HeroSection = styled("section", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  minHeight: "$heroMinHeight",
  width: "100%",
  maxWidth: "$maxContentWidth",
  marginX: "auto",
  padding: "$space$4",
  backgroundColor: "$surfaceAlt",
  position: "relative",
  overflow: "hidden",

  "&::before": {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(45deg, $colors$primaryLight 0%, $colors$primary 100%)",
    opacity: 0.05,
  },

  "@lg": {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: "$8",
    gap: "$4",
  },
});

const TextContainer = styled("div", {
  maxWidth: "700px",
  textAlign: "center",
  padding: "$4",
  position: "relative",
  zIndex: 1,

  "& h1": {
    fontSize: "4rem",
    color: "$text",
    marginBottom: "$4",
    fontWeight: "$bold",
  },

  "& .MuiTypography-subtitle1": {
    color: "$textLight",
    fontSize: "$lg",
    lineHeight: 1.6,
  },

  "@lg": {
    textAlign: "left",
    padding: "$4 $6",
  },
});

const VideoContainer = styled("div", {
  aspectRatio: "$video",
  width: "100%",
  maxHeight: "400px",
  maxWidth: "$formWidth",
  padding: "$3",
  flexShrink: 1,

  "@lg": {
    paddingLeft: "$5",
    flexShrink: 0,
    width: "600px",
  },
});

const Hero: React.FC = () => (
  <HeroSection>
    <TextContainer>
      <Typography variant="h1" gutterBottom>
        Most important title on the page
      </Typography>
      <Typography variant="subtitle1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis,
        leo et condimentum ultricies, sem urna convallis metus, vel suscipit
        nibh lacus tincidunt ante
      </Typography>
    </TextContainer>
    <VideoContainer>
      <YouTubeEmbed
        videoid="dQw4w9WgXcQ"
        params="controls=0&rel=0&fs=0"
        width={600}
        height={338}
      />
    </VideoContainer>
  </HeroSection>
);

export default Hero;
