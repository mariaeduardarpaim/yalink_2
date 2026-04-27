import { Button } from '@/components/ui/Button';
import { ArrowDownToLine, Waves, Users, TrendingDown, ArrowRight } from 'lucide-react';

export default function PainSection() {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-[2.5rem] font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            O impacto não é pontual. <span className="text-[#1fa774]">É acumulativo.</span>
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            Pequenas falhas recorrentes geram perda de produtividade em escala.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-[#1fa774]">
              <ArrowDownToLine className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Atendimento e escala</h3>
            <p className="text-sm text-gray-600 leading-relaxed font-medium">
              Em operações de atendimento e telemarketing, segundos de repetição, falhas de áudio ou desconexões se multiplicam ao longo do dia.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-[#1fa774]">
              <Waves className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Efeito dominó</h3>
            <p className="text-sm text-gray-600 leading-relaxed font-medium">
              Isso gera retrabalho, desgaste da equipe e queda na qualidade da experiência do cliente.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-[#1fa774]">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Ambientes corporativos</h3>
            <p className="text-sm text-gray-600 leading-relaxed font-medium">
              Em ambientes corporativos, reuniões com baixa qualidade técnica aumentam o tempo de decisão,
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-[#1fa774]">
              <TrendingDown className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Perda de foco</h3>
            <p className="text-sm text-gray-600 leading-relaxed font-medium">
              criam ruídos de comunicação e reduzem a objetividade.
            </p>
          </div>

        </div>

        <div className="flex justify-center">
          <Button variant="outline" size="lg" className="bg-white hover:bg-[#1fa774] px-8" onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}>
            Identificar gargalos da minha equipe
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}