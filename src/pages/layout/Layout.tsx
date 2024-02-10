import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <nav>
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
  </>
  )
};

export default Layout;