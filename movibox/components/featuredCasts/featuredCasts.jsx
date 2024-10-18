import ArrorRight from "@/public/icons/ArrorRight";
import { Box, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import FeaturedCastsCard from "./featuredCastsCard";

const FeaturedCasts = () => {
  return (
    <Box marginTop={"70px"}>
      <Box
        fontSize={"30px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Heading
          fontSize={{ base: "18px", md: "24px", lg: "36px" }}
          fontWeight={"bold"}
          color={"black"}
        >
          Featured Casts
        </Heading>
        <Link href={"#"}>
          <Box display={"flex"} alignItems={"center"} gap={1.6}>
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "18px" }}
              fontWeight={"500"}
              lineHeight={"133%"}
              color={"#be123c"}
            >
              See more
            </Text>
            <ArrorRight />
          </Box>
        </Link>
      </Box>

      <Box>
        <FeaturedCastsCard/>
      </Box>
    </Box>
  );
};

export default FeaturedCasts;
