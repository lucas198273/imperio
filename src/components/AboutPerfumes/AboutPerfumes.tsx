
import { Link } from "react-router-dom";

export default function AboutPerfumes() {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Conteúdo de texto e botão */}
        <div className="w-full text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Coleção de Marca: A Essência da Realeza
          </h2>
          <p className="text-lg md:text-xl text-gray-800 mb-8 max-w-2xl mx-auto leading-relaxed">
            No Império dos Aromas, trabalhamos exclusivamente com nossa Brand Collection, uma linha premium de perfumes que redefine a arte da fragrância. Cada essência é cuidadosamente elaborada com ingredientes selecionados, oferecendo sofisticação e exclusividade. Alertamos que nossos aromas são únicos, criados para elevar sua experiência olfativa a um patamar de realeza atemporal.
          </p>
          <Link
            to="/products"
            className="inline-block bg-[#d4af37] text-white font-semibold text-xl py-4 px-12 rounded-full shadow-md hover:bg-[#c8a44c] hover:shadow-lg transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#4cb1c8] focus:ring-offset-2 focus:ring-offset-gray-100"
            aria-label="Explore todos os perfumes da Brand Collection"
          >
            Ver Todos os Produtos
          </Link>
        </div>

        {/* Imagem do frasco abaixo no mobile */}
        <div className="w-full flex justify-center mt-8 md:mt-0">
          <img
            src="/assets/fly2.png"
            alt="Frasco de perfume da Brand Collection"
            className="w-[150%] md:w-[28rem] drop-shadow-lg transition-transform hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
