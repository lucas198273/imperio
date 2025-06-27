import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  onCartClick: () => void;
  cartItemCount: number;
}

export default function Header({ onCartClick, cartItemCount }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Fechar menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#104E8B] shadow-lg h-20">
      <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between relative">
        {/* Esquerda: Menu Desktop e Mobile */}
        <div className="flex items-center space-x-4" ref={menuRef}>
          {/* Botão Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white focus:outline-none p-1 hover:bg-[#104E8B]/20 rounded"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-6 font-semibold text-white text-sm">
            <Link to="/" className="hover:text-[#104E8B] transition-colors duration-200">Início</Link>
            <Link to="/about" className="hover:text-[#104E8B] transition-colors duration-200">Sobre</Link>
            <Link to="/products" className="hover:text-[#104E8B] transition-colors duration-200">Todos os Produtos</Link>
          </nav>
        </div>

        {/* Centro: Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link to="/">
            <img
              src="/assets/logo.jpeg"
              alt="Império dos Aromas"
              className="h-16 sm:h-16 object-contain rounded-md"
              loading="eager"
            />
          </Link>
        </div>

        {/* Direita: Carrinho */}
        <div className="flex items-center space-x-2">
          <h2 className="text-white text-sm">carrinho</h2>
          <button
            onClick={onCartClick}
            className="text-white relative hover:text-[#104E8B] transition-colors duration-200"
            aria-label="Abrir carrinho"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 6h16l-2 10H6L4 6zm4 12h8v2H8v-2zm-4-2h16v2H4v-2zm0-8v2h16V8H4z" />
            </svg>
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>

        {/* Menu Mobile Aberto */}
        {menuOpen && (
          <nav
            id="mobile-menu"
            className="absolute top-full left-0 w-full bg-[#1C2527] shadow-lg z-40 px-6 py-4 flex flex-col space-y-4 md:hidden transition-opacity duration-300 ease-in-out"
          >
            <Link to="/" onClick={() => setMenuOpen(false)} className="text-white hover:text-[#104E8B] transition-colors duration-200">
              Início
            </Link>
            <Link to="/about" onClick={() => setMenuOpen(false)} className="text-white hover:text-[#104E8B] transition-colors duration-200">
              Sobre
            </Link>
            <Link to="/products" onClick={() => setMenuOpen(false)} className="text-white hover:text-[#104E8B] transition-colors duration-200">
              Todos os Produtos
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}