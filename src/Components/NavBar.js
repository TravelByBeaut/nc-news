import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <section className="navbar-section">
      <Link to={"/articles"}>
        <button className="navbar-button">ARTICLES</button>
      </Link>
      <Link to={"/topics"}>
        <button className="navbar-button">TOPICS</button>
      </Link>
      <button className="navbar-button">USER</button>
    </section>
  );
}
