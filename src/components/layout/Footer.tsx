import { Linkedin, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-yealink-gray py-12 border-t border-gray-200">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 font-bold text-xl tracking-tight text-white">
            <img src="/yealink-logo2019-brazilflag.png" alt="Yealink Brasil" className="h-7 w-auto object-contain" />
            <span className="text-gray-300 font-light">|</span>
            <img src="/logo-quadrado.png" alt="Alfagates" className="h-7 w-auto object-contain" />
          </div>
          
          <div className="text-sm text-gray-400 text-center md:text-left">Alfagates - Parceiro Certificado Yealink no Brasil</div>
          
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-400 hover:text-yealink-green transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-yealink-green transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-yealink-green transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}