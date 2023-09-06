import { useLoaderData } from 'react-router-dom';
import './UpdateCoffee.css'
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

  const coffee = useLoaderData();

  const { name, details, category, _id, taste, supplier, quantity, photoUrl } =
    coffee;

    const handleUpdateCoffee = (event) => {
      event.preventDefault();
  
      const form = event.target;

      const name = form.name.value;
      const quantity = form.quantity.value;
      const supplier = form.supplier.value;
      const taste = form.taste.value;
      const category = form.category.value;
      const details = form.details.value;
      const photoUrl = form.photoUrl.value;
  
      const updatedCoffee = {
        name,
        quantity,
        supplier,
        taste,
        category,
        details,
        photoUrl,
      };
      console.log(updatedCoffee);
  
      //send data to the server
      fetch(`http://localhost:5000/coffee/${_id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedCoffee),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount > 0) {
            Swal.fire({
              title: "Success!",
              text: "Coffee Updated Successfully",
              icon: "success",
              confirmButtonText: "Cool",
            });
          }
        });
    };

    return (
        <div className='add-coffee-container  grid justify-center mt-xl'>
        <h2 className='text-center pb-5'>Update Existing Coffee Details</h2>
        <p className=' text-center'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
  
        <form onSubmit={handleUpdateCoffee}>
          <div  className='flex gap-7 justify-center pt-5'>
          <div>
          <label >Name</label> <br></br>
          <input className='form-input bg-white' name='name' type="text" defaultValue={name} placeholder='name'/>
          </div>
  
          <div>
          <label >Available Quantity</label> <br></br>
          <input className='form-input bg-white' name='quantity' type="number" defaultValue={quantity} placeholder='quantity'/>
          </div>
          </div>
  
          {/* Second Layer  */}
  
          <div  className='flex gap-7 justify-center pt-5'>
          <div>
          <label >Supplier</label> <br></br>
          <input className='form-input bg-white' name='supplier' type="text" defaultValue={supplier} placeholder='supplier'/>
          </div>
  
          <div>
          <label >Taste</label> <br></br>
          <input className='form-input bg-white' name='taste' type="text" defaultValue={taste} placeholder='taste'/>
          </div>
            
          </div>
  
  
          {/* Third Layer  */}
  
          <div  className='flex gap-7 justify-center pt-5'>
          <div>
          <label >Category</label> <br></br>
        <input className='form-input bg-white' name='category' type="text" defaultValue={category} placeholder='category'/>
          </div>
  
          <div>
          <label >Details</label> <br></br>
          <input className='form-input bg-white' name='details' type="text" defaultValue={details} placeholder='details'/>
          </div>
            
          </div>
  
            {/* Third Layer  */}
          <div className='photo-input grid justify-center'>
          <label >Photo</label> <br></br>
          <input className='form-input  bg-white' name='photoUrl' type="text" defaultValue={photoUrl} placeholder='photoUrl'/>
          </div>
  
          <div className='submit-btn grid justify-center'>
          <input className='form-input bg-white' type="submit" value='Update Coffee'/>
          </div>
        </form>
      </div>
    );
};

export default UpdateCoffee;