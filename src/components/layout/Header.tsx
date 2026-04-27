import { Button } from '@/components/ui/Button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo representation */}
          <div className="flex items-center gap-3 font-bold text-yealink-dark-blue text-xl tracking-tight">
            <img src="/yealink-logo2019-brazilflag.png" alt="Yealink Brasil" className="h-8 w-auto object-contain" />
            <span className="text-gray-300 font-light">|</span>
            <img src="/logo-quadrado.png" alt="Alfagates" className="h-8 w-auto object-contain" />
          </div>
        </div>
        <div className="flex items-center">
          <Button onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}>
            Solicitar recomendação
          </Button>
        </div>
      </div>
    </header>
  );
}