import PropTypes from 'prop-types';
const Card = ({card}) => {
    const {picture, title, category, category_bg_color, card_bg_color, text_color } = card;
    return (
        <div style={{backgroundColor: card_bg_color}} className='rounded-lg'>
            <img src={picture} alt="" className='w-full' />
           <div className='ml-4 mt-4 mb-4'> <button style={{backgroundColor: category_bg_color, color: text_color}} className='px-[10px] py-[5px] rounded-md'>{category}</button>
            <p style={{color: text_color}} className='mt-2 text-xl font-semibold'>{title}</p></div>
        </div>
    );
};

export default Card;
Card.propTypes = {
    card: PropTypes.object.isRequired
}