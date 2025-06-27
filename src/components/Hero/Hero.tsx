export default function Hero() {


  return (
    <section className="relative text-[#b3932a] py-20 px-6 md:px-12 overflow-hidden min-h-[60vh]">
      {/* Fundo com imagem de mar */}
      <div
        className="absolute inset-0 bg-[url('/public/baner.jpg')] bg-cover bg-center z-0"
        style={{
          opacity: 0.9,
          filter: "brightness(0.95)",
        }}
      />
      {/* Película com degradê azul para transparente */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#1C2527] to-[] z-1"
        style={{}}
      />
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
          
        </div>

        {/* Imagens */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          <div className="flex items-center justify-center gap-4 md:gap-6 z-10 relative">
            <img
              src="/assets/masculinos/205-2-bgt.png"
              alt="Frasco de perfume 2"
              className="w-50 md:w-55 drop-shadow-[0_0_15px_rgba(16,78,139,0.7)] transition-transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}