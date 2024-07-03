import { Outlet } from "react-router-dom";
import { mainLayout } from "./Mainpage.css";

const Mainpage = () => {
  return (
    <main className={mainLayout}>
      <Outlet />
    </main>
  );
};

export default Mainpage;
