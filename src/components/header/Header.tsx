import { sprinkles } from "@/styles/sprinkles.css";
import { headerStyle } from "./Header.css";
import Search from "./search/Search";
import Logo from "./logo/Logo";

const Header = ({ handleDarkModeClick }) => {
  return (
    <header className={`${sprinkles({ display: "flex", alignItems: "center", padding: "size-6" })} ${headerStyle}`}>
      <Logo />
      <Search />
      <button onClick={handleDarkModeClick}>dark mode</button>
    </header>
  );
};

export default Header;
