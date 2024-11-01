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

const CardGrid = styled(Grid, {
  marginTop: "$3",
});

const StyledCard = styled(Card, {
  minHeight: "$cardMinHeight",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "$default",
  cursor: "pointer",
  backgroundColor: "$surface",
  boxShadow: "$sm",

  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "$md",
  },

  "& .MuiCardContent-root": {
    padding: "$4",
  },

  "& .MuiTypography-h5": {
    color: "$text",
    fontWeight: "$semibold",
    marginBottom: "$2",
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
        <Typography variant="h2" align="center" gutterBottom>
          Also very important title
        </Typography>
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
