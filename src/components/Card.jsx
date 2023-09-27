import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
const Card = ({card}) => {
    const {id ,picture, title, category, category_bg_color, card_bg_color, text_color } = card;
    return (
        <NavLink to={`/${id}`}>
            <div style={{backgroundColor: card_bg_color}} className='rounded-lg pb-4'>
            <img src={picture} alt="" className='w-full' />
           <div className='ml-4 mt-4 mb-4'> <button style={{backgroundColor: category_bg_color, color: text_color}} className='px-[10px] py-[5px] rounded-md'>{category}</button>
            <p style={{color: text_color}} className='mt-2 text-xl font-semibold'>{title}</p></div>
        </div>
        </NavLink>
    );
};

export default Card;
Card.propTypes = {
    card: PropTypes.object.isRequired
}