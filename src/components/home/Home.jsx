import { useLoaderData } from "react-router-dom";
import "./Home.css";
import CoffeeCard from "./coffeeCard/CoffeeCard";

const Home = () => {
  const coffees = useLoaderData();
  console.log(coffees.name);
  

  return (
    <div className="container mx-auto">
      <h1 className="text-5xl  my-5 text-center text-gray-700">Coffee Store</h1>
      <h1 className="text-3xl  my-5 text-center text-gray-700">
        Total Coffees: {coffees.length}
      </h1>
      <div className="grid grid-cols-2 gap-5 my-8">
      {
        coffees.map(coffee => <CoffeeCard
        key={coffee._id}
        coffee = {coffee}
        ></CoffeeCard>)
      }
      </div>

      
    </div>
  );
};

export default Home;
