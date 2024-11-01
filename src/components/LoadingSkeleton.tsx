import { styled } from "@/stitches.config";
import { Skeleton } from "@mui/material";

const SkeletonWrapper = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "$4",
});

export const LoadingSkeleton = () => (
  <SkeletonWrapper>
    <Skeleton height={64} /> {/* Header */}
    <Skeleton
      variant="rectangular"
      height="calc(100vh - 128px)"
      animation="wave"
    />
    <Skeleton height={64} /> {/* Footer */}
  </SkeletonWrapper>
);
