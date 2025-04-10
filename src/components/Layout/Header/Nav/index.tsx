import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="flex gap-[2rem]">
      <Link to="">Home Page</Link>
      <Link to="/login">Login Page</Link>
      <Link to="/download">Download Page</Link>
    </nav>
  );
}

export default Nav;
