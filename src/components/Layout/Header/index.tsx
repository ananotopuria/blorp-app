import { useState } from "react";
import { useTheme } from "../../../context/useTheme";
import Logo from "./../../../assets/IMG_2379.png";
import Nav from "./Nav";

function Header() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => setMenuOpen((prev) => !prev);
  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <header className="relative flex justify-between items-center px-4 py-3 bg-white dark:bg-blackish text-grey dark:text-lavender shadow-md">
      <div className="flex items-center gap-2 px-[2rem]">
        <img src={Logo} alt="blorp logo" className="w-[6rem] h-[6rem]" />
        <p className="text-[3rem] text-blueViolet dark:text-brightLavender">
          Blorp
        </p>
      </div>
      <div className="hidden md:flex">
        <Nav isOpen={true} onClick={handleCloseMenu} />
      </div>
      <button onClick={toggleTheme} className="text-[3rem] px-[2rem]">
        {theme === "dark" ? "☀️" : "🌙"}
      </button>

      <div className="flex gap-2 items-center md:hidden">
        <button onClick={handleToggleMenu} className="text-2xl">
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>
      <div className="md:hidden">
        <Nav isOpen={menuOpen} onClick={handleCloseMenu} />
      </div>
    </header>
  );
}

export default Header;
