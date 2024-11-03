import { Link, useLocation } from "react-router-dom";

import PropTypes from "prop-types";
import { FaTrashAlt } from "react-icons/fa";
const Card = ({ coffee, handleRemove }) => {
  const { pathname } = useLocation();
  const { name, image, category, origin, type, id, rating, popularity } =
    coffee || {};
  return (
    <div className="flex relative">
      <Link
        to={`/coffee/${id}`}
        className="transition  hover:scale-105 shadow-xl rounded-xl overflow-hidden"
      >
        <figure className="w-full h-48 overflow-hidden">
          <img className="" src={image} alt="" />
        </figure>
        <div className="p-4">
          <h1 className="text-xl">Name: {name}</h1>
          <p>Category: {category}</p>
          <p>Type: {type}</p>
          <p>Origin: {origin}</p>
          <p>Rating: {rating}</p>
          <p>Popular: {popularity}</p>
        </div>
      </Link>
      {pathname === "/dashboard" && (
        <div
          onClick={() => handleRemove(id)}
          className="absolute p-3 rounded-full cursor-pointer bg-warning -top-5 -right-5"
        >
          <FaTrashAlt size={20} />
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  coffee: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    category: PropTypes.string,
    origin: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.number,
    rating: PropTypes.number,
    popularity: PropTypes.number,
  }),
  handleRemove: PropTypes.func.isRequired,
};

export default Card;
