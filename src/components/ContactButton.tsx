"use client";

import React from "react";
import { Button } from "@mui/material";
import Link from "next/link";
import { styled } from "@/stitches.config";

const BaseButton = styled(Button, {
  borderRadius: "$md",
  padding: "$2 $3",
  transition: "$bounce",
  textTransform: "none",
  fontWeight: "$medium",
  backgroundColor: "$secondary",

  "&:hover": {
    backgroundColor: "$secondaryDark",
    transform: "translateY(-2px)",
  },

  variants: {
    size: {
      medium: {
        fontSize: "$md",
      },
      large: {
        fontSize: "$lg",
        padding: "$2 $4",
        boxShadow: "$md",
        "&:hover": {
          boxShadow: "$lg",
        },
      },
    },
  },
});

interface ContactButtonProps {
  size?: "medium" | "large";
}

const ContactButton: React.FC<ContactButtonProps> = ({ size = "medium" }) => (
  <Link href="/contact" style={{ textDecoration: "none" }}>
    <BaseButton variant="contained" color="primary" size={{ size }}>
      Contact Us
    </BaseButton>
  </Link>
);

export default ContactButton;
