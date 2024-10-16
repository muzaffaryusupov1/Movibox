import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import MoviesCard from "../movies/moviesCard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ArrorRight from "@/public/icons/ArrorRight";
import Link from "next/link";
import NewMoviesCard from "./newMoviesCard";

const NewMovies = () => {
  return (
    <Box mt={'130px'}>
      <Box>
        {/* for link */}
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
            New Arrival
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

        {/* for cards */}
        <Box display={"flex"} justifyContent={"space-between"}>
          <NewMoviesCard />
        </Box>
      </Box>
    </Box>
  );
};

export default NewMovies;