import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useCart } from "../../../contexts/CartContext";
import { toast } from "react-toastify";

interface Perfume {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  notes: string[];
  inStock: boolean;
}

export default function PerfumeCarrousel() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: false,
    dragFree: false,
    slidesToScroll: 1,
  });

  const [selectedPerfume, setSelectedPerfume] = useState<Perfume | null>(null);
  const { addItem } = useCart();

  const perfumes: Perfume[] = [
    {
      id: "p1",
      name: "Flor de Lis",
      price: 199.9,
      imageUrl: "/assets/masculinos/070-1.webp",
      description:
        "A delicate floral fragrance inspired by the elegance of the iris flower, evoking sophistication and grace.",
      notes: ["Iris", "Jasmine", "Vanilla", "Sandalwood"],
      inStock: true,
    },
    {
      id: "p2",
      name: "Noite de Verão",
      price: 249.5,
      imageUrl: "/assets/masculinos/087-2.webp",
      description:
        "A vibrant and warm scent capturing the essence of a summer night, with citrus and woody undertones.",
      notes: ["Bergamot", "Cedarwood", "Amber", "Musk"],
      inStock: true,
    },
    {
      id: "p3",
      name: "Étoile d’Or",
      price: 299.0,
      imageUrl: "/assets/masculinos/136-1.webp",
      description:
        "A luxurious fragrance with sparkling top notes and a rich, golden heart, perfect for evening wear.",
      notes: ["Champagne", "Rose", "Oud", "Patchouli"],
      inStock: false,
    },
    {
      id: "p4",
      name: "Étoile d’Or",
      price: 299.0,
      imageUrl: "/assets/masculinos/387-1.webp",
      description:
        "A luxurious fragrance with sparkling top notes and a rich, golden heart, perfect for evening wear.",
      notes: ["Champagne", "Rose", "Oud", "Patchouli"],
      inStock: false,
    },
  ];

  const phoneNumber = "5531999999999";
  const handleWhatsApp = (perfume: Perfume) => {
    const mensagem = encodeURIComponent(
      `Olá! Tenho interesse no perfume "${perfume.name}" por R$${perfume.price.toFixed(2)}.`
    );
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${mensagem}`;
    window.open(whatsappLink, "_blank");
    toast.info(`Mensagem enviada para o WhatsApp sobre ${perfume.name}!`, {
      position: "top-right",
      autoClose: 3000,
      className: "bg-blue-600 text-white p-4 rounded-lg shadow-lg text-sm font-medium",
    });
    return whatsappLink;
  };

  const handleAddToCart = (perfume: Perfume) => {
    if (perfume.inStock) {
      addItem({
        id: perfume.id,
        name: perfume.name,
        price: perfume.price,
        imageUrl: perfume.imageUrl,
      });
      toast.success(`${perfume.name} adicionado ao carrinho!`, {
        position: "top-right",
        autoClose: 3000,
        className: "bg-green-600 text-white p-4 rounded-lg shadow-lg text-sm font-medium",
      });
    } else {
      toast.error("Este perfume não está disponível no estoque!", {
        position: "top-right",
        autoClose: 3000,
        className: "bg-red-500 text-white p-4 rounded-lg shadow-lg text-sm font-medium",
      });
    }
  };

  return (
    <section
      className="relative bg-gradient-to-r from-blue-950 to-white py-16 px-4 sm:px-6 lg:px-12 overflow-hidden"
      data-aos="fade-in"
      style={{
        backgroundImage: "url(/assets/texture.jpg)",
        backgroundSize: "cover",
        WebkitOverflowScrolling: "touch",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl sm:text-5xl font-extrabold text-blue-900 drop-shadow-lg mb-12 text-center tracking-tight"
          data-aos="fade-up"
        >
          Perfumes em Destaque
        </h2>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6 sm:gap-8 px-1 sm:px-0 ml-2 sm:ml-0">
              {perfumes.map((perfume, index) => (
                <div
                  key={perfume.id}
                  className="flex-none w-[85%] sm:w-[45%] md:w-[30%] lg:w-[23%] min-w-[250px] mx-auto transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <div className="group bg-white/95 rounded-3xl overflow-hidden shadow-lg h-[350px] sm:h-[400px] md:h-[450px] flex flex-col hover:shadow-xl border border-blue-300">
                    <div className="relative h-44 sm:h-52 md:h-60 overflow-hidden">
                      <img
                        src={perfume.imageUrl}
                        alt={perfume.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="flex-1 p-3 sm:p-4 flex flex-col justify-between text-center">
                      <div>
                        <p className="font-semibold text-sm sm:text-base text-blue-900">
                          {perfume.name}
                        </p>
                        <p className="font-bold text-xs sm:text-sm text-blue-600">
                          R$ {perfume.price.toFixed(2)}
                        </p>
                        <p
                          className={`mt-1 text-xs sm:text-sm ${
                            perfume.inStock ? "text-green-600" : "text-red-500"
                          }`}
                        >
                          {perfume.inStock ? "Disponível em estoque" : "Não disponível"}
                        </p>
                      </div>
                      <div className="mt-2 flex flex-col gap-2">
                        <button
                          onClick={() => setSelectedPerfume(perfume)}
                          className="w-full px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors bg-blue-300 text-blue-900 hover:bg-blue-200"
                        >
                          Ver Mais
                        </button>
                        <button
                          onClick={() => handleAddToCart(perfume)}
                          className="w-full px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg text-center bg-blue-700 text-white hover:bg-blue-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
                          disabled={!perfume.inStock}
                        >
                          Adicionar ao Carrinho
                        </button>
                        {perfume.inStock ? (
                          <button
                            onClick={() => handleWhatsApp(perfume)}
                            className="w-full px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg text-center bg-green-700 text-white hover:bg-green-800"
                          >
                            Comprar via WhatsApp
                          </button>
                        ) : (
                          <button
                            onClick={() => handleWhatsApp(perfume)}
                            className="w-full px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg text-center bg-green-700 text-blue-900 hover:bg-blue-300"
                          >
                            Encomendar via WhatsApp
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 p-3 rounded-full shadow-lg z-10 bg-blue-900 text-white hover:bg-blue-800"
            aria-label="Slide anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 p-3 rounded-full shadow-lg z-10 bg-blue-900 text-white hover:bg-blue-800"
            aria-label="Próximo slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {selectedPerfume && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4"
          role="dialog"
        >
          <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg max-h-[85vh] overflow-y-auto bg-white rounded-xl border-2 border-blue-400 shadow-xl">
            <button
              onClick={() => setSelectedPerfume(null)}
              className="absolute top-2 right-2 text-blue-900 hover:text-red-500"
              aria-label="Fechar modal"
            >
              <X size={20} />
            </button>
            <div className="p-4 sm:p-5 md:p-6 text-blue-900">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                {selectedPerfume.name}
              </h3>
              <img
                src={selectedPerfume.imageUrl}
                alt={selectedPerfume.name}
                className="w-full h-48 sm:h-56 md:h-64 object-contain rounded-lg mb-2 border border-blue-300"
              />
              <p className="text-xs sm:text-sm mb-2">{selectedPerfume.description}</p>
              <div className="mb-2">
                <h4 className="font-semibold text-xs sm:text-sm md:text-base mb-1">
                  Notas Olfativas:
                </h4>
                <ul className="list-disc list-inside text-xs sm:text-sm">
                  {selectedPerfume.notes.map((note, idx) => (
                    <li key={idx}>{note}</li>
                  ))}
                </ul>
              </div>
              <p className="font-bold text-base sm:text-lg text-blue-600 mb-1">
                R$ {selectedPerfume.price.toFixed(2)}
              </p>
              <p
                className={`text-xs sm:text-sm mb-2 ${
                  selectedPerfume.inStock ? "text-green-600" : "text-red-500"
                }`}
              >
                {selectedPerfume.inStock
                  ? "Disponível em estoque"
                  : "Não disponível"}
              </p>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleAddToCart(selectedPerfume)}
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg text-center bg-blue-700 text-white hover:bg-blue-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  disabled={!selectedPerfume.inStock}
                >
                  Adicionar ao Carrinho
                </button>
                {selectedPerfume.inStock ? (
                  <button
                    onClick={() => handleWhatsApp(selectedPerfume)}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg text-center bg-green-700 text-white hover:bg-green-800"
                  >
                    Comprar via WhatsApp
                  </button>
                ) : (
                  <button
                    onClick={() => handleWhatsApp(selectedPerfume)}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg text-center bg-green-700 text-blue-900 hover:bg-blue-300"
                  >
                    Encomendar via WhatsApp
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
