
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutLoja() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="min-h-screen pt-32 pb-16 px-4"
      style={{
        background: "linear-gradient(to bottom, #ffffff, #1e3a8a)",
        color: "#0a0a1a",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Imagem do perfume */}
        <div className="w-full lg:w-1/2 flex justify-center" data-aos="fade-right">
          <img
            src="/assets/fly.png"
            alt="Blue Dream 070"
            className="rounded-xl shadow-xl w-full max-w-sm h-auto object-contain border-4 border-blue-600"
          />
        </div>

        {/* Texto sobre o perfume */}
        <div className="w-full lg:w-1/2" data-aos="fade-left">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight" style={{ color: "#0a0a1a" }}>
            Brand Collection{" "}
            <span
              className="font-semibold"
              style={{ color: "#3b82f6" /* azul claro para destaque */ }}
            >
              Blue Dream 070
            </span>
          </h2>

          <p className="text-lg sm:text-xl mb-6" style={{ color: "#0a0a1a" }}>
            Inspirado no cobiçado Bleu de Chanel, o Blue Dream 070 é uma fragrância amadeirada aromática com rastro cativante. Notas de topo como limão, hortelã e pimenta rosa trazem frescor, enquanto gengibre e jasmim formam o coração. A base de sândalo, patchouli e cedro oferece profundidade. Ideal para o homem moderno, com frasco azul profundo.
          </p>

          <ul className="list-disc pl-6 text-lg sm:text-xl space-y-2 mb-6" style={{ color: "#0a0a1a" }}>
            <li>
              <strong style={{ color: "#3b82f6" }}>Topo:</strong> Limão, hortelã, pimenta rosa
            </li>
            <li>
              <strong style={{ color: "#3b82f6" }}>Coração:</strong> Gengibre, jasmim
            </li>
            <li>
              <strong style={{ color: "#3b82f6" }}>Fundo:</strong> Sândalo, patchouli, cedro
            </li>
          </ul>

          <p className="text-lg sm:text-xl" style={{ color: "#0a0a1a" }}>
            Perfeito para quem busca uma fragrância que evoque liberdade e sofisticação, com uma evolução energética e envolvente.
          </p>
        </div>
      </div>

    </section>
  );
}
