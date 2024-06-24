import { sprinkles } from "@/styles/sprinkles.css";
import { headerStyle } from "./Header.css";
import Search from "./search/Search";
import Logo from "./logo/Logo";
import UserMenu from "./user-menu/UserMenu";

const Header = ({ handleDarkModeClick }) => {
  return (
    <header className={`${sprinkles({ display: "flex", alignItems: "center", padding: "size-6" })} ${headerStyle}`}>
      <Logo />
      <Search />
      <button onClick={handleDarkModeClick} className={sprinkles({marginRight: "size-3"})}>dark mode</button>
      <UserMenu />
    </header>
  );
};

export default Header;
