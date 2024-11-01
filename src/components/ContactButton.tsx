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
    fontWeight: "$semibold",
    background: "linear-gradient(135deg, $colors$secondaryDark, $colors$primaryDark) !important", // Add !important
    border: "2px solid $textLight !important", // Add !important
    color: "$textLight !important", // Ensure text color is also enforced
    "&:hover": {
      transform: "translateY(-2px) scale(1.05)",
      boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.3)",
      background: "linear-gradient(135deg, $colors$secondaryLight, $colors$primaryLight) !important",
      border: "2px solid $textLight !important", // Maintain border on hover
    },
    "&:active": {
      transform: "translateY(1px)",
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
      <BaseButton size={size}>
        Contact Us
      </BaseButton>
    </Link>
  );

export default ContactButton;
