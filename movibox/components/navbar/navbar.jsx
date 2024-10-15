import {
  Box,
  Button,
  Heading,
  InputGroup,
  InputRightElement,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import Image from "next/image";
import { Input } from "@chakra-ui/react";
import { IoIosSearch } from "react-icons/io";
import { extendTheme } from "@chakra-ui/react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const breakpoints = {
    base: "0px",
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  };

  const theme = extendTheme({ breakpoints });

  return (
    <Box w={"100%"} h={"80px"} position={"absolute"} zIndex={1000}>
      <Box
        className="wrapper"
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        minH={"100%"}
      >
        {/* for logo */}
        <Box>
          <Link href={"/"}>
            <Heading
              width={{ base: "120px", md: "140px", lg: "187px" }}
              height={{ base: "30px", md: "40px", lg: "50px" }}
            >
              <img src={"/header/logo.png"} alt="site logo" />
            </Heading>
          </Link>
        </Box>

        {/* for links */}

        <Box display={{ base: "none", md: "block" }}>
          <InputGroup size="md">
            <Input
              placeholder="What do you want to watch?"
              _placeholder={{ color: "white" }}
              color={"white"}
              size="lg"
              width={{ base: "250px", md: "300px", lg: "500px" }}
              borderRadius={6}
              borderColor={"white"}
            />
            <InputRightElement>
              <button
                style={{
                  paddingTop: "10px",
                  marginRight: "10px",
                  fontSize: "20px",
                }}
                type="submit"
              >
                <IoIosSearch color="white" />
              </button>
            </InputRightElement>
          </InputGroup>
        </Box>

        {/* for btns */}
        <Box display={"flex"} gap={6}>
          <Box>
            <Button
              variant={"unstyled"}
              color={"white"}
              fontSize={{ base: "12px", md: "14px", lg: "16px" }}
            >
              Sign in
            </Button>
          </Box>

          <Box fontSize={"35px"} cursor={"pointer"} color={"black"}>
            <Button
              ref={btnRef}
              onClick={onOpen}
              color={"white"}
              w={'36px'}
              h={'36px'}
              display={'flex'}
              alignItems={'center'}
              variant={"unstyled"}
            >
              <img src={"/header/menu-icon.png"} />
            </Button>

            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent color={"black"} paddingTop={5} paddingX={5}>
                <DrawerCloseButton />
                <DrawerBody display={"flex"} flexDirection={"column"} gap={5}>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    gap={5}
                    fontSize={"20px"}
                  >
                    <Link href={"#"}>Home</Link>
                    <Link href={"#"}>Movies</Link>
                    <Link href={"#"}>Serials</Link>
                    <Link href={"#"}>Cartoons</Link>
                  </Box>

                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    gap={5}
                  >
                    <Button>Login</Button>
                    <Button>Sign in</Button>
                  </Box>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
