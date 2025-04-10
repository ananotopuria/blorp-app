import { Link } from "react-router-dom";

type Props = {
  isOpen: boolean;
  onClick: () => void;
};

function Nav({ isOpen, onClick }: Props) {
  return (
    <nav
      className={`${
        isOpen ? "flex" : "hidden"
      } flex-col gap-4 absolute top-[4rem] left-0 w-full bg-white dark:bg-zinc-900 p-6 md:p-0 md:static md:flex md:flex-row md:gap-[2rem] md:w-auto`}
    >
      <Link to="/" onClick={onClick}>
        Home Page
      </Link>
      <Link to="/login" onClick={onClick}>
        Login Page
      </Link>
      <Link to="/download" onClick={onClick}>
        Download Page
      </Link>
    </nav>
  );
}

export default Nav;
