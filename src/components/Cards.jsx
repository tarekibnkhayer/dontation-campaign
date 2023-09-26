import { useEffect, useState  } from "react";
import Card from "./Card";


const Cards = () => {
    const [json, setJson] = useState([]);
    console.log(json);
    useEffect(() => {
    fetch("../../public/donation.json")
    .then(res => res.json())
    .then(data => setJson(data.data))}
    ,[])
    return (
        <div className="mt-24" >
            <div className="grid grid-cols-4 max-w-6xl mx-auto gap-6">
                {
                    json.map(card => <Card card={card} key={card.id}></Card> )
                }
            </div>
        </div>
    );
};

export default Cards;