import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logoench.png";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { to: "/", label: "Início" },
    { to: "/solucao", label: "Solução" },
    { to: "/sobre", label: "Sobre" },
    { to: "/contato", label: "Contato" },
    { to: "/login", label: "Login" },
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo Alerta Rápido" className="h-25" />
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="hover:text-blue-600 transition duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Botão mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 hover:text-blue-600"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <nav className="md:hidden px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Nav;
