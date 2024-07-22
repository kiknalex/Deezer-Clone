import { Outlet, ScrollRestoration } from "react-router-dom";
import { mainLayout } from "./Mainpage.css";

const Mainpage = () => {
  return (
    <main className={mainLayout}>
      <Outlet />
      <ScrollRestoration />
    </main>
  );
};

export default Mainpage;
