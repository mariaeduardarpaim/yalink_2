import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { createClient } from '@supabase/supabase-js';
import { Button } from '@/components/ui/Button';

// Setup Supabase Client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

// Schema for validation
const leadSchema = z.object({
  name: z.string().min(2, 'Nome é obrigatório'),
  email: z.string().email('E-mail corporativo inválido'),
  phone: z.string().min(10, 'Telefone/WhatsApp é obrigatório'),
  company: z.string().min(2, 'Nome da empresa é obrigatório'),
  interest: z.string().min(1, 'Selecione uma opção'),
});

type LeadFormData = z.infer<typeof leadSchema>;

export default function LeadForm({ title = "Fale com um especialista" }: { title?: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
  });

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true);
    setErrorMsg('');
    try {
      const { error } = await supabase.from('leads').insert([
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: data.company,
          interest: data.interest,
        },
      ]);

      if (error) throw error;
      setSuccess(true);
    } catch (err: any) {
      console.error(err);
      setErrorMsg('Ocorreu um erro ao enviar. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 text-center">
        <div className="text-[#1fa774] mb-6 flex justify-center">
          <div className="w-20 h-20 bg-[#1fa774]/10 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Consultoria solicitada!</h3>
        <p className="text-gray-500">
          Um especialista da Alfagates entrará em contato com você em breve para entender sua operação.
        </p>
      </div>
    );
  }

  return (
    <div id="lead-form" className="bg-white p-8 lg:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 mb-8">
        Preencha o formulário e receba uma consultoria personalizada.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            {...register('name')}
            placeholder="Nome completo*"
            className="w-full px-4 py-3.5 bg-gray-50/50 rounded-xl border border-gray-200 focus:bg-white focus:border-[#1fa774] focus:ring-2 focus:ring-[#1fa774]/20 outline-none transition-all text-sm text-gray-800 placeholder:text-gray-400"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.name.message}</p>}
        </div>

        <div>
          <input
            {...register('email')}
            type="email"
            placeholder="E-mail corporativo*"
            className="w-full px-4 py-3.5 bg-gray-50/50 rounded-xl border border-gray-200 focus:bg-white focus:border-[#1fa774] focus:ring-2 focus:ring-[#1fa774]/20 outline-none transition-all text-sm text-gray-800 placeholder:text-gray-400"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.email.message}</p>}
        </div>

        <div>
          <input
            {...register('phone')}
            placeholder="Telefone / WhatsApp*"
            className="w-full px-4 py-3.5 bg-gray-50/50 rounded-xl border border-gray-200 focus:bg-white focus:border-[#1fa774] focus:ring-2 focus:ring-[#1fa774]/20 outline-none transition-all text-sm text-gray-800 placeholder:text-gray-400"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.phone.message}</p>}
        </div>

        <div>
          <input
            {...register('company')}
            placeholder="Empresa*"
            className="w-full px-4 py-3.5 bg-gray-50/50 rounded-xl border border-gray-200 focus:bg-white focus:border-[#1fa774] focus:ring-2 focus:ring-[#1fa774]/20 outline-none transition-all text-sm text-gray-800 placeholder:text-gray-400"
          />
          {errors.company && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.company.message}</p>}
        </div>

        <div>
          <select
            {...register('interest')}
            className="w-full px-4 py-3.5 bg-gray-50/50 rounded-xl border border-gray-200 focus:bg-white focus:border-[#1fa774] focus:ring-2 focus:ring-[#1fa774]/20 outline-none transition-all text-sm text-gray-800"
          >
            <option value="" disabled className="text-gray-400">Qual sua principal necessidade?</option>
            <option value="Headsets Profissionais">Headsets Profissionais</option>
            <option value="Salas de Reunião (Pequenas)">Salas de Reunião (Pequenas/Médias)</option>
            <option value="Salas de Reunião (Grandes)">Salas de Reunião (Grandes)</option>
            <option value="Consultoria Completa">Consultoria Completa</option>
          </select>
          {errors.interest && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.interest.message}</p>}
        </div>

        {errorMsg && <p className="text-red-500 text-sm mt-2">{errorMsg}</p>}

        <Button type="submit" className="w-full mt-2 py-4" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Quero uma recomendação'}
        </Button>
        
        <div className="flex items-center gap-2 mt-6 text-[11px] text-gray-400 justify-center font-medium">
          <svg className="w-3.5 h-3.5 text-[#1fa774]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Seus dados estão seguros. Não compartilhamos suas informações.
        </div>
      </form>
    </div>
  );
}