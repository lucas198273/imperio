import React from "react";
import {  FaInstagram } from "react-icons/fa";

const SocialMediaSection: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-r from-white via-[#fef9c3] to-white text-[#0f172a]">
      <div className="max-w-4xl mx-auto text-center">
        <img
          src="/assets/logo.webp"
          alt="Perfumes Exclusivos"
          className="mx-auto mb-6 w-32 h-32 object-cover rounded-full border-4 border-[#facc15] shadow-xl"
        />

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0f172a] drop-shadow-md">
          Conecte-se com Perfumes Exclusivos
        </h2>

        <p className="mb-6 text-lg italic text-[#334155]">
          Siga nossas redes sociais e descubra as fragrâncias mais exclusivas.
        </p>

        <div className="flex justify-center gap-8 flex-wrap">
       

          {/* Instagram */}
          <a
            href="https://www.instagram.com/imperio_dos_aromass?igsh=MWs4OXh5Mjg0eW5hYw%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center transition-transform hover:scale-110 text-[#facc15] hover:text-yellow-500"
          >
            <FaInstagram className="w-10 h-10 mb-2" />
            <span className="text-sm font-medium">Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
