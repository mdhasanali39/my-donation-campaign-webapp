import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { createContext, useState } from "react";

export const SearchValue = createContext(null);

const MainLayout = () => {
    const [searchValue, setSearchValue] = useState(null)
    // console.log(searchValue);

  return (
    <div>
      <SearchValue.Provider value={[searchValue, setSearchValue]}>
        <Header></Header>
      
      <div className="max-w-[1300px] mx-auto px-5 py-4">
        <Outlet></Outlet>
      </div>
      </SearchValue.Provider>
    </div>
  );
};

export default MainLayout;
