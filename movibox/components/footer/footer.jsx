import FacebookIcon from "@/public/icons/FacebookIcon";
import InstagramIcon from "@/public/icons/InstagramIcon";
import TwitterIcon from "@/public/icons/TwitterIcon";
import YoutubeIcon from "@/public/icons/YoutubeIcon";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} marginTop={{ base: "70px", md: "90px", lg: "120px" }}>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <Box display={"flex"} alignItems={"center"} gap={{ base: "24px", md: "36px", lg: "48px" }}>
          <Box>
            <FacebookIcon />
          </Box>
          <Box>
            <InstagramIcon />
          </Box>
          <Box>
            <TwitterIcon />
          </Box>
          <Box>
            <YoutubeIcon />
          </Box>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={{ base: "24px", md: "36px", lg: "48px" }}
          marginTop={{ base: "19px", md: "24px", lg: "36px" }}
        >
          <Box>
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "18px" }}
              fontWeight={700}
              color={"#111827"}
            >
              Conditions of Use
            </Text>
          </Box>
          <Box>
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "18px" }}
              fontWeight={700}
              color={"#111827"}
            >
              Privacy & Policy
            </Text>
          </Box>
          <Box>
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "18px" }}
              fontWeight={700}
              color={"#111827"}
            >
              Press Room
            </Text>
          </Box>
        </Box>
        <Box marginTop={{ base: "19px", md: "24px", lg: "36px" }}>
          <Text
            fontSize={{ base: "14px", md: "16px", lg: "18px" }}
            fontWeight={700}
            color={"#6b7280"}
          >
            © 2021 MovieBox by Adriana Eka Prayudha
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
