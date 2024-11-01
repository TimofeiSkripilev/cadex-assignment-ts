"use client";
import React from "react";
import { Container } from "@mui/material";
import { styled } from "@/stitches.config";
import FeedbackForm from "@/components/FeedbackForm";

const ContactSection = styled("section", {
  padding: "$5 0",
  paddingTop: "$4",
  backgroundColor: "$background",
  minHeight: "100vh",
});

const ContentWrapper = styled(Container, {
  paddingTop: "$4",
  paddingBottom: "$4",
});

export default function ContactPage() {
  const [feedback, setFeedback] = React.useState<string | null>(null);

  const handleSubmit = async (formData: {
    name: string;
    email: string;
    message: string;
  }) => {
    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setFeedback(data.message);
    } catch (error) {
      console.error("Error submitting message:", error);
      setFeedback(
        "There was an error submitting your message. Please try again."
      );
    }
  };

  return (
    <ContactSection>
      <ContentWrapper>
        <FeedbackForm onSubmit={handleSubmit} feedback={feedback} />
      </ContentWrapper>
    </ContactSection>
  );
}
