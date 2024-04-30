import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";

const AddTourist = () => {

  const { user } = useContext(AuthContext);

  const handleForm = (e) => {
    e.preventDefault();
    console.log(`khela hocce!`);
    const useremail = user.email;

    const traveltime = e.target.traveltime.value;

    const totalVisitorsPerYear = e.target.totalVisitorsPerYear.value;

    const seasonality = e.target.seasonality.value;

    const desc = e.target.desc.value;

    const location = e.target.location.value;

    const countryname = e.target.countryname.value;

    const imgurl = e.target.imgurl.value;

    const Spotname = e.target.Spotname.value;

    const username = user.displayName;

    const averagecost = e.target.averagecost.value;

    const spotDetails = {
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
    };

    // sending data to the server

    fetch(`https://tourism-server-site.vercel.app/spotDetails`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(spotDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Tour Spot Added",
            text: "Tour Spot Added Successfully!",
          });
        }
        this.myFormRef.reset();
      });
  };

  return (
    <section className="p-6  dark:bg-gray-100 text-gray-50 dark:text-gray-900">
      <form
        onSubmit={handleForm}
        noValidate=""
        action=""
        className="container flex flex-col mx-auto space-y-12"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-[#EFBC9B] dark:bg-gray-50">
          <div className="space-y-2 row-span-full lg:col-span-1">
            <h1 className="text-left text-4xl">Add Tourist Spots</h1>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="username" className="text-sm">
                Spot name
              </label>
              <input
                name="Spotname"
                type="text"
                placeholder="Spot name"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="website" className="text-sm">
                Image URL
              </label>
              <input
                name="imgurl"
                type="text"
                placeholder="https://"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="website" className="text-sm">
                Country Name
              </label>
              <input
                name="countryname"
                type="text"
                placeholder="Country Name"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="website" className="text-sm">
                Location
              </label>
              <input
                name="location"
                type="text"
                placeholder="Location"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300"
              />
            </div>
            {/* desc */}
            <div className="col-span-full">
              <label htmlFor="bio" className="text-sm">
                Description
              </label>
              <textarea
                name="desc"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300"
              ></textarea>
            </div>

            <div className="col-span-full sm:col-span-3">
              <label htmlFor="website" className="text-sm">
                Seasonality
              </label>
              <input
                name="seasonality"
                type="text"
                placeholder="Seasonality"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="website" className="text-sm">
                Total Visitors PerYear
              </label>
              <input
                name="totalVisitorsPerYear"
                type="text"
                placeholder="Visitors"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="website" className="text-sm">
                Travel time
              </label>
              <input
                name="traveltime"
                type="text"
                placeholder="time"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="website" className="text-sm">
                Average Cost
              </label>
              <input
                name="averagecost"
                type= "number"
                placeholder="Cost"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300"
              />
            </div>


            <input
              className="bg-[#008DDA] text-xl font-bold col-span-full rounded-lg py-3"
              type="submit"
              value="Submit"
            />
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default AddTourist;
