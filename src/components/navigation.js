import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav style={{ display: "flex" }}>
      <li
        style={{
          color: "white",
          textDecoration: "none",
          listStyleType: "none",
          padding: "0 10px"
        }}
      >
        <h1 style={{ fontFamily: "cursive" }}>ClubWealth</h1>
      </li>
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        <h1 style={{ fontFamily: "cursive" }}>HomePage</h1>
      </Link>
    </nav>
  );
}

export default Navigation;
