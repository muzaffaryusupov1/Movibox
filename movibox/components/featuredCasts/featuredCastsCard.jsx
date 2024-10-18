import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { featuredCasts } from "@/utils/featuredCasts";

const FeaturedCastsCard = () => {
  return (
    <Box marginTop={"44px"}>
      <Swiper
        slidesPerView={4}
        spaceBetween={"100px"}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          340: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: "40px",
          },
          768: {
            slidesPerView: 3,
            spaceBetween: '70px',
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: "80px"
          },
        }}
      >
        {featuredCasts.map((item, key) => (
          <SwiperSlide key={key}>
            <Box className="featured-casts">
              <Image
                width={"100%"}
                height={"100%"}
                src={item.image}
                alt="Green double couch with wooden legs"
              />
            </Box>
            <Box marginTop={{ base: "7px", md: "10px", lg: "12px" }}>
              <Text
                fontSize={{ base: "14px", md: "16px", lg: "18px" }}
                fontWeight={700}
                color={"#111827"}
              >
                {item.title}
              </Text>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default FeaturedCastsCard;
