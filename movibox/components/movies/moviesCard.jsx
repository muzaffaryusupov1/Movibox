import HeartIcon from "@/public/icons/HeartIcon";
import {
  Box,
  Button,
  Heading,
  Image,
  Stack,
  Text,
  Card,
  CardBody,
  Badge,
} from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { moviesCard } from "@/utils/moviesCard";

const MoviesCard = () => {
  return (
    <Box mt={10} w={"100%"} display={"flex"} justifyContent={"space-between"}>
      <Swiper
        // slidesPerView={4}
        spaceBetween={100}
        className="mySwiper"
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 7,
          },
          570: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {moviesCard.map((item, i) => (
            <SwiperSlide key={i}>
              <Card maxW={'250px'} variant={"unstyled"}>
                <Box position={"relative"}>
                  <Image
                    src={item.image}
                    alt="Green double couch with wooden legs"
                  />
                  <Badge
                    position={"absolute"}
                    top={"19px"}
                    left={"16px"}
                    fontSize={{ base: "9px", md: "10px", lg: "12px" }}
                    fontWeight={700}
                    bg={"rgba(243, 244, 246, 0.5)"}
                    textColor={"#111827"}
                    rounded={"12px"}
                    backdropFilter="auto"
                    backdropBlur="2px"
                    py={"3px"}
                    px={"8px"}
                    cursor={"pointer"}
                  >
                    TV SERIES
                  </Badge>
                  <Box position={"absolute"} top={"15px"} right={"16px"}>
                    <Button
                      size={{ base: 'xs', md: "xs", lg: "sm"}}
                      bg={"rgba(243, 244, 246, 0.5)"}
                      backdropBlur="2px"
                      borderRadius={"full"}
                    >
                      <HeartIcon />
                    </Button>
                  </Box>
                </Box>
                <Stack mt={"12px"} spacing="3" pt={"2px"}>
                  <Heading
                    fontSize={{ base: "9px", md: "10px", lg: "12px" }}
                    fontWeight={700}
                    color={"#9ca3af"}
                  >
                    {item.date}
                  </Heading>
                  <Text
                    fontSize={{ base: "13px", md: "16px", lg: "18px" }}
                    fontWeight={700}
                    color={"#111827"}
                  >
                    {item.title}
                  </Text>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Box display={"flex"} alignItems={"center"} gap={2}>
                      <img src="/header/imdb-icon.png" alt="imdb icon" />
                      <Text fontSize={{ base: "9px", md: "10px", lg: "12px" }}>
                        {item.rating} / 100
                      </Text>
                    </Box>
                    <Box display={"flex"} alignItems={"center"} gap={2.5}>
                      <img
                        src="/header/strawberry-icon.png"
                        alt="strawberry icon"
                      />
                      <Text fontSize={{ base: "9px", md: "10px", lg: "12px" }}>
                        {item.percent}%
                      </Text>
                    </Box>
                  </Box>
                  <Box>
                    <Text
                      fontSize={{ base: "9px", md: "10px", lg: "12px" }}
                      fontWeight={"bold"}
                      color={"#9ca3af"}
                    >
                      {item.category}
                    </Text>
                  </Box>
                </Stack>
              </Card>
            </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default MoviesCard;
