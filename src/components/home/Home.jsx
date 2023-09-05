import { Link, useLoaderData } from "react-router-dom";
import "./Home.css";
import CoffeeCard from "./coffeeCard/CoffeeCard";

const Home = () => {
  const coffees = useLoaderData();
  console.log(coffees.name);

  return (
    <div className="home-body ">
        {/* Top Banner Section */}
        <section className="top-banner">
        <div className="top-banner-info">
            <div></div>
            <div className="banner-info text-left text-white">
                <h1 className="stylish-font">Would you like a Cup of Delicious Coffee?</h1>
                <p>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <Link className=" add-coffee-link" ><button className="learn-more">Learn More</button></Link>
            </div>
        </div>
        </section>



      {/* Popular Coffee Section */}
      <div className="container mx-auto md:mx-auto popular-product-body">
      <section className=" popular-products">
        <h1 className="text-5xl  my-5 text-center ">Our Popular Products</h1>
        <Link className="add-coffee-link" to={'addCoffee'}><button className="add-coffee-button">Add Coffee</button></Link>
        <div className="grid grid-cols-2 gap-5 my-8">
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
          ))}
        </div>
      </section>
      </div>
    </div>
  );
};

export default Home;
