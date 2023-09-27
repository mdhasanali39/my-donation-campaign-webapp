import { useContext, useState } from "react";
import { SearchValue } from "../../../Layout/MainLayout";

const Banner = () => {
  // const [value, setValue] = useState(null)
  let searchValue = useContext(SearchValue);
  const [valueOfSearch, setSearchValue] = searchValue

  // handle search button clicked 
  const handleSearchButtonClicked = (e) =>{
    // console.log(e.target.parentNode.children[0].value);
    setSearchValue(e.target.parentNode.children[0].value)
  }


  return (
    <div className="flex justify-center items-center min-h-[89vh]">
      <div className="flex flex-col items-center px-3">
        <h1 className="mb-10 text-4xl md:text-5xl font-bold text-center">
          I Grow By Helping People In Need
        </h1>
        <div className="relative w-3/4">
          <input
            className="w-full px-4 py-3 rounded-lg border outline-none border-[#DEDEDE] text-sm"
            type="text"
            placeholder="Search here...."
          />
          <button 
          onClick={handleSearchButtonClicked}
            className="absolute right-0 h-full px-4 py-3 bg-[#FF444A] rounded-r-lg text-white font-semibold"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
