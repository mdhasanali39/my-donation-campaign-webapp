import Banner from "./Banner/Banner";
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";
import './Header.css'

const Header = () => {
    return (
        <div className="overlay">
            <div className="flex justify-between items-center max-w-[1300px] mx-auto px-5 pt-4">
            <Logo></Logo>
            <Navbar></Navbar>
            </div>
            <Banner></Banner>
        </div>
    );
};

export default Header;