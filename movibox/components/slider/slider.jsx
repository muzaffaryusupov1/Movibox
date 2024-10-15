import React from "react";
import { Box, Button, ButtonGroup, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <Box position={"relative"}>
      <Swiper
        autoplay={{
          delay: 2000,
        }}
        modules={{ Autoplay }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box className="banner-main">
            <Box
              position={"absolute"}
              top={{ base: '130px', sm: "160px", md: "180px", lg: "200px" }}
              left={{ base: 8, lg: 20 }}
              width={"404px"}
              display={"flex"}
              flexDirection={"column"}
              gap={{ base: "10px", lg: "16px" }}
              zIndex={2}
            >
              <Box>
                <Text
                  fontSize={{ base: "24px", md: "30px", lg: "46px" }}
                  color={"white"}
                  fontWeight={"bold"}
                  textAlign={"left"}
                  lineHeight={"119%"}
                >
                  John Wick 3 : Parabellum
                </Text>
              </Box>

              <Box
                color={"white"}
                display={"flex"}
                alignItems={"center"}
                gap={"34px"}
              >
                <Box display={"flex"} alignItems={"center"} gap={4}>
                  <Box width={35} height={17}>
                    <img src="/header/imdb-icon.png" alt="imdb icon" />
                  </Box>
                  <Text fontSize={"14px"} fontWeight={400}>
                    86.0 / 100
                  </Text>
                </Box>
                <Box
                  width={"16px"}
                  height={"17px"}
                  display={"flex"}
                  alignItems={"center"}
                  gap={3}
                >
                  <img
                    src="/header/strawberry-icon.png"
                    alt="strawberry icon"
                  />
                  <Text fontSize={"14px"} fontWeight={400}>
                    97%
                  </Text>
                </Box>
              </Box>

              <Box>
                <Text
                  textAlign={"left"}
                  fontSize={{ base: "12px", md: "16px", lg: "19px" }}
                  color={"white"}
                  fontWeight={500}
                  lineHeight={"129%"}
                  width={{ base: "270px", md: "280px", lg: "400px" }}
                >
                  John Wick is on the run after killing a member of the
                  international assassins' guild, and with a $14 million price
                  tag on his head, he is the target of hit men and women
                  everywhere.
                </Text>
              </Box>

              <Box display={"flex"}>
                <Button
                  _hover={{ bg: "blue.500" }}
                  bg={"#be123c"}
                  display={"flex"}
                  alignItems={"center"}
                  gap={1.5}
                  size={{ base: "sm", lg: "md", xl: "lg" }}
                >
                  <img
                    style={{ width: "20px", height: "20px" }}
                    src="/header/play-icon.png"
                    alt="play button icon"
                  />
                  <Text
                    className="ico"
                    fontSize={"14px"}
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                    color={"white"}
                    lineHeight={"171%"}
                  >
                    Watch trailer
                  </Text>
                </Button>
              </Box>
            </Box>
            <div className="bg"></div>
            <img
              className="banner-img"
              src="header/poster-img.png"
              alt="banner img"
            />
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box className="banner-main">
            <Box
              position={"absolute"}
              top={{ base: '130px', sm: "160px", md: "180px", lg: "200px" }}
              left={{ base: 10, lg: 20 }}
              width={"404px"}
              display={"flex"}
              flexDirection={"column"}
              gap={{ base: "10px", lg: "16px" }}
              zIndex={2}
            >
              <Box>
                <Text
                  fontSize={{ base: "24px", md: "30px", lg: "46px" }}
                  color={"white"}
                  fontWeight={"bold"}
                  textAlign={"left"}
                  lineHeight={"119%"}
                >
                  Deadpool & Wolverine
                </Text>
              </Box>

              <Box
                color={"white"}
                display={"flex"}
                alignItems={"center"}
                gap={"34px"}
              >
                <Box display={"flex"} alignItems={"center"} gap={4}>
                  <Box width={35} height={17}>
                    <img src="/header/imdb-icon.png" alt="imdb icon" />
                  </Box>
                  <Text fontSize={"14px"} fontWeight={400}>
                    56.0 / 100
                  </Text>
                </Box>
                <Box
                  width={"16px"}
                  height={"17px"}
                  display={"flex"}
                  alignItems={"center"}
                  gap={3}
                >
                  <img
                    src="/header/strawberry-icon.png"
                    alt="strawberry icon"
                  />
                  <Text fontSize={"14px"} fontWeight={400}>
                    97%
                  </Text>
                </Box>
              </Box>

              <Box>
                <Text
                  textAlign={"left"}
                  fontSize={{ base: "14px", md: "16px", lg: "19px" }}
                  color={"white"}
                  fontWeight={500}
                  lineHeight={"129%"}
                  width={{ base: "270px", md: "280px", lg: "400px" }}
                >
                  Deadpool is offered a place in the Marvel Cinematic Universe
                  by the Time Variance Authority, but instead recruits a variant
                  of Wolverine to save his universe from extinction.
                </Text>
              </Box>

              <Box display={"flex"}>
                <Button
                  _hover={{ bg: "blue.500" }}
                  bg={"#be123c"}
                  display={"flex"}
                  alignItems={"center"}
                  gap={1.5}
                  size={{ base: "sm", lg: "md", xl: "lg" }}
                >
                  <img
                    style={{ width: "20px", height: "20px" }}
                    src="/header/play-icon.png"
                    alt="play button icon"
                  />
                  <Text
                    className="ico"
                    fontSize={"14px"}
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                    color={"white"}
                    lineHeight={"171%"}
                  >
                    Watch trailer
                  </Text>
                </Button>
              </Box>
            </Box>
            <div className="bg"></div>
            <img
              className="banner-img"
              src="header/poster-img2.jpg"
              alt="banner img"
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="banner-main">
            <Box
              position={"absolute"}
              top={{ base: '130px', sm: "160px", md: "180px", lg: "200px" }}
              left={{ base: 10, lg: 20 }}
              width={"404px"}
              display={"flex"}
              flexDirection={"column"}
              gap={{ base: "10px", lg: "16px" }}
              zIndex={2}
            >
              <Box>
                <Text
                  fontSize={{ base: "24px", md: "30px", lg: "46px" }}
                  color={"white"}
                  fontWeight={"bold"}
                  textAlign={"left"}
                  lineHeight={"119%"}
                >
                  Inside Out 2
                </Text>
              </Box>

              <Box
                color={"white"}
                display={"flex"}
                alignItems={"center"}
                gap={"34px"}
              >
                <Box display={"flex"} alignItems={"center"} gap={4}>
                  <Box width={35} height={17}>
                    <img src="/header/imdb-icon.png" alt="imdb icon" />
                  </Box>
                  <Text fontSize={"14px"} fontWeight={400}>
                    73.0 / 100
                  </Text>
                </Box>
                <Box
                  width={"16px"}
                  height={"17px"}
                  display={"flex"}
                  alignItems={"center"}
                  gap={3}
                >
                  <img
                    src="/header/strawberry-icon.png"
                    alt="strawberry icon"
                  />
                  <Text fontSize={"14px"} fontWeight={400}>
                    97%
                  </Text>
                </Box>
              </Box>

              <Box>
                <Text
                  textAlign={"left"}
                  fontSize={{ base: "14px", md: "16px", lg: "19px" }}
                  color={"white"}
                  fontWeight={500}
                  lineHeight={"129%"}
                  width={{ base: "270px", md: "280px", lg: "400px" }}
                >
                  A sequel that features Riley entering puberty and experiencing
                  brand new, more complex emotions as a result. As Riley tries
                  to adapt to her teenage years, her old emotions try to adapt
                  to the possibility of being replaced.
                </Text>
              </Box>

              <Box display={"flex"}>
                <Button
                  _hover={{ bg: "blue.500" }}
                  bg={"#be123c"}
                  display={"flex"}
                  alignItems={"center"}
                  gap={1.5}
                  size={{ base: "sm", lg: "md", xl: "lg" }}
                >
                  <img
                    style={{ width: "20px", height: "20px" }}
                    src="/header/play-icon.png"
                    alt="play button icon"
                  />
                  <Text
                    className="ico"
                    fontSize={"14px"}
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                    color={"white"}
                    lineHeight={"171%"}
                  >
                    Watch trailer
                  </Text>
                </Button>
              </Box>
            </Box>
            <div className="bg"></div>
            <img
              className="banner-img"
              src="header/poster-img3.jpg"
              alt="banner img"
            />
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Slider;
