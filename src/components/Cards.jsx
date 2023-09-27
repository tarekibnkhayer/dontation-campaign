import { useContext } from "react";
import Card from "./Card";
import { DataContext } from "./Home";


const Cards = () => {
    const [data] = useContext(DataContext);
   
    return (
        <div className="mt-24" >
            <div className="grid grid-cols-4 max-w-6xl mx-auto gap-6">
                {
                    data.map(card => <Card card={card} key={card.id}></Card> )
                }
            </div>
        </div>
    );
};

export default Cards;