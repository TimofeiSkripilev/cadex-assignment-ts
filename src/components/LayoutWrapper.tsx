"use client";

import React from "react";
import { styled, fadeIn } from "@/stitches.config";
import { globalStyles } from "@/stitches.config";
import { LoadingSkeleton } from "./LoadingSkeleton";

export const LayoutWrapper = styled("div", {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "$background",
  position: "relative",
  opacity: 0,
  animation: `${fadeIn} 0.1s ease-in forwards`,
  overflowX: "hidden",

  variants: {
    loading: {
      true: {
        "& > *": {
          opacity: 0,
        },
      },
      false: {
        "& > *": {
          opacity: 1,
          transition: "opacity 0.1s ease-in",
        },
      },
    },
  },
});

export const Main = styled("main", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  position: "relative",
  zIndex: 1,
  minHeight: `calc(100vh - $sizes$headerHeight - $sizes$footerHeight)`,
  marginTop: "$headerHeight !important",
  transition: "opacity 0.2s ease-in",

  "&::before": {
    content: "",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "radial-gradient(circle at top right, $colors$primaryLight 0%, transparent 70%)",
    opacity: 0.03,
    zIndex: -1,
  },
});

interface LayoutWrapperComponentProps {
  children: React.ReactNode;
}

export function LayoutWrapperComponent({
  children,
}: LayoutWrapperComponentProps) {
  const [isLoading, setIsLoading] = React.useState(true);

  //we have a skeleton and a delay, this can illustrate a heavier website with slower loading
  React.useEffect(() => {
    globalStyles();
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? <LoadingSkeleton /> : children}
    </>
  );
}
