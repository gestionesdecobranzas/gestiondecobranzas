'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Menu, X, MessageCircle, Users, Shield } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import Image from 'next/image';
import LogoSVG from '@/images/Logo Gestion de cobranzas SAS  -color.png';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Contacto() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          empresa: '',
          mensaje: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (submitStatus !== 'idle') {
      const timer = setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={LogoSVG}
                alt="Gestión de Cobranzas SAS"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl font-bold text-slate-800">Gestión de Cobranzas</span>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-slate-600 hover:text-blue-600 transition-colors">
                Inicio
              </Link>
              <Link href="/servicios" className="text-slate-600 hover:text-blue-600 transition-colors">
                Servicios
              </Link>
              <Link href="/contacto" className="text-blue-600 font-medium">
                Contacto
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-slate-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-slate-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/servicios"
                className="block px-3 py-2 text-slate-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="/contacto"
                className="block px-3 py-2 text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </motion.div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-slate-600/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
                Contáctanos
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
                Estamos aquí para ayudarte a recuperar tu cartera vencida de manera eficiente y profesional
              </p>
              
              {/* Contact Benefits */}
              <div 
                className="flex flex-wrap justify-center gap-4 mb-8"
              >
                <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-300">
                  ✅ Respuesta &lt; 24h
                </span>
                <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-300">
                  🔒 Consulta gratuita
                </span>
                <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-300">
                  👥 Soporte especializado
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="space-y-8"
              >
                <motion.div variants={fadeInUp}>
                  <h2 className="text-3xl font-bold text-slate-800 mb-6">
                    Información de Contacto
                  </h2>
                  <p className="text-slate-600 mb-8">
                    Nuestro equipo de expertos está listo para ayudarte a optimizar tu gestión de cobranzas.
                  </p>
                </motion.div>

                <motion.div variants={fadeInUp} className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800">Teléfono</h3>
                      <p className="text-slate-600">+57 (1) 234-5678</p>
                      <p className="text-sm text-slate-500">Lunes a Viernes, 8:00 AM - 6:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800">Email</h3>
                      <p className="text-slate-600">contacto@gestioncobranzas.com</p>
                      <p className="text-sm text-slate-500">Respuesta en menos de 24 horas</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800">Horarios de Atención</h3>
                      <p className="text-slate-600">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                      <p className="text-slate-600">Sábados: 9:00 AM - 1:00 PM</p>
                      <p className="text-sm text-slate-500">Zona horaria de Colombia (COT)</p>
                    </div>
                  </div>
                </motion.div>

                {/* WhatsApp Contact */}
                <motion.div variants={fadeInUp}>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <MessageCircle className="w-6 h-6 text-green-600" />
                      <h3 className="text-lg font-semibold text-green-800">WhatsApp Business</h3>
                    </div>
                    <p className="text-green-700 mb-4">
                      ¿Necesitas una respuesta rápida? Contáctanos por WhatsApp
                    </p>
                    <a
                      href="https://wa.me/573001234567?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios%20de%20gestión%20de%20cobranzas"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Chatear en WhatsApp
                    </a>
                  </div>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <h2 className="text-3xl font-bold text-slate-800 mb-6">
                  Envíanos un Mensaje
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-slate-700 mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium text-slate-700 mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="+57 300 123 4567"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="empresa" className="block text-sm font-medium text-slate-700 mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-slate-700 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Cuéntanos sobre tu situación y cómo podemos ayudarte..."
                    ></textarea>
                  </div>

                  {/* Submit Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-green-800 font-medium">¡Mensaje enviado exitosamente!</p>
                      <p className="text-green-600 text-sm">Te contactaremos pronto.</p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p className="text-red-800 font-medium">Error al enviar el mensaje</p>
                      <p className="text-red-600 text-sm">Por favor, inténtalo de nuevo o contáctanos directamente.</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Enviar Mensaje
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-slate-200">
                  <p className="text-sm text-slate-500 text-center">
                    Al enviar este formulario, aceptas nuestros{' '}
                    <Link href="/terminos" className="text-blue-600 hover:underline">
                      términos de servicio
                    </Link>{' '}
                    y{' '}
                    <Link href="/privacidad" className="text-blue-600 hover:underline">
                      política de privacidad
                    </Link>
                    .
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                Preguntas Frecuentes
              </h2>
              <p className="text-slate-600">
                Resolvemos las dudas más comunes sobre nuestros servicios
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  ¿Cuánto tiempo toma ver resultados?
                </h3>
                <p className="text-slate-600">
                  Generalmente comenzamos a ver resultados en las primeras 2-4 semanas, dependiendo del tipo de cartera y la antigüedad de las deudas.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  ¿Cómo se calculan sus honorarios?
                </h3>
                <p className="text-slate-600">
                  Trabajamos con un modelo de éxito compartido: solo cobramos un porcentaje de lo que efectivamente recuperamos para usted.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  ¿Qué información necesitan para empezar?
                </h3>
                <p className="text-slate-600">
                  Necesitamos la base de datos de deudores, montos adeudados, fechas de vencimiento y cualquier documentación de respaldo de las deudas.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  ¿Manejan todo tipo de deudas?
                </h3>
                <p className="text-slate-600">
                  Sí, manejamos deudas comerciales, de servicios, financieras, y de todo tipo de sectores económicos, adaptando nuestras estrategias a cada caso.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}