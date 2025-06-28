import { useState } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  onCartClick: () => void;
  cartItemCount: number;
}

export default function Header({ onCartClick, cartItemCount }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-blue-900 shadow-lg h-20">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
        {/* Botão do menu mobile */}
        <div className="flex items-center z-10">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl text-white focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md p-2 mr-4"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          {/* Menu desktop */}
          <nav className="hidden md:flex space-x-8 font-semibold text-white text-base items-center">
            <Link to="/" className="hover:text-blue-300 transition-colors duration-200">Início</Link>
            <Link to="/about" className="hover:text-blue-300 transition-colors duration-200">Sobre</Link>
            <Link
              to="/products"
              className="hover:text-blue-300 transition-colors duration-200"
            >
              Todos os Produtos
            </Link>
          </nav>
        </div>

        {/* Logo central */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex-shrink-0">
          <Link to="/" className="flex items-center">
            <img
              src="/assets/logo.jpeg"
              alt="Império dos Aromas"
              className="h-28 w-auto object-contain"
              loading="eager"
            />
          </Link>
        </div>

        {/* Carrinho */}
        <div className="flex items-center z-10">
          <button
            onClick={onCartClick}
            className="relative focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md p-2"
            aria-label={`Abrir carrinho com ${cartItemCount} itens`}
          >
            <svg
              className="w-6 h-6 text-white hover:text-blue-300 transition-colors duration-200"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16l-2 10H6L4 6zm4 12h8v2H8v-2zm-4-2h16v2H4v-2zm0-8v2h16V8H4z" />
            </svg>
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center -mt-1 -mr-1">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>

        {/* Menu mobile */}
        <nav
          className={`md:hidden fixed top-20 left-0 w-full bg-blue-600 shadow-md z-40 px-6 py-4 space-y-4 transition-all duration-300 ease-in-out ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block text-white hover:text-blue-300 transition-colors duration-200"
          >
            Início
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="block text-white hover:text-blue-300 transition-colors duration-200"
          >
            Sobre
          </Link>
          <Link
            to="/products"
            onClick={() => setMenuOpen(false)}
            className="block text-white hover:text-blue-300 transition-colors duration-200"
          >
            Produtos
          </Link>
        </nav>
      </div>
    </header>
  );
}