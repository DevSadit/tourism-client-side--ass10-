import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyListTable = ({ spot, tourSpots, setTourspots, i }) => {

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
  } = spot;

  // delete fn
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // delete card
        fetch(`https://tourism-server-site.vercel.app/spotDetails/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = tourSpots.filter((ts) => {
                return ts._id !== _id;
              });
              console.log(remaining);
              setTourspots([...remaining]);
            }
          });
      }
    });
  };

  return (
    <tbody>
      {/* row 1 */}
      <tr>
        <th>{i + 1}</th>
        <td>{Spotname}</td>
        <td>{countryname}</td>
        <td>{averagecost}</td>
        <td>
          <Link to={`/updateCard/${_id}`}>
            <button type="submit" className=" btn p-2 btn-primary">
              Update
            </button>
          </Link>
        </td>
        <td>
          <button
            onClick={() => {
              handleDelete(_id);
            }}
            className="btn p-2 btn-outline btn-error"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default MyListTable;
//           <button className=" btn p-2 btn-primary">Update</button>
