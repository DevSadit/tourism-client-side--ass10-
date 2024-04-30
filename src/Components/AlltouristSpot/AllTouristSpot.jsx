import { useContext, useState } from "react";
import TouristSpotCard from "./TouristSpotCard";
import { AuthContext } from "../../../Provider/AuthProvider";

const AllTouristSpot = () => {
  const [touristSpots, setTouristSpots] = useState([]);
  console.log(touristSpots);
  useState(() => {
    fetch(`https://tourism-server-site.vercel.app/spotDetails`)
      .then((res) => res.json())
      .then((data) => setTouristSpots(data));
  }, []);

const handleSort = () => {
  console.log(touristSpots);

  let sortedSpots = [...touristSpots].sort((spot1, spot2) =>
    parseInt(spot1.averagecost) < parseInt(spot2.averagecost)
      ? 1
      : parseInt(spot1.averagecost) > parseInt(spot2.averagecost)
      ? -1
      : 0
  );

  console.log(sortedSpots);
  setTouristSpots(sortedSpots);
};





  console.log(touristSpots);
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <span className="loading loading-infinity text-center text-[#008DDA] w-80"></span>
    );
  }

  return (
    <div>
      <h1 className="text-center mt-4">All Tourist {`Spot's`} </h1>

      {/* sorting btn */}
      <div className="flex justify-center items-center mt-5">
        <details className="dropdown">
          <summary className="m-1 btn border font-semibold text-lg text-[#FFFFFF]">
            Sort By
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-[200px]">
            <li>
              <a onClick={handleSort}>Average Cost</a>
            </li>
          </ul>
        </details>
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
