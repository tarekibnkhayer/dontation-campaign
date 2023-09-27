
import { createContext, useState, useEffect} from "react";
import Banner from "./Banner";
import Cards from "./Cards";
export const SearchContext = createContext();
export const DataContext = createContext();
export const DisplayContext = createContext();

const Home = () => {
    const [searchText, setSearchText] = useState();
    const [data, setData] = useState([]);
    const [display, setDisplay] = useState([]);
    useEffect(() =>{
        fetch("donation.json")
        .then(res => res.json())
        .then(data => {
            setData(data.data);
            setDisplay(data.data);
        })
    },[]);
    
    console.log(data, display);
            return (
                <div>
              <DisplayContext.Provider value={[display, setDisplay]}>
              <DataContext.Provider value={[data, setData]}>
         <SearchContext.Provider value={[searchText, setSearchText]}>
           <Banner></Banner>
          <Cards></Cards>
           </SearchContext.Provider>
         </DataContext.Provider>
              </DisplayContext.Provider>
                </div>
    );
};

export default Home;