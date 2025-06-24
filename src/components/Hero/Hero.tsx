export default function Hero() {
  const handleSubmit = () => {
    const message = `Olá! Gostaria de fazer um pedido de perfume.`;
    const whatsappLink = `https://wa.me/553198749678?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <section className="relative bg-[#0a0a1a] text-[#d4af37] py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
        {/* Texto */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#d4af37]">
            Bem-vindo ao <br />
            <span className="text-[#c8a44c]">Império Dos Aromas</span>
          </h1>
          <p className="text-lg text-[#f2e6c9] mb-6 max-w-md">
            Perfumes com essência de realeza. Encontre o aroma perfeito que combina com sua alma.
          </p>
          <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
            <button
              type="submit"
              className="inline-block px-6 py-3 rounded-full bg-[#d4af37] hover:bg-[#c8a44c] transition text-[#0a0a1a] font-semibold"
            >
              Faça seu Pedido
            </button>
          </form>
        </div>

        {/* Imagens */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          {/* Fundo azul suave centralizado */}
          <div className="absolute w-80 h-80 bg-[#00ced1]/20 blur-2xl rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>

          {/* Imagens dos perfumes */}
          <div className="flex items-center justify-center gap-4 md:gap-6 z-10 relative">
            <img
              src="/assets/masculinos/070-bgt.png"
              alt="Frasco de perfume 1"
              className="w-40 md:w-48 drop-shadow-[0_0_15px_rgba(0,206,209,0.7)] transition-transform hover:scale-105"
            />
            <img
              src="/assets/masculinos/205-2-bgt.png"
              alt="Frasco de perfume 2"
              className="w-40 md:w-48 drop-shadow-[0_0_15px_rgba(0,206,209,0.7)] transition-transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}