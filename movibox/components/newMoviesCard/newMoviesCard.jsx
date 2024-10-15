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

const MoviesCard = () => {
  return (
    <Box mt={10} w={"100%"} display={"flex"} justifyContent={"space-between"}>
      <Swiper
        slidesPerView={4}
        spaceBetween={100}
        className="mySwiper"
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
            width: 300,
          },
          360: {
            slidesPerView: 1,
            spaceBetween: 10,
            width: 260,
          },
          570: {
            slidesPerView: 1,
            spaceBetween: 10,
            width: 250,
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
        <SwiperSlide>
          <Card maxW="250px" className="card" variant={'unstyled'} >
            <CardBody p={0}>
              <Box position={"relative"}>
                <Image
                  src="/movibox_Card/card-img5.png"
                  alt="Green double couch with wooden legs"
                />
                <Box position={"absolute"} top={"15px"} right={"16px"}>
                  <Button
                    size={"sm"}
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
                  USA, 2021
                </Heading>
                <Text
                  fontSize={{ base: "13px", md: "16px", lg: "18px" }}
                  fontWeight={700}
                  color={"#111827"}
                >
                  Dune
                </Text>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Box display={"flex"} alignItems={"center"} gap={2}>
                    <img src="/header/imdb-icon.png" alt="imdb icon" />
                    <Text fontSize={{ base: "9px", md: "10px", lg: "12px" }}>
                      84.0 / 100
                    </Text>
                  </Box>
                  <Box display={"flex"} alignItems={"center"} gap={2.5}>
                    <img
                      src="/header/strawberry-icon.png"
                      alt="strawberry icon"
                    />
                    <Text fontSize={{ base: "9px", md: "10px", lg: "12px" }}>
                      75%
                    </Text>
                  </Box>
                </Box>
                <Box>
                  <Text
                    fontSize={{ base: "9px", md: "10px", lg: "12px" }}
                    fontWeight={"bold"}
                    color={"#9ca3af"}
                  >
                    Action, Adventure, Drama
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card maxW="250px" className="card" variant={'unstyled'}>
            <CardBody p={0}>
              <Box position={"relative"}>
                <Image
                  src="/movibox_Card/card-img6.png"
                  alt="Green double couch with wooden legs"
                />
                <Box position={"absolute"} top={"15px"} right={"16px"}>
                  <Button
                    size={"sm"}
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
                  USA, 2021
                </Heading>
                <Text
                  fontSize={{ base: "13px", md: "16px", lg: "18px" }}
                  fontWeight={700}
                  color={"#111827"}
                >
                  No Time To Die
                </Text>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Box display={"flex"} alignItems={"center"} gap={2}>
                    <img src="/header/imdb-icon.png" alt="imdb icon" />
                    <Text fontSize={{ base: "9px", md: "10px", lg: "12px" }}>
                      76.0 / 100
                    </Text>
                  </Box>
                  <Box display={"flex"} alignItems={"center"} gap={2.5}>
                    <img
                      src="/header/strawberry-icon.png"
                      alt="strawberry icon"
                    />
                    <Text fontSize={{ base: "9px", md: "10px", lg: "12px" }}>
                      68%
                    </Text>
                  </Box>
                </Box>
                <Box>
                  <Text
                    fontSize={{ base: "9px", md: "10px", lg: "12px" }}
                    fontWeight={"bold"}
                    color={"#9ca3af"}
                  >
                    Action, Adventure, Thriller
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card maxW="250px" className="card" variant={'unstyled'}>
            <CardBody p={0}>
              <Box position={"relative"}>
                <Image
                  src="/movibox_Card/card-img7.png"
                  alt="Green double couch with wooden legs"
                />
                <Box position={"absolute"} top={"15px"} right={"16px"}>
                  <Button
                    size={"sm"}
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
                  USA, 2021
                </Heading>
                <Text
                  fontSize={{ base: "13px", md: "16px", lg: "18px" }}
                  fontWeight={700}
                  color={"#111827"}
                >
                  Shang-Chi and the Legend of the Ten Rings
                </Text>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Box display={"flex"} alignItems={"center"} gap={2}>
                    <img src="/header/imdb-icon.png" alt="imdb icon" />
                    <Text fontSize={{ base: "9px", md: "10px", lg: "12px" }}>
                      79.0 / 100
                    </Text>
                  </Box>
                  <Box display={"flex"} alignItems={"center"} gap={2.5}>
                    <img
                      src="/header/strawberry-icon.png"
                      alt="strawberry icon"
                    />
                    <Text fontSize={{ base: "9px", md: "10px", lg: "12px" }}>
                      71%
                    </Text>
                  </Box>
                </Box>
                <Box>
                  <Text
                    fontSize={{ base: "9px", md: "10px", lg: "12px" }}
                    fontWeight={"bold"}
                    color={"#9ca3af"}
                  >
                    Action, Adventure, Fantasy
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card maxW="250px" className="card" variant={'unstyled'}>
            <CardBody p={0}>
              <Box position={"relative"}>
                <Image
                  src="/movibox_Card/card-img8.png"
                  alt="Green double couch with wooden legs"
                />
                <Box position={"absolute"} top={"15px"} right={"16px"}>
                  <Button
                    size={"sm"}
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
                  USA, 2021
                </Heading>
                <Text
                  fontSize={{ base: "13px", md: "16px", lg: "18px" }}
                  fontWeight={700}
                  color={"#111827"}
                >
                  Don't Breathe 2
                </Text>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Box display={"flex"} alignItems={"center"} gap={2}>
                    <img src="/header/imdb-icon.png" alt="imdb icon" />
                    <Text fontSize={{ base: "9px", md: "10px", lg: "12px" }}>
                      61.0 / 100
                    </Text>
                  </Box>
                  <Box display={"flex"} alignItems={"center"} gap={2.5}>
                    <img
                      src="/header/strawberry-icon.png"
                      alt="strawberry icon"
                    />
                    <Text fontSize={{ base: "9px", md: "10px", lg: "12px" }}>
                      46%
                    </Text>
                  </Box>
                </Box>
                <Box>
                  <Text
                    fontSize={{ base: "9px", md: "10px", lg: "12px" }}
                    fontWeight={"bold"}
                    color={"#9ca3af"}
                  >
                    Action, Drama, Horror
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card maxW="250px" className="card" variant={'unstyled'}>
            <CardBody p={0}>
              <Box position={"relative"}>
                <Image
                  src="/movibox_Card/card-img4.png"
                  alt="Green double couch with wooden legs"
                />
                <Box position={"absolute"} top={"15px"} right={"16px"}>
                  <Button
                    size={"sm"}
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
                  USA, 2017
                </Heading>
                <Text
                  fontSize={{ base: "13px", md: "16px", lg: "18px" }}
                  fontWeight={700}
                  color={"#111827"}
                >
                  Dunkirk
                </Text>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Box display={"flex"} alignItems={"center"} gap={2}>
                    <img src="/header/imdb-icon.png" alt="imdb icon" />
                    <Text fontSize={{ base: "9px", md: "10px", lg: "12px" }}>
                      78.0 / 100
                    </Text>
                  </Box>
                  <Box display={"flex"} alignItems={"center"} gap={2.5}>
                    <img
                      src="/header/strawberry-icon.png"
                      alt="strawberry icon"
                    />
                    <Text fontSize={{ base: "9px", md: "10px", lg: "12px" }}>
                      94%
                    </Text>
                  </Box>
                </Box>
                <Box>
                  <Text
                    fontSize={{ base: "9px", md: "10px", lg: "12px" }}
                    fontWeight={"bold"}
                    color={"#9ca3af"}
                  >
                    Action, Drama, History
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default MoviesCard;
