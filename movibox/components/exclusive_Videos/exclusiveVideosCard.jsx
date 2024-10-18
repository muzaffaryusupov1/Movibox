import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { exclusiveVideos } from "@/utils/exclusiveVideos";

const ExclusiveVideosCard = () => {
  return (
    <Box
      my={"44px"}
      display={"flex"}
      justifyContent={"space-between"}
      width={"100%"}
      height={{ base: "205px", md: "250px", lg: "300px" }}
    >
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={"70px"}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: "1",
            spaceBetween: "20px",
          },
          768: {
            slidesPerView: "auto",
            spaceBetween: "48px",
          },
        }}
      >
        {exclusiveVideos.map((item, i) => (
          <SwiperSlide className="sw" key={i}>
            <Box
              width={{ base: "280px", md: "340px", lg: "450px" }}
              height={{ base: "160px", md: "190px", lg: "253px" }}
            >
              <video
                key={"key"}
                controls
                poster={item.poster}
                width={"450px"}
                height={"auto"}
              >
                <source src={item.video} type="video/mp4" />
                Your Browser does not support the video tag.
              </video>
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

export default ExclusiveVideosCard;
