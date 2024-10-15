import Movies from "@/components/movies/movies";
import Navbar from "@/components/navbar/navbar";
import NewMovies from "@/components/newMovies/newMovies";
import Slider from "@/components/slider/slider";
import Videos from "@/components/videos/videos";
import { Box } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box>
      {/* For navbar */}
      <Box>
        <Navbar />
      </Box>

      {/* For slider  */}
      <Box>
        <Slider />
      </Box>

      {/* For movies */}
      <Box className="wrapper" minH={'100vh'} p={10}>
        <Movies />
        <NewMovies />
        <Videos />
      </Box>

    </Box>
  );
};

export default Index;
