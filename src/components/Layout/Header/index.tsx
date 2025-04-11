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
    <header className="relative flex justify-between items-center px-4 py-3 bg-white dark:bg-zinc-900 text-black dark:text-white shadow-md">
      <div className="flex items-center gap-2">
        <img src={Logo} alt="blorp logo" className="w-10 h-10" />
        <p className="text-[2rem] font-fixedsys">Blorp</p>
      </div>
      <div className="hidden md:flex">
        <Nav isOpen={true} onClick={handleCloseMenu} />
      </div>
      <button onClick={toggleTheme} className="text-xl">
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
