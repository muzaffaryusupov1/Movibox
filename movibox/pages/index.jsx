import Movies from "@/components/movies/movies";
import Navbar from "@/components/navbar/navbar";
import NewMovies from "@/components/newMovies/newMovies";
import Slider from "@/components/banner/banner";
import { Box } from "@chakra-ui/react";
import ExclusiveVideos from "@/components/exclusive_Videos/exclusiveVideos";
import FeaturedCasts from "@/components/featuredCasts/featuredCasts";
import Footer from "@/components/footer/footer";

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
      <Box className="wrapper" minH={"100vh"} mt={'70px'}>
        <Movies />
        <NewMovies />
        <ExclusiveVideos />
        <FeaturedCasts/>
      </Box>

      {/* For footer */}
      <Box>
        <Footer/>
      </Box>
    </Box>
  );
};

export default Index;
