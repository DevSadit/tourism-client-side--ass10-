import { Link } from "react-router-dom";

const TouristSpotCard = ({ touristSpot }) => {
        const {
          _id,
          averagecost,
          username,
          Spotname,
          imgurl,
          countryname,
          location,
          desc,
          seasonality,
          totalVisitorsPerYear,
          traveltime,
          useremail,
        } = touristSpot;

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={imgurl} />
      </figure>
      <div className="px-3 space-y-4 pb-3">
        <h2 className="text-3xl text-center">{Spotname}</h2>
        <div className="flex justify-between md:flex-row flex-col">
          <div className="flex  md:gap-x-3">
            <h5>Average Cost: {" "}</h5>
            <p> {averagecost} BDT Per Person</p>
          </div>
          <div className="flex gap-x-3">
            <h5>Total Visitor: </h5>
            <p>{totalVisitorsPerYear}</p>
          </div>
        </div>
        <div className="flex justify-between md:flex-row flex-col">
          <div className="flex gap-x-3">
            <h5>Travell time:</h5>
            <p> {traveltime}</p>
          </div>
          <div className="flex gap-x-3">
            <h5>Seasonality: </h5>
            <p>{seasonality}</p>
          </div>
        </div>
        <div className="card-actions justify-center">
          <Link to={`/viewDetails/${_id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TouristSpotCard;
