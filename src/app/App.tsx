import { useState } from "react";
import { app } from "./App.css";
import { darkTheme, lightTheme, loggedIn } from "./theme.css";
import Sidebar from "@/components/sidebar/Sidebar";
import Header from "@/components/header/Header";
import Mainpage from "@/components/main-page/Mainpage";
const App = () => {
  const [darkMode, setDarkMode] = useState(false);

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
