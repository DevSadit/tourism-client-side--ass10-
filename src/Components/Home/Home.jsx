import { useLoaderData } from "react-router-dom";
import Slider from "../../Banner/Slider";
import TouristSpots from "../TouristSpots/TouristSpots";
import Countries from "../Countries/Countries";
import CustomerFeedback from "../CustomerFeedback/CustomerFeedback";
import AboutUs from "../AboutUs/AboutUs";

const Home = () => {
  const spots = useLoaderData();
  
  return (
    <div>
      <Slider></Slider>
      <TouristSpots spots={spots} ></TouristSpots>
      <Countries></Countries>
      <AboutUs></AboutUs>
      <CustomerFeedback></CustomerFeedback>
    </div>
  );
};

export default Home;
