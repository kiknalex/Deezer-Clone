import { sprinkles } from "@/styles/sprinkles.css";
import { darkmodeButton, headerStyle } from "./Header.css";
import Search from "./search/Search";

const Header = ({
  darkMode,
  onClick,
}: {
  darkMode: boolean;
  onClick: () => void;
}) => {
  return (
    <header
      className={`${sprinkles({
        display: "flex",
        alignItems: "center",
        padding: "size-6",
      })} ${headerStyle}`}
    >
      <Search />
      <button
        onClick={onClick}
        className={darkmodeButton}
        aria-label={`${darkMode ? "Dark" : "Light"} mode`}
      >
        {darkMode ? (
          <span>
            <i className="fa-regular fa-sun"></i>
          </span>
        ) : (
          <span>
            <i className="fa-regular fa-moon"></i>
          </span>
        )}
      </button>
    </header>
  );
};

export default Header;
