import { useLoaderData } from "react-router-dom";
import { getStoredDonatedCards } from "../utility/LocalStorage";
import { useEffect, useState } from "react";
import DonatedCard from "./DonatedCard";


const Donation = () => {
    const [donatedCards, setDonatedCards] = useState([]);

    const allData = useLoaderData();
    const data = allData.data;
    useEffect(() => {
        const storedDonatedIds = getStoredDonatedCards();
        // const storedIds = parseInt(storedDonatedIds);
        if(data.length > 0){
            const donated = data.filter(datum => storedDonatedIds.includes(datum.id));
            setDonatedCards(donated);
        }
    },[data])
    return (
        <div>
            <div className="grid grid-cols-2 max-w-6xl mx-auto mt-5 gap-6">
              {
                donatedCards.map(donatedCard => <DonatedCard key={donatedCard.id} donatedCard={donatedCard}></DonatedCard>)
              }
            </div>
        </div>
    );
};

export default Donation;