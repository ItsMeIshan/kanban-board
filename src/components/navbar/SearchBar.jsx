import { useSelector } from "react-redux";
import { searchIcon } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { changeMobileSearchBarState } from "../../utils/globalSlice";
import { ArrowBackIos } from "@mui/icons-material";

function SearchBar() {
  const globalState = useSelector((store) => store?.globalSlice?.globalState);
  const dispatch = useDispatch();
  return (
    <div
      className={`${globalState.mobileSearchBar ? "mobile-search-bar" : ""}`}
    >
      {globalState.mobileSearchBar ? (
        <div
          className="cursor-pointer"
          onClick={() => dispatch(changeMobileSearchBarState(false))}
        >
          <ArrowBackIos sx={{ width: 30, height: 30 }}></ArrowBackIos>
        </div>
      ) : (
        ""
      )}
      <div
        className={`search-bar-container ${
          !globalState.mobileSearchBar ? "sm:hidden" : ""
        }`}
      >
        <div>
          <img className="h-6 w-6" src={searchIcon} alt="magnifying glass" />
        </div>
        <input
          className="search-bar"
          type="text"
          placeholder="Search for anything..."
        />
      </div>
    </div>
  );
}

export default SearchBar;
