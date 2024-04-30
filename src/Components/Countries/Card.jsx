const Card = ({ spot }) => {
    // console.log(object);
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={spot.imgurl} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{spot.Spotname}</h2>
        <p>{spot.desc}</p>
      </div>
    </div>
  );
};

export default Card;
