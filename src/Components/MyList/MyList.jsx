import MyListTable from "./MyListTable";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [tourSpots, setTourspots] = useState([]);
  console.log(tourSpots);
  useEffect(() => {
    fetch(`https://tourism-server-site.vercel.app/spotdetail/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setTourspots(data);
      });
  }, [user]);

  return (
    <div>
      <h1 className="text-center">My List</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Spot Name</th>
              <th>Country</th>
              <th>Cost</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          {tourSpots.map((spot, i) => (
            <MyListTable
              i={i}
              key={spot._id}
              spot={spot}
              tourSpots={tourSpots}
              setTourspots={setTourspots}
            ></MyListTable>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyList;
