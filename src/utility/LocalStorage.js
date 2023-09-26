const getStoredDonatedCards = () => {
    const donatedCards = localStorage.getItem("donated");
    if(donatedCards){
        return JSON.parse(donatedCards);
    }
    return [];

};
const saveDonatedCard = id => {
    const donatedCards = getStoredDonatedCards();
    const exist = donatedCards.find(donatedId => donatedId === id);
    if(!exist){
        donatedCards.push(id);
        localStorage.setItem("donated", JSON.stringify(donatedCards))
    }
};
export {getStoredDonatedCards, saveDonatedCard};