import React from "react";
import "./CoffeeCard.css";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee }) => {
  const { name, details, category, _id, taste, supplier, quantity, photoUrl } =
    coffee;

  return (
    <div>
      <div className="card-info-container card card-side p-5 mt-10 bg-base-100 shadow-xl">
        <figure>
          <img className="card-img " src={photoUrl} alt="Movie" />
        </figure>
        <div className="coffee-info p-5">
          <div className=" ">
            <p className="card-title text-gray-600 text-lg">
              <strong>Name: </strong>
              {name}
            </p>
            <p className="text-gray-600 text-xs">
              <strong>Details: </strong>
              {details}
            </p>
            <p className="text-gray-600 text-xs pt-1">
              <strong>Category: </strong>
              {category}
            </p>
            <p className="text-gray-600 text-xs pt-1">
              <strong>Taste: </strong>
              {taste}
            </p>
            <p className="text-gray-600 text-xs pt-1">
              <strong>Supplier: </strong>
              {supplier}
            </p>
            <p className="text-gray-600 text-xs pt-1">
              <strong>Quantity: </strong>
              {quantity}
            </p>
          </div>

          <div className="">
            <button className=" card-btn">View</button>
            <Link to={'/updateCoffee'}><button className="card-btn">Edit</button></Link>
            <button className="card-btn">X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
