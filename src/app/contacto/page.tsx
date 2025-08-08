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
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    telefono: '',
    mensaje: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Navigation */}
      <nav className={`fixed top-2.5 left-1/2 transform -translate-x-1/2 w-[90%] max-w-7xl z-50 transition-all duration-300 rounded-2xl ${
        isScrolled ? 'bg-white/95 backdrop-blur-md border border-gray-200/50' : 'bg-white/20 backdrop-blur-md border border-gray-300/20'
      }`}>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <Image 
                  src={LogoSVG}
                  alt="Gestión de Cobranzas SAS"
                  width={180}
                  height={55}
                  className="h-12 w-auto"
                />
              </Link>
            </motion.div>
            
            {/* Desktop Navigation */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex items-center space-x-8"
            >
              <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Inicio</Link>
              <Link href="/servicios" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Servicios</Link>
              <Link href="/contacto" className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-6 py-2 rounded-full transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
                Contacto
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Abrir menú de navegación"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200 py-4"
            >
              <div className="flex flex-col space-y-4">
                <Link 
                  href="/" 
                  className="text-gray-700 hover:text-gray-900 transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Inicio
                </Link>
                <Link 
                  href="/servicios" 
                  className="text-gray-700 hover:text-gray-900 transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Servicios
                </Link>
                <Link 
                  href="/contacto" 
                  className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-full font-semibold text-center transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contacto
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <main>
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="text-center mb-16"
            >
              <motion.div 
                variants={fadeInUp}
                className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/30 mb-6"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Estamos aquí para ayudarte</span>
              </motion.div>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Hablemos de tu
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  Proyecto
                </span>
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto"
              >
                Nuestro equipo de expertos está listo para ayudarte a revolucionar tus cobranzas.
                <strong className="text-gray-900"> Respuesta garantizada en menos de 24 horas.</strong>
              </motion.p>

              {/* Trust Indicators */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap justify-center gap-4 mb-8"
              >
                <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-300">
                  ✅ Respuesta < 24h
                </span>
                <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-300">
                  🔒 Consulta gratuita
                </span>
                <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-300">
                  👥 Soporte especializado
                </span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            >
              <motion.div 
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-lg text-center group"
              >
                <div className="bg-blue-600 p-4 rounded-xl w-fit mx-auto mb-6 text-white group-hover:bg-blue-700 transition-colors duration-300">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Email</h3>
                <p className="text-gray-600 mb-4">Escríbenos directamente</p>
                <a 
                  href="mailto:contacto@gestiondecobranzas.com" 
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  contacto@gestiondecobranzas.com
                </a>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-lg text-center group"
              >
                <div className="bg-blue-600 p-4 rounded-xl w-fit mx-auto mb-6 text-white group-hover:bg-blue-700 transition-colors duration-300">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Teléfono</h3>
                <p className="text-gray-600 mb-4">Llámanos directamente</p>
                <a 
                  href="tel:+5491123456789" 
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  +54 9 11 2345-6789
                </a>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-lg text-center group"
              >
                <div className="bg-blue-600 p-4 rounded-xl w-fit mx-auto mb-6 text-white group-hover:bg-blue-700 transition-colors duration-300">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Horarios</h3>
                <p className="text-gray-600 mb-2">Lunes a Viernes</p>
                <p className="text-blue-600 font-semibold">9:00 - 18:00 ART</p>
                <p className="text-gray-500 text-sm mt-2">Soporte 24/7 disponible</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                Cuéntanos sobre
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  tu Proyecto
                </span>
              </motion.h2>
              
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-gray-600 max-w-2xl mx-auto"
              >
                Completa el formulario y nuestro equipo se pondrá en contacto contigo para una consulta personalizada
              </motion.p>
            </motion.div>

            <motion.form 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Tu nombre completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="empresa" className="block text-sm font-semibold text-gray-700 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                
                <div>
                  <label htmlFor="telefono" className="block text-sm font-semibold text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="+54 9 11 1234-5678"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="mensaje" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Cuéntanos sobre tu proyecto, volumen de transacciones, necesidades específicas..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                Enviar Mensaje
                <Send className="w-5 h-5" />
              </button>

              <p className="text-gray-500 text-sm text-center mt-4">
                Al enviar este formulario, aceptas que nos pongamos en contacto contigo para brindarte información sobre nuestros servicios.
              </p>
            </motion.form>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                Preguntas
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  Frecuentes
                </span>
              </motion.h2>
              
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-gray-600 max-w-2xl mx-auto"
              >
                Resolvemos las dudas más comunes sobre nuestros servicios
              </motion.p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                {
                  question: "¿Cuánto tiempo toma la implementación?",
                  answer: "La implementación completa toma menos de 48 horas. Nuestro equipo técnico se encarga de toda la configuración y te acompañamos durante el proceso de integración."
                },
                {
                  question: "¿Qué comisiones cobran por las transacciones?",
                  answer: "Nuestras comisiones son hasta 10 veces más bajas que las tarjetas de crédito tradicionales. El costo exacto depende del volumen de transacciones y el tipo de negocio. Contactanos para una cotización personalizada."
                },
                {
                  question: "¿Es seguro el sistema de transferencias?",
                  answer: "Absolutamente. Contamos con certificación PCI DSS Level 1, la más alta en seguridad de pagos. Todas las transacciones están encriptadas de extremo a extremo y cumplimos con las normativas bancarias más estrictas."
                },
                {
                  question: "¿Qué soporte técnico ofrecen?",
                  answer: "Ofrecemos soporte técnico 24/7 con un equipo especializado. Además, cada cliente tiene asignado un account manager para resolver cualquier consulta de manera personalizada."
                },
                {
                  question: "¿Puedo integrar el sistema con mi plataforma actual?",
                  answer: "Sí, nuestro sistema se integra fácilmente con la mayoría de plataformas de e-commerce, CRM y sistemas de facturación. Contamos con APIs REST y webhooks para una integración fluida."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-lg"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="text-center mt-12"
            >
              <p className="text-gray-600 mb-4">¿No encontraste la respuesta que buscabas?</p>
              <a 
                href="mailto:contacto@gestiondecobranzas.com"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                Contáctanos directamente
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}