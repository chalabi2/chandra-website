import React from "react";
import { useProgress } from "@react-three/drei";
import { Box, Text } from "@chakra-ui/react";
import ReactDOM from "react-dom";

function Loading() {
  const { active, progress, item } = useProgress();

  if (!active) return null;

  return ReactDOM.createPortal(
    <Box
      position="fixed"
      width="100vw"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      backgroundColor="rgba(0, 0, 0, 0.7)" // Adjust as necessary
    >
      <Text color="white">
        Loading: {progress}% ({item})
      </Text>
    </Box>,
    document.body
  );
}

export default Loading;
