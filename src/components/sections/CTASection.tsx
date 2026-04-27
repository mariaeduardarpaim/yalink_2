import LeadForm from '@/components/LeadForm';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-yealink-dark-bg text-white py-20 lg:py-32 mesh-bg">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1fa774]/5 blur-[120px] pointer-events-none" />
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 max-w-2xl lg:max-w-none">
            <h2 className="text-4xl lg:text-5xl font-bold leading-[1.15] mb-8">
              Se a comunicação é parte crítica da sua operação, <br className="hidden lg:block" />
              <span className="text-[#1fa774]">o equipamento também deve ser</span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-gray-200 font-semibold mb-8 leading-snug">
              A diferença entre uma operação eficiente e uma operação limitada muitas vezes está na base, e não no topo.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-12 font-medium max-w-xl">
              Avalie seu cenário atual e entenda quais equipamentos fazem sentido para sua estrutura. A escolha correta reduz fricção, melhora a performance do time e sustenta o crescimento da operação com consistência.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
            </div>
          </div>
          
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative z-10 mt-10 lg:mt-0">
            <div className="w-full max-w-[420px] relative">
              <div className="absolute inset-0 bg-[#1fa774]/10 blur-[80px] rounded-full pointer-events-none" />
              <LeadForm title="Fale com um especialista" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}