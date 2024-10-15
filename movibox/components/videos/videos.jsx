import React from "react";
import { AspectRatio, Box } from "@chakra-ui/react";

const Videos = () => {
  return (
    <Box my={"70px"}>
      <Box>
        <AspectRatio maxW="560px" ratio={1}>
          <iframe
            title="naruto"
            src="/exclusive_videos/madara uchiha.mp4"
            allowFullScreen
          />
        </AspectRatio>
      </Box>
    </Box>
  );
};

export default Videos;