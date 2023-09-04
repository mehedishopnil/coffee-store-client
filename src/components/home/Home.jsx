import { useLoaderData } from "react-router-dom";
import "./Home.css";
import CoffeeCard from "./coffeeCard/CoffeeCard";

const Home = () => {
  const coffees = useLoaderData();
  console.log(coffees.name);

  return (
    <div className="home-body container mx-auto md:mx-auto">
      {/* Popular Coffee Section */}
      <section className="popular-products">
        <h1 className="text-5xl  my-5 text-center ">Our Popular Products</h1>
        <div className="grid grid-cols-2 gap-5 my-8">
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
