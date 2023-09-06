
import { Outlet } from 'react-router-dom';
import Header from '../share/header/Header';
import Footer from '../share/footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;