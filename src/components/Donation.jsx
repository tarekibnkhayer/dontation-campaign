import { useLoaderData } from "react-router-dom";
import { getStoredDonatedCards } from "../utility/LocalStorage";
import { useEffect, useState } from "react";
import DonatedCard from "./DonatedCard";


const Donation = () => {
    const [donatedCards, setDonatedCards] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    const allData = useLoaderData();
    const data = allData.data;
    useEffect(() => {
        const storedDonatedIds = getStoredDonatedCards();
        // const storedIds = parseInt(storedDonatedIds);
        if(data?.length > 0){
            const donated = data.filter(datum => storedDonatedIds.includes(datum.id));
            setDonatedCards(donated);
        }
    },[data])
    return (
        <div>
            <div className="grid lg:grid-cols-2 md:max-w-2xl max-w-sm lg:max-w-6xl mx-auto mt-5 gap-6">
              {
                donatedCards?.slice(0, dataLength).map(donatedCard => <DonatedCard key={donatedCard.id} donatedCard={donatedCard}></DonatedCard>)
              }
            </div>
            <div className={dataLength === donatedCards?.length  && 'hidden' || donatedCards?.length <= 4 && 'hidden'}>
                <div className="flex justify-center items-center mt-10">
                    <button className="p-4 bg-green-500 hover:bg-green-800 rounded-lg text-white" onClick={() => setDataLength(donatedCards?.length)}>See All</button>
                </div>
            </div>
        </div>
    );
};

export default Donation;