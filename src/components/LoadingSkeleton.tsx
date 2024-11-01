import { styled } from "@/stitches.config";

const SkeletonWrapper = styled("div", {
  width: "100%",
  height: "100vh",
  backgroundColor: "$background",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 1000,
});

export const LoadingSkeleton = () => (
  <SkeletonWrapper />
);