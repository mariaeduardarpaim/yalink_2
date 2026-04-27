import { Button } from '@/components/ui/Button';
import { ArrowRight, MessageSquare, Headphones, UserCheck, TrendingUp, Target, Settings, Link as LinkIcon } from 'lucide-react';

const benefits = [
  { text: "Clareza e consistência na comunicação", icon: MessageSquare },
  { text: "Redução de ruídos e falhas técnicas", icon: Headphones },
  { text: "Menor desgaste da equipe em uso prolongado", icon: UserCheck },
  { text: "Aumento de produtividade em operações", icon: TrendingUp },
  { text: "Reuniões mais objetivas e eficientes", icon: Target },
  { text: "Padronização e controle da operação", icon: Settings },
  { text: "Melhor integração com ferramentas", icon: LinkIcon }
];

export default function BenefitsSection() {
  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-[2.5rem] font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            O que muda quando a infraestrutura é correta
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            Ganho direto em eficiência, qualidade e previsibilidade operacional.
          </p>
        </div>

        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4 lg:gap-6 mb-16">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div key={idx} className="flex items-center gap-4 bg-white px-6 py-4 rounded-xl border border-gray-200 shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:border-[#1fa774]/40 hover:shadow-[0_4px_14px_rgb(31,167,116,0.05)] transition-all duration-300 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-[#1fa774] shrink-0 group-hover:bg-[#1fa774]/10">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-gray-700 font-medium text-sm lg:text-[15px] leading-snug">{benefit.text}</span>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Button variant="primary" size="lg" className="px-8" onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}>
            Padronizar equipamentos da minha equipe
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}