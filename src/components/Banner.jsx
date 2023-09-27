import { useContext } from "react";
import { DataContext, SearchContext } from "./Home";

const Banner = () => {
    const [searchText, setSearchText] = useContext(SearchContext);
    const [data, setData] = useContext(DataContext);
   
   
    const handleSearch = () => {
        const searchedDatum = data.filter(datum => searchText.includes(datum.category));
        setData(searchedDatum);
    };
    const handleSearchText = e => {
        setSearchText(e.target.value);
    };
    console.log(searchText);
    console.log(data);
    
  
    return (
        <div  className="mt-4" >
            <div className=" w-full h-[500px] bg-[#FFFFFFF2] bg-texture bg-cover bg-center bg-blend-color-burn">
                {/* <h2 className="text-5xl  relative top-44 text-center font-bold">I Grow By Helping People In Need</h2> */}
                <div className="relative top-44 text-center">
                    <h2 className="text-5xl font-bold">I Grow By Helping People In Need</h2>
                    <div className="mt-10">
                        <input type="text" className="border w-96 h-12 p-4" placeholder="Search here..." onChange={handleSearchText} />
                        <button className="btn bg-[#FF444A] text-white hover:bg-red-800" onClick={() => handleSearch()}>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;