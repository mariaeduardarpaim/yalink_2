import { Button } from '@/components/ui/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const products = [
  {
    category: "Operação (alto volume de ligações)",
    description: "Headsets com fio como o Yealink UH34/UH42, desenvolvidos para uso contínuo, com áudio limpo e conforto ergonômico, ideais para equipes de atendimento e telemarketing que operam em alta intensidade.",
    name: "Yealink UH42 Dual Teams",
    subDescription: "Headset com fio para operação contínua, com foco em conforto e clareza de áudio para atendimento intensivo.",
    image: "/products/yealink-UH42-1.png", 
    bullets: ["Áudio limpo e claro", "Conforto ergonômico", "Uso contínuo intensivo"]
  },
  {
    category: "Gestão e liderança",
    description: "Headsets sem fio como o Yealink BH70, com conexão Bluetooth para computador e celular, permitindo mobilidade sem perda de qualidade e com cancelamento de ruído avançado.",
    name: "Yealink BH70 Bluetooth Headset",
    subDescription: "Headset sem fio com cancelamento de ruído e até 35h de bateria, ideal para mobilidade e uso executivo.",
    image: "/products/Fundo de yealink-BH70-1 Removido.png", 
    bullets: ["Conexão Bluetooth", "Mobilidade avançada", "Cancelamento de ruído"]
  },
  {
    category: "Salas de reunião pequenas",
    description: "Soluções all-in-one como o Yealink MeetingBar A40, com câmera, áudio e inteligência embarcada para reuniões rápidas e sem fricção técnica.",
    name: "Yealink MeetingBar A40",
    subDescription: "Barra de videoconferência all-in-one com câmera 4K e áudio integrado para salas pequenas.",
    image: "/products/A40-31-600x456.png",
    bullets: ["All-in-one inteligente", "Câmera e áudio integrados", "Sem fricção técnica"]
  },
  {
    category: "Salas de reunião grandes",
    description: "Soluções completas como o Yealink MVC S50, desenvolvidas para ambientes corporativos mais exigentes, com integração nativa ao Microsoft Teams e estrutura completa de videoconferência.",
    name: "Yealink MVC S50 Teams Rooms System",
    subDescription: "Sistema completo de videoconferência para salas grandes com integração nativa ao Microsoft Teams.",
    image: "/products/yealink-MVC-S50-4.jpg.png",
    bullets: ["Sistema completo", "Integração MS Teams", "Alta exigência técnica"]
  }
];

export default function PortfolioSection() {
  return (
    <section className="py-24 bg-gray-50/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-[2.5rem] font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            Equipamentos profissionais para cada tipo de operação
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            Soluções específicas com modelos consolidados para garantir desempenho, conforto e confiabilidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {products.map((product, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col group shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
              <div className="bg-gray-50 flex items-center justify-center p-6 h-56 relative overflow-hidden group-hover:bg-gray-100/80 transition-colors duration-300">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain rounded-lg relative z-10 group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-[#1fa774] font-bold text-[10px] tracking-widest uppercase mb-3">
                  {product.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                  {product.name}
                </h3>
                <p className="text-gray-500 mb-6 text-sm leading-relaxed flex-grow">
                  {product.subDescription}
                </p>
                
                <ul className="space-y-2.5 mb-8">
                  {product.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#1fa774] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full mt-auto" onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}>
                  Saiba mais
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button variant="primary" size="lg" className="px-8" onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}>
            Solicitar recomendação personalizada
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}