import { Carousel } from "react-responsive-carousel";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowUp, ChevronLeft, ChevronRight } from "lucide-react";
import { perfumes } from "../data/Product";
import { useCart } from "../../contexts/CartContext";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductPage = () => {
  const { id } = useParams<{ id?: string }>();
  const [selectedPerfume, setSelectedPerfume] = useState<any>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (id) {
      const perfume = perfumes.find((p) => p.id === id);
      setSelectedPerfume(perfume || perfumes[0]);
    } else {
      setSelectedPerfume(null);
    }

    const handleScroll = () => setShowScroll(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [id]);

  const handleProductClick = (id: string) => {
    setSelectedPerfume(perfumes.find((p) => p.id === id) || perfumes[0]);
    setShowDetails(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAddToCart = (perfume: any) => {
    addItem({
      id: perfume.id,
      name: perfume.name,
      price: perfume.price,
      imageUrl: perfume.imageUrl,
    });
  };

  // Página de todos os produtos
  if (!selectedPerfume && !id) {
    return (
      <div className="relative">
        <section className="py-16 px-4 max-w-7xl mx-auto text-blue-900 pt-24">
          <h1 className="text-3xl font-bold text-blue-600 mb-8 text-center">Todos os Produtos</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perfumes.map((p) => (
              <div
                key={p.id}
                className="bg-white p-4 rounded-lg shadow-lg border-2 border-blue-400 flex flex-col items-center text-center"
              >
                <Link to={`/product/${p.id}`} className="block w-full">
                  <img
                    src={p.imageUrl}
                    alt={p.name}
                    className="w-full h-48 object-contain rounded-md mx-auto"
                  />
                  <h3 className="text-lg font-medium text-blue-700 mt-2">{p.name}</h3>
                  <p className="font-bold text-yellow-600">R$ {p.price.toFixed(2)}</p>
                </Link>
                <button
                  onClick={() => handleAddToCart(p)}
                  className="mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition"
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            ))}
          </div>
        </section>

        {showScroll && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-5 right-5 z-50 bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-full shadow-lg transition duration-300"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={22} />
          </button>
        )}
      </div>
    );
  }

  // Página de detalhes do produto
  if (!selectedPerfume) return <div>Carregando...</div>;

  return (
    <div className="relative">
      <section className="py-16 px-4 max-w-7xl mx-auto text-blue-900 pt-24">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src={selectedPerfume.imageUrl}
              alt={selectedPerfume.name}
              className="w-full max-w-[16rem] sm:max-w-xs md:max-w-sm h-auto object-contain rounded-lg shadow-lg border-4 border-blue-500 mx-auto"
            />
          </div>
          <div className="w-full md:w-2/3 space-y-4">
            <h1 className="text-3xl font-bold text-blue-600">{selectedPerfume.name}</h1>
            <p className="text-blue-800">{selectedPerfume.description}</p>
            <p className="text-xl font-bold text-yellow-600">
              R$ {selectedPerfume.price.toFixed(2)}
            </p>
            <button
              onClick={() => handleAddToCart(selectedPerfume)}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition"
            >
              Adicionar ao Carrinho
            </button>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="px-6 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold rounded-full transition"
            >
              {showDetails ? "Ocultar Detalhes" : "Exibir Sobre"}
            </button>
            {showDetails && (
              <div className="mt-4 bg-blue-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <h2 className="text-lg font-semibold text-blue-700">Notas Olfativas:</h2>
                <ul className="list-disc pl-6 text-blue-800">
                  {selectedPerfume.notes.map((note: string, i: number) => (
                    <li key={i}>{note}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Carrossel com setas personalizadas */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Produtos Relacionados</h2>
          <Carousel
            showArrows
            showThumbs={false}
            infiniteLoop
            centerMode
            centerSlidePercentage={33.33}
            emulateTouch
            showStatus={false}
            showIndicators={false}
            dynamicHeight={false}
            className="carousel-custom mx-auto"
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg z-10"
                  aria-label={label}
                >
                  <ChevronLeft size={20} />
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg z-10"
                  aria-label={label}
                >
                  <ChevronRight size={20} />
                </button>
              )
            }
          >
            {perfumes
              .filter((p) => p.id !== id)
              .slice(0, 6)
              .map((p) => (
                <div
                  key={p.id}
                  className="cursor-pointer p-2"
                  onClick={() => handleProductClick(p.id)}
                >
                  <img
                    src={p.imageUrl}
                    alt={p.name}
                    className="w-full h-32 object-contain rounded-md shadow-md border-2 border-blue-400 mx-auto"
                  />
                  <p className="mt-2 text-center font-medium text-blue-700">{p.name}</p>
                  <p className="text-center font-bold text-yellow-600">
                    R$ {p.price.toFixed(2)}
                  </p>
                </div>
              ))}
          </Carousel>
        </div>
      </section>

      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-50 bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-full shadow-lg transition duration-300"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={22} />
        </button>
      )}
    </div>
  );
};

export default ProductPage;
