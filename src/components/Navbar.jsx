import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='md:flex justify-between lg:max-w-6xl md:max-w-2xl mx-auto mt-14 items-center max-w-sm '>
            <div>
               <img src={Logo} alt="" className='w-full' />
            </div>
            <div className='flex lg:gap-12 gap-6 text-lg justify-center mt-14 md:mt-0   '>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/donation">Donation</NavLink>
                <NavLink to="/statistics">Statistics</NavLink>
                
            </div>
        </div>
    );
};

export default Navbar;