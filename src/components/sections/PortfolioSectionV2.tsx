import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/Button';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const headsetsImages = [
  { src: "/products/yealink-UH42-1.png", alt: "Yealink UH42" },
  { src: "/products/Fundo de yealink-BH70-1 Removido.png", alt: "Yealink BH70" }
];

const camerasImages = [
  { src: "/products/A40-31-600x456.png", alt: "Yealink MeetingBar A40" },
  { src: "/products/yealink-MVC-S50-4.jpg.png", alt: "Yealink MVC S50" }
];

interface CategoryCardProps {
  title: string;
  description: string;
  images: { src: string; alt: string }[];
  buttonText: string;
}

function CategoryCard({ title, description, images, buttonText }: CategoryCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-[0_8px_40px_rgb(0,0,0,0.06)] hover:shadow-[0_12px_50px_rgb(0,0,0,0.1)] transition-all duration-500 flex flex-col h-full">
      <div className="p-8 pb-6">
        <div className="inline-block bg-[#1fa774]/10 text-[#1fa774] font-bold text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full mb-6">
          Categoria
        </div>
        
        <h3 className="text-2xl lg:text-[1.75rem] font-bold text-gray-900 mb-4 leading-tight tracking-tight">
          {title}
        </h3>
        
        <p className="text-gray-500 text-base leading-relaxed">
          {description}
        </p>
      </div>

      <div 
        className="relative bg-gray-50 mx-6 rounded-2xl overflow-hidden group"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div className="aspect-[4/3] relative overflow-hidden">
          {images.map((image, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                idx === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-contain p-8"
              />
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-white hover:scale-105 transition-all duration-200 opacity-0 group-hover:opacity-100 z-20"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-white hover:scale-105 transition-all duration-200 opacity-0 group-hover:opacity-100 z-20"
          aria-label="Próximo"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex 
                  ? 'bg-[#1fa774] w-6' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ir para slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="p-8 pt-6 mt-auto">
        <Button 
          variant="outline" 
          className="w-full group/btn"
          onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span>{buttonText}</span>
          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
        </Button>
      </div>
    </div>
  );
}

export default function PortfolioSectionV2() {
  return (
    <section className="py-24 bg-gray-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-[2.5rem] font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            Equipamentos profissionais para cada tipo de operação
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            Soluções específicas com modelos consolidados para garantir desempenho, conforto e confiabilidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
          <CategoryCard
            title="Fones e headsets profissionais"
            description="Headsets certificados para uso intensivo em operação, liderança e mobilidade corporativa. Áudio limpo, conforto ergonômico e tecnologia Teams nativa."
            images={headsetsImages}
            buttonText="Solicitar recomendação"
          />

          <CategoryCard
            title="Câmeras e videoconferência para salas"
            description="Soluções all-in-one e sistemas completos para reuniões produtivas. Câmera 4K, áudio inteligente e integração nativa com Microsoft Teams."
            images={camerasImages}
            buttonText="Falar com um especialista"
          />
        </div>
      </div>
    </section>
  );
}