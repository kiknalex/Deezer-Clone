import { useCallback, useState } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import Header from "@/components/header/Header";
import Mainpage from "@/components/main-page/Mainpage";
import { useBeforeUnload } from "react-router-dom";
import { app } from "./App.css";
import { darkTheme, lightTheme, loggedIn } from "./theme.css";
const App = () => {
  const [darkMode, setDarkMode] = useState<boolean>(
    () => localStorage.getItem("darkmode") === "true"
  );
  useBeforeUnload(
    useCallback(() => {
      localStorage.setItem("darkmode", JSON.stringify(darkMode));
    }, [darkMode])
  );

  const handleDarkModeClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${app} ${darkMode ? darkTheme : lightTheme} ${loggedIn}`}>
      <Header onClick={handleDarkModeClick} darkMode={darkMode} />
      <Mainpage />
      <Sidebar />
    </div>
  );
};

export default App;
