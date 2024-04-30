import { Link } from "react-router-dom";

const Country = ({ country }) => {
  return (
    <div
      className="hero rounded-lg"
      style={{
        backgroundImage: `url(${country.image})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
      <div className=" text-center text-neutral-content">
        <div className="md:py-4">
          <h1 className=" text-4xl md:text-2xl font-bold">{country.name}</h1>
          <p className="md:text-base text-sm px-3 lg:h-64 ">
            {country.description}
          </p>
          <Link to={`/countrycardpage/${country._id}`}>
            <button className="bg-blue-600 p-3 rounded-lg">
              View {`Spot's`}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Country;
