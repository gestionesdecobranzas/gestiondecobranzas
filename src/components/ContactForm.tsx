'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  company: z.string().min(2, 'El nombre de la empresa debe tener al menos 2 caracteres'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
  monthlyVolume: z.string().min(1, 'Selecciona un volumen mensual'),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  onClose?: () => void;
}

export default function ContactForm({ onClose }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
        setTimeout(() => {
          setSubmitStatus('idle');
          onClose?.();
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg max-w-2xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Solicitar Consulta Gratuita
      </h2>
      
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center gap-3"
        >
          <CheckCircle className="w-5 h-5 text-green-600" />
          <span className="text-green-800">
            ¡Mensaje enviado exitosamente! Nos contactaremos contigo pronto.
          </span>
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-center gap-3"
        >
          <AlertCircle className="w-5 h-5 text-red-600" />
          <span className="text-red-800">
            Error al enviar el mensaje. Por favor, intenta nuevamente.
          </span>
        </motion.div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Nombre Completo *
            </label>
            <input
              {...register('name')}
              type="text"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Tu nombre completo"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Email *
            </label>
            <input
              {...register('email')}
              type="email"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="tu@email.com"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Empresa *
            </label>
            <input
              {...register('company')}
              type="text"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Nombre de tu empresa"
            />
            {errors.company && (
              <p className="text-red-400 text-sm mt-1">{errors.company.message}</p>
            )}
          </div>


        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Volumen Mensual de Transacciones *
          </label>
          <select
            {...register('monthlyVolume')}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="" className="bg-white">Selecciona un rango</option>
            <option value="0-1000" className="bg-white">0 - 1,000 transacciones</option>
            <option value="1000-5000" className="bg-white">1,000 - 5,000 transacciones</option>
            <option value="5000-10000" className="bg-white">5,000 - 10,000 transacciones</option>
            <option value="10000-50000" className="bg-white">10,000 - 50,000 transacciones</option>
            <option value="50000+" className="bg-white">Más de 50,000 transacciones</option>
          </select>
          {errors.monthlyVolume && (
            <p className="text-red-400 text-sm mt-1">{errors.monthlyVolume.message}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Mensaje *
          </label>
          <textarea
            {...register('message')}
            rows={4}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            placeholder="Cuéntanos sobre tu negocio y cómo podemos ayudarte..."
          />
          {errors.message && (
            <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
            {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
          </button>
          
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all duration-300"
            >
              Cancelar
            </button>
          )}
        </div>
      </form>
    </motion.div>
  );
}