import Banner from "./Banner/Banner";
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";

const Header = () => {
    return (
        <div>
            <div className="flex justify-between items-center">
            <Logo></Logo>
            <Navbar></Navbar>
            </div>
            <Banner></Banner>
        </div>
    );
};

export default Header;