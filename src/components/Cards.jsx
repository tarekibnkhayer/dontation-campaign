import { useContext } from "react";
import Card from "./Card";
import {  DisplayContext } from "./Home";


const Cards = () => {

    const [display] = useContext(DisplayContext);
   
    return (
        <div className="mt-24" >
            <div className="grid grid-cols-4 max-w-6xl mx-auto gap-6">
                {
                    display.map(card => <Card card={card} key={card.id}></Card> )
                }
            </div>
        </div>
    );
};

export default Cards;