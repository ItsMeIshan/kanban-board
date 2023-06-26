import { useSelector } from "react-redux";
import { logo, menuIcon, searchIcon } from "../../utils/constants";
import SearchBar from "./SearchBar";
import UserInfo from "./UserInfo";
import HeaderUtilities from "./Utilities";
import { useDispatch } from "react-redux";
import {
  changeMobileSearchBarState,
  changeSidebarState,
} from "../../utils/globalSlice";

function Header() {
  const globalState = useSelector((store) => store?.globalSlice?.globalState);
  const dispatch = useDispatch();
  const setSidebarState = (e) => {
    e.preventDefault();
    dispatch(changeSidebarState(!globalState?.isSidebarOpen));
  };
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(changeMobileSearchBarState(true));
  };
  return (
    <div className="header-container sticky top-0 z-20 bg-white">
      {!globalState?.mobileSearchBar ? (
        <div className="flex justify-between items-center px-5 mr-2 border-[#DBDBDB] border-r self-stretch basis-60 lg:basis-48 sm:basis-40 sm:px-3">
          <div className="logo">
            <img
              className="sm:w-4 sm:h-4"
              src={logo}
              alt="three corresponding circles"
            />
            <span>Project M.</span>
          </div>
          <a href="#" onClick={(e) => setSidebarState(e)}>
            <div>
              <img src={menuIcon} alt="doubled left arrow" />
            </div>
          </a>
        </div>
      ) : (
        ""
      )}
      {!globalState?.mobileSearchBar ? (
        <a
          className="mobile-searchBar-btn cursor-pointer"
          onClick={(e) => handleClick(e)}
        >
          <img src={searchIcon} alt="" />
        </a>
      ) : (
        ""
      )}
      {globalState?.mobileSearchBar ? <SearchBar /> : ""}
      {!globalState?.mobileSearchBar ? (
        <div className="flex justify-between items-center flex-1">
          <div className="flex-1 flex-shrink-[2]">
            <SearchBar />
          </div>
          <div className="flex items-center">
            <HeaderUtilities />
            <UserInfo />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Header;
