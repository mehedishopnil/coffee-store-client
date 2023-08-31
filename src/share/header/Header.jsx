import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-container flex justify-between items-center bg-gray-800 text-white py-2 px-4'>
            <div className='w-1/3'>
                <h2>Coffee Store</h2>
            </div>
            <div className='w-1/3 text-center'>
                <Link to={'/'} className='mx-2'>Home</Link>
                <Link to={'/addCoffee'} className='mx-2'>AddCoffee</Link>
                <Link to={'/updateCoffee'} className='mx-2'>UpdateCoffee</Link>
            </div>
            <div className='w-1/3'></div>
        </div>
    );
};

export default Header;
