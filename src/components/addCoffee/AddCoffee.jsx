import "./AddCoffee.css";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoUrl = form.photoUrl.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photoUrl,
    };
    console.log(newCoffee);

    //send data to the server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "User Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="add-coffee-container  grid justify-center mt-xl">
      <h2 className="text-center">Add New Coffee</h2>
      <p className=" text-center">
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>

      <form onSubmit={handleAddCoffee}>
        <div className="flex gap-7 justify-center pt-5">
          <div>
            <label>Name</label> <br></br>
            <input
              className="form-input bg-white"
              type="text"
              name="name"
              placeholder="Enter coffee name"
            />
          </div>

          <div>
            <label>Available Quantity</label> <br></br>
            <input
              className="form-input bg-white"
              type="number"
              name="quantity"
              placeholder="Enter available quantity"
            />
          </div>
        </div>

        {/* Second Layer  */}

        <div className="flex gap-7 justify-center pt-5">
          <div>
            <label>Supplier</label> <br></br>
            <input
              className="form-input bg-white"
              type="text"
              name="supplier"
              placeholder="Enter coffee supplier"
            />
          </div>

          <div>
            <label>Taste</label> <br></br>
            <input
              className="form-input bg-white"
              type="text"
              name="taste"
              placeholder="Enter coffee taste"
            />
          </div>
        </div>

        {/* Third Layer  */}

        <div className="flex gap-7 justify-center pt-5">
          <div>
            <label>Category</label> <br></br>
            <input
              className="form-input bg-white"
              type="text"
              name="category"
              placeholder="Enter coffee category"
            />
          </div>

          <div>
            <label>Details</label> <br></br>
            <input
              className="form-input bg-white"
              type="text"
              name="details"
              placeholder="Enter coffee details"
            />
          </div>
        </div>

        {/* Third Layer  */}
        <div className="photo-input grid justify-center">
          <label>Photo</label> <br></br>
          <input
            className="form-input  bg-white"
            type="text"
            name="photoUrl"
            placeholder="Enter photo URL"
          />
        </div>

        <div className="submit-btn grid justify-center">
          <input
            className="form-input bg-white"
            type="submit"
            value="Add Coffee"
          />
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
