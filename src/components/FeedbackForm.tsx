"use client";

import React from "react";
import {
  TextField,
  Button,
  Paper,
  Typography,
  Alert,
  FormControl,
} from "@mui/material";
import { styled } from "@/stitches.config";

const FormWrapper = styled(Paper, {
  padding: "$5",
  minHeight: "$formMinHeight",
  width: "100%",
  maxWidth: "$formWidth",
  margin: "0 auto",
  marginTop: "$4",
  backgroundColor: "$surface",
  backdropFilter: "blur(16px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  boxShadow: "$lg",
  position: "relative",
  overflow: "hidden",

  "&::before": {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "4px",
    background: "linear-gradient(90deg, $colors$primary, $colors$secondary)",
  },
});

const FormContainer = styled("form", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
});

const FieldWrapper = styled(FormControl, {
  marginBottom: "$3",

  "& .MuiInputLabel-root": {
    color: "$textLight",
  },

  "& .MuiOutlinedInput-root": {
    transition: "$default",

    "&:hover": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "$primary",
      },
    },

    "&.Mui-focused": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "$primary",
        borderWidth: "2px",
      },
    },
  },
});

const SubmitButton = styled(Button, {
  marginTop: "$3",
  height: "48px",
  fontSize: "$lg",
  fontWeight: "$medium",
  background: "linear-gradient(45deg, $colors$primary, $colors$primaryDark)",
  boxShadow: "$md",
  transition: "$bounce",

  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "$lg",
  },
});

const FormTitle = styled(Typography, {
  marginBottom: "$5",
  marginTop: "$2",
  color: "$text",
  fontWeight: "$bold",
  textAlign: "center",
  position: "relative",

  "&::after": {
    content: "",
    position: "absolute",
    bottom: "-8px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "60px",
    height: "3px",
    background: "linear-gradient(90deg, $colors$primary, $colors$secondary)",
    borderRadius: "$round",
  },
});

const FeedbackAlert = styled(Alert, {
  marginTop: "$3",
  borderRadius: "4px",
});

const SuccessMessage = styled(Typography, {
  fontSize: "2rem",
  textAlign: "center",
  padding: "$5",
  color: "$text",
  fontWeight: "$medium",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "300px",
  animation: "fadeIn 0.3s ease-in",

  "@keyframes fadeIn": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
});

interface FeedbackFormProps {
  onSubmit: (data: {
    name: string;
    email: string;
    message: string;
  }) => Promise<void>;
  feedback: string | null;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ onSubmit, feedback }) => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitted(true);
  };

  if (isSubmitted && feedback) {
    return (
      <FormWrapper elevation={3}>
        <SuccessMessage variant="h4">{feedback}</SuccessMessage>
      </FormWrapper>
    );
  }

  return (
    <FormWrapper elevation={3} role="form"
    aria-labelledby="feedback-form-title">
      <FormTitle variant="h4" align="center">
        Only CTA on the page
      </FormTitle>
      <FormContainer onSubmit={handleSubmit}>
        <FieldWrapper>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
            required
            aria-required="true"
            aria-label="Your name"
            slotProps={{
              htmlInput: {
                "aria-describedby": "name-helper-text",
              },
              input: {
                sx: { borderRadius: "6px" },
              },
            }}
          />
          <Typography
            id="name-helper-text"
            variant="caption"
            sx={{ display: "none" }}
          >
            Please enter your name
          </Typography>
        </FieldWrapper>

        <FieldWrapper>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            required
            aria-required="true"
            aria-label="Your email"
            slotProps={{
              htmlInput: {
                "aria-describedby": "email-helper-text",
              },
              input: {
                sx: { borderRadius: "6px" },
              },
            }}
          />
          <Typography
            id="name-helper-text"
            variant="caption"
            sx={{ display: "none" }}
          >
            Please enter your email
          </Typography>
        </FieldWrapper>

        <FieldWrapper>
          <TextField
            fullWidth
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={4}
            variant="outlined"
            required
            aria-required="true"
            aria-label="Your message"
            slotProps={{
              htmlInput: {
                "aria-describedby": "message-helper-text",
              },
              input: {
                sx: { borderRadius: "6px" },
              },
            }}
          />
          <Typography
            id="message-helper-text"
            variant="caption"
            sx={{ display: "none" }}
          >
            Please enter your message
          </Typography>
        </FieldWrapper>

        <SubmitButton
          type="submit"
          variant="contained"
          color="primary"
          size="large"
        >
          Submit
        </SubmitButton>

        {feedback && (
          <FeedbackAlert severity="success">{feedback}</FeedbackAlert>
        )}
      </FormContainer>
    </FormWrapper>
  );
};

export default FeedbackForm;
