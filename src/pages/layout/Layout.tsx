import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
import { GlobalContextProvider } from "../../contexts/GlobalContext";

const Layout = () => {
  return (
    <GlobalContextProvider>
      <div className="layout">
        <nav className="layout-navbar">
          <ul>
            <li>
              <Link to="/generation">Generate</Link>
            </li>
            <li>
              <Link to="/favourites">Favourites</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </GlobalContextProvider>
  );
};

export default Layout;
