import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDebounce } from "@/hooks/useDebounce";
import { sprinkles } from "@/styles/sprinkles.css";
import {
  buttonClear,
  buttonClearShow,
  buttonSearch,
  searchInput,
  searchWrapper,
} from "./Search.css";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!pathname.includes("/search")) {
      setInputValue("");
    }
  }, [pathname]);

  const debouncedNavigate = useDebounce((value) => {
    navigate("/search/" + value);
  }, 500);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    console.log(inputValue);
    if(e.target.value !== "") debouncedNavigate(e.target.value);
  };
  return (
    <search className={sprinkles({ marginRight: "size-auto", height: "100" })}>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`${sprinkles({
          borderRadius: "9px",
          display: "flex",
          alignItems: "center",
          height: "100",
        })} ${searchWrapper}`}
      >
        <span
          className={`${sprinkles({
            position: "absolute",
            left: "0",
            marginLeft: "size-7",
          })} ${buttonSearch}`}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
        <input
          value={inputValue}
          onChange={handleInputChange}
          className={`${sprinkles({
            width: "100",
            height: "100",
          })} ${searchInput}`}
          type="search"
          aria-label="Search"
          placeholder="Artists, tracks, podcasts..."
        />
        <button
          onClick={() => setInputValue("")}
          className={`${sprinkles({
            position: "absolute",
            right: "0",
            paddingX: "size-5",
            height: "100",
          })} ${buttonClear} ${
            isHovered && inputValue.length > 0 && buttonClearShow
          }`}
          aria-label="Clear"
        >
          <span className={sprinkles({ fontSize: "font-size-6" })}>
            <i className="fa-solid fa-xmark"></i>
          </span>
        </button>
      </div>
    </search>
  );
};

export default Search;
