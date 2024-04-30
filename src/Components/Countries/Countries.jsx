import { useState } from "react";
import Country from "./Country";

const Countries = () => {
  const [countries, setCountries] = useState(null);
  useState(() => {
    fetch(`https://tourism-server-site.vercel.app/countries`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountries(data);
      });
  }, []);
  //   console.log(countries);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-5">Countries</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
        {countries &&
          countries.map((country) => <Country 
          key={country._id}
          country={country}></Country>)}
      </div>
    </div>
  );
};

export default Countries;
