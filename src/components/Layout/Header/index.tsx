import { useTheme } from "../../../context/useTheme";
import Logo from "./../../../assets/IMG_2379.png";
import Nav from "./Nav";


function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="flex justify-between">
      <div className="flex justify-center items-center">
        <img src={Logo} alt="blorp logo" />
        <p>Blorp</p>
      </div>
      <Nav />
      <button
        onClick={toggleTheme}
        className="px-3 py-1 text-sm rounded bg-gray-200 dark:bg-zinc-800 text-black dark:text-white"
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
    </header>
  );
}

export default Header;
