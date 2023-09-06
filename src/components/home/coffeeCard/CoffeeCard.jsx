import React from "react";
import "./CoffeeCard.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee,  coffees, setCoffees }) => {
  const { name, details, category, _id, taste, supplier, quantity, photoUrl } =
    coffee;

  const handleDelete = (_id) => {
    console.log(_id);
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
        fetch(`http://localhost:5000/coffee/${_id}`,{
          method: 'DELETE',
          
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!",
               "Your Coffee has been deleted.",
                "success");
            }

            const remaining = coffees.filter(cof => cof._id !==_id);
            setCoffees(remaining);
          });
      }
    });
  };

  return (
    <div>
      <div className="card-info-container card card-side px-5 py-4 mt-10 bg-base-100 shadow-xl">
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
            <button className=" card-btn ">View</button>
            <Link to={`updateCoffee/${_id}`}>
              <button className="card-btn">Edit</button>
            </Link>
            <button onClick={() => handleDelete(_id)} className="card-delete-btn">
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
