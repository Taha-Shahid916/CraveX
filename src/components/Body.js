import RestrauntCard from "./RestrauntCard";
import reslist from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
    const [ListofRestraunt, setListofRestraunt] = useState([]);
    const [allRestraunt, setallRestraunt] = useState([]);
    const [searchText, setSearchText] = useState(""); // search input state

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        var restraunt = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListofRestraunt(restraunt);
        setallRestraunt(restraunt);
    }

    const handleSearch = () => {
        const normalizedSearch = searchText.toLowerCase().trim();
        const filteredlist = allRestraunt.filter((resdata) =>
            resdata.info.name.toLowerCase().includes(normalizedSearch) ||
            resdata.info.cuisines.some((cuisine) =>
                cuisine.toLowerCase().includes(normalizedSearch)
            )
        );
       if (filteredlist.length === 0) {
            alert("No restaurant found");
        }
        else {
            setListofRestraunt(filteredlist);
        }
    };
    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) 
        return (
            <h1>🔴 Offline, Please check your internet connection!!</h1>
        );
        
    return ListofRestraunt.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="sortbutton">

                <button className="sort-button" onClick={() => {
                    setListofRestraunt(allRestraunt);
                }} >
                    All Restaurant
                </button>


                <button className="sort-button" onClick={() => {
                    const filteredlist = allRestraunt.filter((resdata) => resdata.info.avgRating >= 4.5);
                    setListofRestraunt(filteredlist);
                }} >
                    Top Rated Restaurant
                </button>

                <button className="sort-button" onClick={() => {
                    const filteredlist = allRestraunt.filter((resdata) => resdata.info.cuisines.includes("Chinese"));
                    setListofRestraunt(filteredlist);
                }} >
                    Chinese Restaurant
                </button>

                <button className="sort-button" onClick={() => {
                    const filteredlist = allRestraunt.filter((resdata) => resdata.info.cuisines.includes("Pizzas"));
                    setListofRestraunt(filteredlist);
                }} >
                    Pizza Restaurant
                </button>

                <button className="sort-button" onClick={() => {
                    const filteredlist = allRestraunt.filter((resdata) => resdata.info.cuisines.includes("American"));
                    setListofRestraunt(filteredlist);
                }} >
                    American Restaurant
                </button>



            </div>
            <div className="search">
                <input
                    className="searchbar"
                    type="text"
                    placeholder="Search here....."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)} // update state on typing
                     onKeyDown={(e) => { 
                    if (e.key === "Enter") { 
                        handleSearch(); 
                        }
                        }}
                />
                <button className="Searchbutton" onClick={handleSearch} >
                    Search
                </button>
            </div>


            <div className="Restrauntcard">
                {ListofRestraunt.map((restraunt) => {
                    return <RestrauntCard resdata={restraunt} key={restraunt.info.id} />;
                })}
            </div>
        </div>
    );
    ;
}

export default Body;