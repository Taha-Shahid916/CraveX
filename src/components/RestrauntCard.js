import { CDN_URL } from "../utils/constants";
import { Link } from "react-router";

const RestrauntCard = (prop) => {
  const { resdata } = prop;
  return (
    <div className="restraunt-card">
      <img className="logo2"
        src={ CDN_URL + resdata.info.cloudinaryImageId} alt="logo.png" />
      <h2>{resdata.info.name}</h2>
      <p>Rating: {resdata.info.avgRating} stars</p>
      <p>Cost for Two: {resdata.info.costForTwo}</p>
      <p>Cuisines: {resdata.info.cuisines.join(", ")}</p>
      <Link to={"/restaurant/" + resdata.info.id}><button className="button">Order Now</button></Link>
    </div>
  );
};
 
export default RestrauntCard;
