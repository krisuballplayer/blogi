import { Link } from "react-router-dom";

const Nav = ({ search, setSearch }) => {
  return (
    <nav className="Nav">
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Etsi postauksia</label>
        <input
          id="search"
          type="text"
          placeholder="Etsi postauksia"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul>
        <li>
          <Link to="/">Koti</Link>
        </li>
        <li>
          <Link to="/post">Postaa</Link>
        </li>
        <li>
          <Link to="/about">Minusta</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
