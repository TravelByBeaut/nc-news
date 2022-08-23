import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <section>
      <button className="navbar-button">ARTICLES</button>
      <Link to={`/topics`}>
        <button className="navbar-button">TOPICS</button>
      </Link>
      <button className="navbar-button">USER</button>
    </section>
  );
}
