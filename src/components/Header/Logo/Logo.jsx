import logo from '/src/assets/images/Logo.png'
const Logo = () => {
    return (
        <div>
            <img
             className='w-52'
             src={logo} 
             alt='donation campaign logo image'
             />
        </div>
    );
};

export default Logo;