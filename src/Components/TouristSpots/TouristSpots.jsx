import { useContext, useState } from "react";
import SpotCard from "./SpotCard";
import PropTypes from "prop-types";
import { AuthContext } from "../../../Provider/AuthProvider";
const TouristSpots = ({ spots }) => {
  const [tourSpots, setTourspots] = useState(spots);
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <span className="loading loading-infinity text-center text-[#008DDA] w-80"></span>
    );
  }
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-12">
        Tourist {`Spot's`}
      </h1>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-2">
        {tourSpots.map((spot) => (
          <SpotCard
            key={spot._id}
            spot={spot}
            tourSpots={tourSpots}
            setTourspots={setTourspots}
          ></SpotCard>
        ))}
      </div>
    </div>
  );
};

export default TouristSpots;
// prop validation
TouristSpots.propTypes = {
  spots: PropTypes.object,
};
