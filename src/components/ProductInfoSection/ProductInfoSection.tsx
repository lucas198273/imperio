import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProductInfoSection: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="py-16 px-4 bg-white text-[#0a0a1a]"
      data-aos="fade-up"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-4xl md:text-5xl font-bold mb-8 text-[#d4af37]"
          style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.1)" }}
        >
          Sobre Nossos Produtos e Vendas
        </h2>
        <p
          className="text-lg md:text-xl mb-6 text-[#333] italic"
          style={{ lineHeight: "1.6" }}
        >
          Trabalhamos com perfumes originais e internacionais, trazendo fragrâncias exclusivas
          diretamente para você. Cada produto é autêntico, garantindo qualidade e sofisticação.
        </p>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div
            className="p-6 rounded-lg shadow-lg border"
            style={{
              backgroundColor: "#ffffff",
              borderColor: "#d4af37",
            }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-[#d4af37]">Meios de Venda</h3>
            <p className="text-base text-[#333]">
              Todas as nossas vendas são finalizadas via WhatsApp. Entre em contato para
              consultar disponibilidade e personalizar sua compra.
            </p>
            <a
              href="https://wa.me/553198749678"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-6 py-3 rounded-lg transition-colors font-semibold"
              style={{
                backgroundColor: "#d4af37",
                color: "#0a0a1a",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#c8a44c")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#d4af37")
              }
            >
              Fale Conosco
            </a>
          </div>

          <div
            className="p-6 rounded-lg shadow-lg border"
            style={{
              backgroundColor: "#ffffff",
              borderColor: "#d4af37",
            }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-[#d4af37]">Entrega</h3>
            <p className="text-base text-[#333]">
              Oferecemos entrega grátis em Betim e região em MG. Para demais locais, o frete é
              calculado no momento da compra. Consulte-nos para mais detalhes!
            </p>
          </div>
        </div>

        <p
          className="text-lg md:text-xl font-bold text-[#d4af37]"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Compromisso com a excelência em cada fragrância.
        </p>
      </div>
    </section>
  );
};

export default ProductInfoSection;
