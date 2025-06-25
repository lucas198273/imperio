import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useCart } from "../../../contexts/CartContext";
import { toast } from "react-toastify";
import { perfumes } from "../../data/Product";
import type { Perfume } from "../../types/Perfume";

const ProductCatalog: React.FC = () => {
  const { addItem} = useCart();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
const handleWhatsApp = (perfume: Perfume) => {
  const precoFormatado = perfume.price.toFixed(2).replace(".", ",");
  const mensagem = encodeURIComponent(
    `Olá! 👋 Estou interessado(a) no perfume "${perfume.name}" que vi no site por R$${precoFormatado}.\n\nPoderia me passar mais detalhes sobre as formas de pagamento e entrega?\n\nObrigado(a)!`
  );

  const whatsappLink = `https://wa.me/553198749678?text=${mensagem}`;
  window.open(whatsappLink, "_blank");

  toast.info(`Abrindo WhatsApp com mensagem sobre "${perfume.name}"`, {
    position: "top-right",
    autoClose: 3000,
    className: "bg-blue-600 text-white p-4 rounded-md shadow-md text-sm font-medium",
  });
};


  const handleAddToCart = (perfume: Perfume) => {
    if (perfume.available) {
      addItem({
        id: perfume.id,
        name: perfume.name,
        price: perfume.price,
        imageUrl: perfume.imageUrl,
      });
      toast.success(`${perfume.name} adicionado ao carrinho!`);
    } else {
      toast.error("Este perfume não está disponível no estoque!");
    }
  };

  return (
    <section className="py-16 px-4 bg-white text-blue-900" data-aos="fade-in">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Catálogo de Perfumes
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {perfumes.map((perfume, index) => (
            <div
              key={perfume.id}
              className="group bg-white/95 rounded-2xl overflow-hidden shadow-lg flex flex-col relative border-2 border-blue-900 h-[350px] sm:h-[400px] md:h-[420px]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={perfume.imageUrl}
                  alt={perfume.name}
                  className="w-full h-full object-contain"
                />
                <span
                  className={`absolute top-2 right-2 px-2 py-1 text-xs font-semibold rounded-full ${
                    perfume.available ? "bg-green-600" : "bg-gray-400"
                  } text-white`}
                >
                  {perfume.available ? "Disponível" : "Indisponível"}
                </span>
              </div>

              <div className="p-3 text-center flex flex-col flex-grow">
                <h3 className="text-sm font-semibold mb-1 truncate">
                  {perfume.name}
                </h3>
                <p className="text-sm font-bold mb-2">
                  R$ {perfume.price.toFixed(2)}
                </p>

                <div className="flex flex-col gap-1 mt-auto">
                  <Link to={`/product/${perfume.id}`}>
                    <button
                      className="w-full px-3 py-1.5 rounded-lg text-white font-semibold bg-blue-700 hover:bg-blue-800"
                    >
                      Ver Mais
                    </button>
                  </Link>

                  <button
                    onClick={() => handleAddToCart(perfume)}
                    className="w-full px-3 py-1.5 rounded-lg text-white font-semibold bg-blue-900 hover:bg-blue-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    disabled={!perfume.available}
                  >
                    Adicionar ao Carrinho
                  </button>

                  <button
                    onClick={() => handleWhatsApp(perfume)}
                    className={`w-full px-3 py-1.5 rounded-lg font-semibold ${
                      perfume.available
                        ? "bg-green-700 text-white hover:bg-green-800"
                        : "bg-green-700 text-blue-900 hover:bg-blue-300"
                    }`}
                  >
                    {perfume.available
                      ? "Pedir pelo WhatsApp"
                      : "Encomendar pelo WhatsApp"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
