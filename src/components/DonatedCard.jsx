import PropTypes from 'prop-types'; 

const DonatedCard = ({donatedCard}) => {
    const {picture, category, title, price, card_bg_color, text_color, category_bg_color} = donatedCard;
    return (
        <div style={{backgroundColor: card_bg_color}} className='flex rounded-lg '>
            <img src={picture} alt="" className='w-52' />
           <div className='ml-6 my-6 space-y-3'> <button className='px-[10px] py-1 rounded-md' style={{backgroundColor:category_bg_color, color: text_color}}>{category}</button>
           <p className='text-[#0B0B0B] text-2xl font-semibold'>{title}</p>
           <p style={{color: text_color}} className='font-semibold'>{price}</p>
           <button style={{backgroundColor: text_color}} className='text-white text-lg px-4 py-2 rounded-md'>View Details</button>
           </div>
        </div>
    );
};

export default DonatedCard;
DonatedCard.propTypes = {
    donatedCard: PropTypes.object.isRequired
}