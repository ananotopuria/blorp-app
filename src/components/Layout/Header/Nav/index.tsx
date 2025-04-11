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
      } flex-col gap-4 absolute top-[8rem] text-[2.6rem] left-0 w-full bg-white dark:bg-zinc-900 p-6 md:p-0 md:static md:flex md:flex-row md:gap-[2rem] md:w-auto`}
    >
      <Link to="/" onClick={onClick} className="hover:text-pink">
        Home
      </Link>
      <Link to="/login" onClick={onClick} className="hover:text-pink">
        Login
      </Link>
      <Link to="/download" onClick={onClick} className="hover:text-pink">
        Download
      </Link>
    </nav>
  );
}

export default Nav;
