export default function SuellenContato() {
  return (
    <section className="pt-32 pb-16 px-4 bg-[#fdf6f0] text-[#3e1428]">
      <div className="max-w-md mx-auto flex flex-col items-center text-center space-y-6">
        {/* Imagem circular */}
        <img
          src="/assets/imgdn.jpeg" // Substitua com o caminho correto
          alt="Suellen - Dona da loja"
          className="w-40 h-40 rounded-full object-cover shadow-md"
        />

        {/* Texto de apresentação */}
        <div>
          <h2 className="text-2xl font-bold">Suellen</h2>
          <p className="text-lg">Proprietária e vendedora da nossa loja</p>
        </div>

        {/* Botão do WhatsApp */}
        <a
          href="https://wa.me/553198749678" // Substitua pelo número correto
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#5e1f3d] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#45102d] transition"
        >
          Falar com Suellen no WhatsApp
        </a>
      </div>
    </section>
  );
}
