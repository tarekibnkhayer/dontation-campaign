
import { createContext, useState, useEffect} from "react";
import Banner from "./Banner";
import Cards from "./Cards";
export const SearchContext = createContext();
export const DataContext = createContext();


const Home = () => {
    const [searchText, setSearchText] = useState();
    const [data, setData] = useState([]);
    
    console.log(data);
    useEffect(() =>{
        fetch("donation.json")
        .then(res => res.json())
        .then(data => setData(data.data))
    },[]);
            return (
                <div>
                <DataContext.Provider value={[data, setData]}>
         <SearchContext.Provider value={[searchText, setSearchText]}>
           <Banner></Banner>
          <Cards></Cards>
           </SearchContext.Provider>
         </DataContext.Provider>
                </div>
    );
};

export default Home;