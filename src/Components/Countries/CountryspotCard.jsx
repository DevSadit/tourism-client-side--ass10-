import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import TouristSpotCard from "../AlltouristSpot/TouristSpotCard";
import Card from "./Card";

const CountryspotCard = () => {

    const countryData = useLoaderData();
    const [spots, setSpots] = useState([]);
    console.log(countryData);
    useEffect(()=>{
        fetch(
          `https://tourism-server-site.vercel.app/country/${countryData.name}`
        )
          .then((res) => res.json())
          .then((data) => setSpots(data));
    },[])
    return (
      <div>
        <h1>Tourist spots of {countryData.name}</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2">
          {
            spots.map(spot=> <Card key={spot._id} spot={spot}></Card>)
          }
        </div>
      </div>
    );
};

export default CountryspotCard;