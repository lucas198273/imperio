import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 px-4 mt-10 text-white bg-gradient-to-t from-blue-900 via-blue-800 to-blue-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-xl font-bold mb-4 md:mb-0 drop-shadow-md">
          Perfumes Exclusivos
        </h2>

        <div className="flex space-x-6 text-2xl">
          <a
            href="https://www.instagram.com/imperio_dos_aromass?igsh=MWs4OXh5Mjg0eW5hYw%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-200 transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
         
        </div>
      </div>

      <div className="text-center text-sm mt-6 italic text-white/80">
        © {new Date().getFullYear()} Perfumes Exclusivos. Todos os direitos reservados.
      </div>
    </footer>
  );
}
