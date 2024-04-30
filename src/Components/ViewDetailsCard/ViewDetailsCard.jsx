import { useLoaderData } from "react-router-dom";

const ViewDetailsCard = () => {

    const viewDetail = useLoaderData();
    console.log(viewDetail);
    const {
          _id,
          averagecost,

          Spotname,
          imgurl,
          countryname,
          location,
          desc,
          seasonality,
          totalVisitorsPerYear,
          traveltime,

        } = viewDetail;

  return (
    <div className="card lg:card-side bg-base-200 shadow-xl p-4 my-5">
      <figure>
        <img className="w-2/3 rounded-lg" src={imgurl} />
      </figure>
      <div className="">
        <h2 className="card-title">{Spotname}</h2>
        <p>{desc}</p>
        <div>
          <div className="flex gap-x-3">
            <h5>Country:</h5>
            <p> {countryname}</p>
          </div>
          <div className="flex gap-x-3">
            <h5>Location:</h5>
            <p> {location}</p>
          </div>

          <div className="flex gap-x-3">
            <h5>Average Cost:</h5>
            <p> {averagecost} BDT Per Person</p>
          </div>
          <div className="flex gap-x-3">
            <h5>Seasonality:</h5>
            <p> {seasonality}</p>
          </div>
          <div className="flex gap-x-3">
            <h5>Total Visitor:</h5>
            <p> {totalVisitorsPerYear} Per Year</p>
          </div>

          <div className="flex gap-x-3">
            <h5>Travel Time:</h5>
            <p> {traveltime}</p>
          </div>
          <div>
            <button className="btn border text-2xl font-bold text-black btn-outline btn-accent">Visit Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailsCard;
