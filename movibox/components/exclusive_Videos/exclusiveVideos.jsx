import React from "react";
import { Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";

const ExclusiveVideos = () => {
  return (
    <Box
      my={"70px"}
      display={"flex"}
      justifyContent={"space-between"}
      width={"100%"}
      height={{ base: "205px", md: "250px", lg: "300px" }}
    >
      <Swiper
        slidesPerView={3}
        spaceBetween={48}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
            width: 300,
          },
          360: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          570: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {/* <Box width={"450px"} height={"253px"}>
          <SwiperSlide className="swp">
            <video key={'key'} controls>
              <source
                src="/exclusive_videos/obito uchiha.mp4"
                type="video/mp4"
              />
              Your Browser does not support the video tag.
            </video>
          </SwiperSlide>
        </Box>

        <Box width={"450px"} height={"253px"}>
          <SwiperSlide className="swp">
            <video controls>
              <source
                src="/exclusive_videos/boruto and kawaki.mp4"
                type="video/mp4"
              />
              Your Browser does not support the video tag.
            </video>
          </SwiperSlide>
        </Box> */}
{/* 
        <Box width={"450px"} height={"253px"}>
          <SwiperSlide className="swp">
            <video controls>
              <source
                src="/exclusive_videos/sasuke uchiha.mp4"
                type="video/mp4"
              />
              Your Browser does not support the video tag.
            </video>
          </SwiperSlide>
        </Box>

        <Box width={"450px"} height={"253px"}>
          <SwiperSlide className="swp">
            <video controls>
              <source src="/exclusive_videos/toji.mp4" type="video/mp4" />
              Your Browser does not support the video tag.
            </video>
          </SwiperSlide>
        </Box>

        <Box width={"450px"} height={"253px"}>
          <SwiperSlide className="swp">
            <video controls>
              <source
                src="/exclusive_videos/obito loniless.mp4"
                type="video/mp4"
              />
              Your Browser does not support the video tag.
            </video>
          </SwiperSlide>
        </Box> */}
      </Swiper>
    </Box>
  );
};

export default ExclusiveVideos;
