import { sprinkles } from "@/styles/sprinkles.css";
import { buttonClear, buttonClearShow, buttonSearch, searchInput, searchWrapper } from "./Search.css";
import { useState } from "react";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [isHovered, setIsHovered] = useState(false)
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
        <button
          className={`${sprinkles({
            position: "absolute",
            left: "0",
            marginLeft: "size-7",
          })} ${buttonSearch}`}
          aria-label="Search button"
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <input
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        
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
          })} ${buttonClear} ${isHovered && inputValue.length > 0 && buttonClearShow}`} aria-label="Clear"><span className={sprinkles({fontSize: "font-size-6"})}><i className="fa-solid fa-xmark"></i></span></button>
      </div>
    </search>
  );
};

export default Search;
