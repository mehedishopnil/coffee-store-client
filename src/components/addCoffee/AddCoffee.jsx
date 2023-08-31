import './AddCoffee.css'


const AddCoffee = () => {
  return (
    <div className='add-coffee-container  grid justify-center mt-xl'>
      <h2 className='text-center'>Add New Coffee</h2>
      <p className=' text-center'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

      <form>
        <div  className='flex gap-7 justify-center pt-5'>
        <div>
        <label >Name</label> <br></br>
        <input className='form-input bg-white' type="text" placeholder='Enter coffee name'/>
        </div>

        <div>
        <label >Chef</label> <br></br>
        <input className='form-input bg-white' type="text" placeholder='Enter coffee chef'/>
        </div>
        </div>

        {/* Second Layer  */}

        <div  className='flex gap-7 justify-center pt-5'>
        <div>
        <label >Supplier</label> <br></br>
        <input className='form-input bg-white' type="text" placeholder='Enter coffee supplier'/>
        </div>

        <div>
        <label >Taste</label> <br></br>
        <input className='form-input bg-white' type="text" placeholder='Enter coffee taste'/>
        </div>
          
        </div>


        {/* Third Layer  */}

        <div  className='flex gap-7 justify-center pt-5'>
        <div>
        <label >Category</label> <br></br>
        <input className='form-input bg-white' type="text" placeholder='Enter coffee category'/>
        </div>

        <div>
        <label >Details</label> <br></br>
        <input className='form-input bg-white' type="text" placeholder='Enter coffee details'/>
        </div>
          
        </div>

          {/* Third Layer  */}
        <div className='photo-input grid justify-center'>
        <label >Photo</label> <br></br>
        <input className='form-input  bg-white' type="text" placeholder='Enter photo URL'/>
        </div>

        <div className='submit-btn grid justify-center'>
        <input className='form-input bg-white' type="submit" value='Add Coffee'/>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
