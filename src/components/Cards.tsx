"use client";

import React from "react";
import {
  Typography,
  Container,
  Card,
  CardContent,
  Box,
  Grid,
} from "@mui/material";
import { styled } from "@/stitches.config";
import ContactButton from "./ContactButton";

const CardsSection = styled("section", {
  padding: "$6 0",
  backgroundColor: "$surface",
});

const CardSectionTitle = styled(Typography, {
  marginBottom: "$4",
  color: "$textLight",
  fontWeight: "$bold",
  position: "relative",
  zIndex: 1,
});

const CardGrid = styled(Grid, {
  marginTop: "$3",
});

const StyledCard = styled(Card, {
  minHeight: "$cardMinHeight",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  cursor: "pointer",
  boxShadow: "$sm",
  backgroundColor: "$surface",
  border: "1px solid",
  borderColor: "$surfaceAlt",
  backdropFilter: "blur(8px)",
  transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",

  "&:hover": {
    transform: "translateY(-8px) scale(1.02)",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
    borderColor: "$primary",
  },

  "& .MuiCardContent-root": {
    padding: "$4",
  },

  "& .MuiTypography-h5": {
    background: "linear-gradient(135deg, $colors$primary, $colors$secondary)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "$bold",
  },

  "& .MuiTypography-body2": {
    color: "$textLight",
    lineHeight: 1.6,
  },
});

interface CardItemProps {
  title: string;
  description: string;
}

const CardItem: React.FC<CardItemProps> = ({ title, description }) => (
  <StyledCard>
    <CardContent>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
  </StyledCard>
);

const Cards: React.FC = () => {
  const cardContents = [
    {
      title: "Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum",
    },
    {
      title: "Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum",
    },
    {
      title: "Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum",
    },
    {
      title: "Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum",
    },
    {
      title: "Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum",
    },
    {
      title: "Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum",
    },
  ];

  return (
    <CardsSection>
      <Container>
        <CardSectionTitle variant="h2" align="center" gutterBottom>
          Also very important title
        </CardSectionTitle>
        <CardGrid container spacing={3}>
          {cardContents.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <CardItem title={card.title} description={card.description} />
            </Grid>
          ))}
        </CardGrid>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <ContactButton />
        </Box>
      </Container>
    </CardsSection>
  );
};

export default Cards;
