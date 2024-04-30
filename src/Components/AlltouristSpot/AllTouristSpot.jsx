import { useContext, useState } from "react";
import TouristSpotCard from "./TouristSpotCard";
import { AuthContext } from "../../../Provider/AuthProvider";

const AllTouristSpot = () => {
  const [touristSpots, setTouristSpots] = useState([]);
  useState(() => {
    fetch(`https://tourism-server-site.vercel.app/spotDetails`)
      .then((res) => res.json())
      .then((data) => setTouristSpots(data));
  }, []);
  // console.log(touristSpots);
   const {  loading } = useContext(AuthContext);
   if(loading){
    return (
      <span className="loading loading-infinity text-center text-[#008DDA] w-80"></span>
    );
   }

  return (
    <div>
      <h1 className="text-center mt-4">All Tourist {`Spot's`} </h1>
      <div className="sort-selection text-center mt-3 ">
        <form className="">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            className="sort-selecttion-style rounded-lg  border font-bold text-black text-center p-3"
            
          >
            <option value="lowest">Price ( lowest )</option>
            <option value="#" disabled></option>
            <option value="highest">Price ( highest )</option>
          </select>
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
        {touristSpots.map((touristSpot) => (
          <TouristSpotCard
            key={touristSpot._id}
            touristSpot={touristSpot}
          ></TouristSpotCard>
        ))}
      </div>
    </div>
  );
};

export default AllTouristSpot;
