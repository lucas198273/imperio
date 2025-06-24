import { useState } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  onCartClick: () => void;
  cartItemCount: number;
}

export default function Header({ onCartClick, cartItemCount }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0d1321] shadow-lg h-20">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Menu Mobile e Links (Esquerda) */}
        <div className="flex items-center">
          {/* Botão Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl text-white focus:outline-none mr-4"
            aria-label="Abrir menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-8 font-semibold text-white text-base">
            <Link to="/" className="hover:text-[#3fa9f5] transition">Início</Link>
            <Link to="/about" className="hover:text-[#3fa9f5] transition">Sobre</Link>
            <Link to="/products" onClick={() => setMenuOpen(false)} className="block text-white hover:text-[#3fa9f5] transition">Todos os Produtos</Link>

          </nav>
        </div>

        {/* Logo centralizada */}
        <div className="flex-shrink-0 mx-auto md:mx-0">
          <Link to="/">
            <img
              src="/assets/logo.jpeg"
              alt="Império dos Aromas "
              className="h-29 sm:h-25 object-contain"
              loading="eager"
            />
          </Link>
        </div>

        {/* Ícone de Carrinho (Direita) */}
        <div className="flex items-center">
          <button
            onClick={onCartClick}
            className="text-white hover:text-yellow-300 relative focus:outline-none"
            aria-label="Abrir carrinho"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 6h16l-2 10H6L4 6zm4 12h8v2H8v-2zm-4-2h16v2H4v-2zm0-8v2h16V8H4z" />
            </svg>
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center -mt-1 -mr-1">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>

        {/* Menu Mobile */}
        {menuOpen && (
          <nav className="md:hidden fixed top-20 left-0 w-full bg-[#0d1321] shadow-md z-40 px-6 py-4 space-y-4">
            <Link to="/" onClick={() => setMenuOpen(false)} className="block text-white hover:text-[#3fa9f5] transition">Início</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)} className="block text-white hover:text-[#3fa9f5] transition">Sobre</Link>
            <Link to="/products" onClick={() => setMenuOpen(false)} className="block text-white hover:text-[#3fa9f5] transition">Todos os Produtos</Link>
          </nav>
        )}
      </div>
    </header>
  );
}