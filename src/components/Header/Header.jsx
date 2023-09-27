import Banner from "./Banner/Banner";
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";
import './Header.css'
import { useLocation } from "react-router-dom";

const Header = () => {

    const loc = useLocation()

    return (
        <div className={loc.pathname === '/' ? 'overlay' : ''}>
            <div className="flex justify-between items-center max-w-[1300px] mx-auto px-5 pt-8">
            <Logo></Logo>
            <Navbar></Navbar>
            </div>
            {loc.pathname === '/' && <Banner></Banner>}
        </div>

    );
};

export default Header;