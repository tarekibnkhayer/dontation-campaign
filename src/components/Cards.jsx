import { useContext } from "react";
import Card from "./Card";
import {  DisplayContext } from "./Home";


const Cards = () => {

    const [display] = useContext(DisplayContext);
   
    return (
        <div className="mt-24" >
            <div className="grid md:grid-cols-2 md:max-w-2xl lg:grid-cols-4 lg:max-w-6xl mx-auto gap-6 max-w-sm">
                {
                    display.map(card => <Card card={card} key={card.id}></Card> )
                }
            </div>
        </div>
    );
};

export default Cards;