import { Button } from '@/components/ui/Button';
import { ArrowRight, Headphones, Briefcase, Users, Video } from 'lucide-react';

export default function RepositioningSection() {
  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-[2.5rem] font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            Padronização de equipamentos é uma decisão estratégica
          </h2>
          <p className="text-xl text-gray-600 mb-8 font-medium">
            Comunicação eficiente exige dispositivos adequados para cada contexto de uso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-16 max-w-6xl mx-auto">
          
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg font-medium">
            <p>
              Não existe uma única solução para todos os perfis dentro da empresa. Operações demandam resistência e conforto contínuo. Lideranças precisam de mobilidade. Ambientes corporativos exigem qualidade de áudio e vídeo.
            </p>
            <p>
              A padronização correta elimina inconsistências e cria uma base sólida para <strong className="text-[#1fa774] font-bold">escala, previsibilidade e qualidade operacional.</strong>
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            <div className="bg-white p-6 lg:p-8 rounded-2xl text-center border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:border-[#1fa774]/30 hover:shadow-[0_8px_30px_rgb(31,167,116,0.08)] transition-all duration-300">
              <div className="text-[#1fa774] mb-4 flex justify-center">
                <Headphones className="h-8 w-8" strokeWidth={1.5} />
              </div>
              <div className="font-bold text-gray-900">Operação Intensa</div>
            </div>
            
            <div className="bg-white p-6 lg:p-8 rounded-2xl text-center border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:border-[#1fa774]/30 hover:shadow-[0_8px_30px_rgb(31,167,116,0.08)] transition-all duration-300">
              <div className="text-[#1fa774] mb-4 flex justify-center">
                <Briefcase className="h-8 w-8" strokeWidth={1.5} />
              </div>
              <div className="font-bold text-gray-900">Liderança Móvel</div>
            </div>
            
            <div className="bg-white p-6 lg:p-8 rounded-2xl text-center border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:border-[#1fa774]/30 hover:shadow-[0_8px_30px_rgb(31,167,116,0.08)] transition-all duration-300">
              <div className="text-[#1fa774] mb-4 flex justify-center">
                <Users className="h-8 w-8" strokeWidth={1.5} />
              </div>
              <div className="font-bold text-gray-900">Salas de Reunião</div>
            </div>
            
            <div className="bg-white p-6 lg:p-8 rounded-2xl text-center border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:border-[#1fa774]/30 hover:shadow-[0_8px_30px_rgb(31,167,116,0.08)] transition-all duration-300">
              <div className="text-[#1fa774] mb-4 flex justify-center">
                <Video className="h-8 w-8" strokeWidth={1.5} />
              </div>
              <div className="font-bold text-gray-900">Colaboração Híbrida</div>
            </div>
          </div>
          
        </div>

        <div className="flex justify-center">
          <Button variant="primary" size="lg" className="px-8" onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}>
            Ver soluções recomendadas
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}