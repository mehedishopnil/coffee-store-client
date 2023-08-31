import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className=" header-container flex justify-between items-center bg-gray-800 text-white  px-24">
      <div className="w-1/3">
        <h2 className="text-2xl font-semibold"><span className="text-amber-600">Coffee</span> Store</h2>
      </div>
      <div className="container mx-autow-1/3 text-center">
        <Link to={"/"} className="mx-2">
          Home
        </Link>
        <Link to={"/addCoffee"} className="mx-2">
          AddCoffee
        </Link>
        <Link to={"/updateCoffee"} className="mx-2">
          UpdateCoffee
        </Link>
      </div>
      <div className="w-1/3"></div>
    </div>
  );
};

export default Header;
