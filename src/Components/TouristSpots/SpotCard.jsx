import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const SpotCard = ({ spot }) => {
  // const [tourSpots, setTourspots] = useState(spot);
  // console.log(tourSpots);
  const {
    _id,
    Spotname,
    imgurl,
    location,
    totalVisitorsPerYear,
  } = spot;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={imgurl} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{Spotname}</h2>
        <p>
          <span className="font-bold">Location:</span> {location}
        </p>
        <p>
          <span className="font-bold">Total Visitor: </span>
          {totalVisitorsPerYear} Per Year
        </p>
        <div className="card-actions flex">
          <Link to={`/viewDetails/${_id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
// prop validation
SpotCard.propTypes = {
  spot: PropTypes.object,
  tourSpots: PropTypes.array,
  setTourspots: PropTypes.object,
};
export default SpotCard;
