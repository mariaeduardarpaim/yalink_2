import LeadForm from '@/components/LeadForm';
import { Button } from '@/components/ui/Button';
import { ShieldCheck, Headphones, TrendingUp, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-yealink-dark-bg text-white py-16 lg:py-24 border-b border-[#1fa774]/20">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 flex items-center justify-center p-8">
        <img 
          src="/products/Fundo de Gemini_Generated_Image_nsn4lxnsn4lxnsn4 Removido.png" 
          alt="Yealink Background" 
          className="w-full h-full object-contain opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-yealink-dark-bg/90 via-yealink-dark-bg/60 to-yealink-dark-bg/40" /> {/* Overlay em gradiente para garantir legibilidade à esquerda e mais visão à direita */}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 max-w-2xl lg:max-w-none">
            <div className="inline-block border border-white/20 rounded-full px-4 py-1.5 text-[11px] font-bold tracking-widest text-white uppercase mb-6 bg-white/5 backdrop-blur-sm">EQUIPAMENTOS YEALINK</div>
            
            <h1 className="text-4xl lg:text-[3.25rem] font-bold leading-[1.15] mb-6">
              Equipamento inadequado não é um detalhe operacional. <br className="hidden lg:block" />
              <span className="text-[#1fa774]">É um gargalo de performance.</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed font-medium">
              A qualidade da comunicação da sua empresa depende diretamente dos dispositivos utilizados no dia a dia.
            </p>
            
            <div className="space-y-5 text-gray-300 mb-10 text-[16px] leading-relaxed max-w-2xl">
              <p>
                Empresas que operam com headsets genéricos, soluções improvisadas ou equipamentos não padronizados enfrentam um problema estrutural silencioso: <strong className="text-white font-semibold">perda contínua de eficiência.</strong>
              </p>
              <p>
                Ruído, falhas de conexão, desconforto e baixa qualidade de áudio impactam diretamente atendimento, vendas e alinhamento interno, reduzindo a performance da operação como um todo.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-8 border-t border-white/10">
              <div className="flex flex-col gap-2">
                <ShieldCheck className="h-7 w-7 text-[#1fa774]" />
                <span className="text-sm text-gray-300 font-medium">Mais clareza nas interações</span>
              </div>
              <div className="flex flex-col gap-2">
                <Headphones className="h-7 w-7 text-[#1fa774]" />
                <span className="text-sm text-gray-300 font-medium">Menos ruído e falhas técnicas</span>
              </div>
              <div className="flex flex-col gap-2">
                <TrendingUp className="h-7 w-7 text-[#1fa774]" />
                <span className="text-sm text-gray-300 font-medium">Mais performance para equipes</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative z-10 mt-10 lg:mt-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#1fa774]/15 blur-[100px] rounded-full pointer-events-none" />
            <div className="w-full max-w-md lg:max-w-[420px] relative animate-fade-in-up">
              <LeadForm title="Fale com um especialista" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}