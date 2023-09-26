import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo.png';

const Navbar = () => {
    return (
        <div className='flex justify-between max-w-6xl mx-auto mt-14 items-center'>
            <div>
               <img src={Logo} alt="" />
            </div>
            <div className='flex gap-12 text-lg'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/donation">Donation</NavLink>
                <NavLink to="/statistics">Statistics</NavLink>
                
            </div>
        </div>
    );
};

export default Navbar;