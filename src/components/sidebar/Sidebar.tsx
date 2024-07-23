import { Link, NavLink } from "react-router-dom";
import {
  deezerHeartLogo,
  deezerTextLogo,
  link,
  navLink,
  navLogoSpan,
  sidebar,
} from "./Sidebar.css";
import { smallScreenHide } from "@/app/App.css";
import { vars } from "@/app/theme.css";
import { sprinkles } from "@/styles/sprinkles.css";
import SubscribeCard from "./SubscribeCard/SubscribeCard";

const Sidebar = () => {
  return (
    <aside className={`${sidebar}`}>
      <div
        className={sprinkles({
          display: "flex",
          flexDirection: "column",
          paddingTop: "size-8",
          paddingBottom: "size-5",
        })}
      >
        <Link to="/" className={`${link} ${sprinkles({ paddingX: "size-4" })}`} aria-label="Home">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="127"
              height="20"
              fill="none"
              className={deezerTextLogo}
            >
              <path
                fill={vars.colorsVars.textPrimary}
                fillRule="evenodd"
                d="M0 0h10.065c6.232 0 10.639 4.13 10.639 10s-4.407 10-10.639 10H0V0Zm7.823 14.597h1.825c1.956 0 2.999-1.298 2.999-4.597 0-3.299-1.043-4.597-3-4.597H7.824v9.194ZM40.153 20H23.62V0h16.532v5.403h-8.735v2.311h8.213v4.416h-8.213v2.467h8.735V20Zm20.31 0H43.93V0h16.532v5.403h-8.736v2.311h8.214v4.416h-8.214v2.467h8.736V20Zm66.159 0c-1.126-3.058-2.702-6.321-4.821-9.979 2.479-.724 3.961-2.28 3.961-4.67 0-3.637-3.364-5.351-8.683-5.351h-10.952v20h7.823v-8.273c1.738 2.916 3.018 5.667 3.859 8.273h8.813ZM113.95 8.935V5.403h2.712c1.147 0 1.799.623 1.799 1.766s-.652 1.766-1.799 1.766h-2.712ZM102.328 20H85.797V0h16.531v5.403h-8.735v2.311h8.214v4.416h-8.214v2.467h8.735V20ZM64.397 5.403h8.071c-3.349 2.729-6.105 5.82-8.228 9.194V20h17.758v-5.403h-8.876c2.034-2.947 4.876-5.882 8.876-9.194V0H64.397v5.403Z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              viewBox="0 0 279 279"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Deezer logo"
              className={deezerHeartLogo}
            >
              <path
                fill={vars.colorsVars.buttonImportant}
                clipRule="evenodd"
                d="M232.97 42.874c2.569-14.89 6.339-24.254 10.515-24.271h.008c7.787.026 14.099 32.498 14.099 72.59 0 40.091-6.321 72.589-14.116 72.589-3.196 0-6.145-5.518-8.519-14.765-3.752 33.85-11.538 57.119-20.552 57.119-6.974 0-13.233-13.978-17.435-36.022-2.869 41.924-10.09 71.669-18.53 71.669-5.297 0-10.126-11.787-13.701-30.979-4.299 39.617-14.231 67.376-25.813 67.376-11.582 0-21.532-27.75-25.813-67.376-3.549 19.192-8.378 30.979-13.701 30.979-8.44 0-15.643-29.745-18.53-71.669-4.202 22.044-10.444 36.022-17.436 36.022-9.004 0-16.8-23.261-20.551-57.119-2.357 9.274-5.323 14.765-8.519 14.765-7.795 0-14.116-32.498-14.116-72.59 0-40.09 6.32-72.59 14.116-72.59 4.184 0 7.928 9.39 10.523 24.272C49.057 17.198 55.81.51 63.446.51c9.067 0 16.924 23.6 20.64 57.87 3.638-24.942 9.155-40.843 15.335-40.843 8.66 0 16.022 31.274 18.75 74.897 5.129-22.366 12.554-36.397 20.773-36.397 8.218 0 15.643 14.04 20.763 36.398 2.737-43.624 10.09-74.898 18.751-74.898 6.17 0 11.679 15.9 15.334 40.843C197.5 24.11 205.357.51 214.423.51c7.61 0 14.389 16.697 18.547 42.363ZM.09 84.053c0-17.922 3.583-32.454 8.006-32.454s8.007 14.532 8.007 32.454c0 17.921-3.584 32.454-8.007 32.454S.09 101.974.09 84.053Zm261.653 0c0-17.922 3.584-32.454 8.007-32.454 4.422 0 8.007 14.532 8.007 32.454 0 17.921-3.585 32.454-8.007 32.454-4.423 0-8.007-14.533-8.007-32.454Z"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
        </Link>
        <nav
          className={`${sprinkles({
            display: "flex",
            flexDirection: "column",
            gap: "size-1",
            paddingX: "size-3",
            marginTop: "size-10",
          })}`}
        >
          <NavLink
            to="/"
            className={`${sprinkles({
              display: "flex",
              alignItems: "center",
              paddingX: "size-1",
              paddingY: "size-2",
            })} ${navLink}`}
            aria-label="Home"
          >
            <span className={navLogoSpan}>
              <i className="fa-solid fa-house"></i>
            </span>
            <h2
              className={`${sprinkles({
                fontSize: "font-size-5",
                paddingLeft: "size-2",
              })} ${smallScreenHide}`}
            >
              Home
            </h2>
          </NavLink>
          <NavLink
            to="/channels/explore"
            className={`${sprinkles({
              display: "flex",
              alignItems: "center",
              paddingX: "size-1",
              paddingY: "size-3",
            })} ${navLink}`}
            aria-label="Explore"
          >
            <span className={navLogoSpan}>
              <i className={`fa-solid fa-compass`}></i>
            </span>
            <h2
              className={`${sprinkles({
                fontSize: "font-size-5",
                paddingLeft: "size-2",
              })} ${smallScreenHide}`}
            >
              Explore
            </h2>
          </NavLink>
        </nav>
        <SubscribeCard href="https://github.com/kiknalex/Deezer-Clone">
          This project is intended solely for demonstrational purposes.
        </SubscribeCard>
      </div>
    </aside>
  );
};

export default Sidebar;
