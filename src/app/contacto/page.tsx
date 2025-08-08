'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, CheckCircle, Star, Users, Shield, Zap, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Image from 'next/image';
import LogoSVG from '@/images/Logo Gestion de cobranzas SAS  -color.png';

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50">
        Saltar al contenido principal
      </a>

      {/* Navigation */}
      <nav className={`fixed top-2.5 left-1/2 transform -translate-x-1/2 w-[90%] max-w-7xl z-50 transition-all duration-300 rounded-2xl ${
        isScrolled ? 'bg-white/95 backdrop-blur-md border border-gray-200/50' : 'bg-white/20 backdrop-blur-md border border-gray-300/20'
      }`} role="navigation" aria-label="Navegación principal">
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
              <Link href="/servicios" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Servicios</Link>
              <Link href="/#ventajas" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Ventajas</Link>
              <Link href="/#casos-uso" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Casos de Uso</Link>

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
                  href="/servicios" 
                  className="text-gray-700 hover:text-gray-900 transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Servicios
                </Link>
                <Link 
                  href="/#ventajas" 
                  className="text-gray-700 hover:text-gray-900 transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ventajas
                </Link>
                <Link 
                  href="/#casos-uso" 
                  className="text-gray-700 hover:text-gray-900 transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Casos de Uso
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

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 pt-24">
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600 transition-colors">Inicio</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Contacto</span>
        </nav>
      </div>

      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-gray-100 border border-gray-300 rounded-full px-4 py-2 mb-6">
            <Star className="h-4 w-4 text-yellow-500 mr-2" />
            <span className="text-gray-700 text-sm font-medium">Consulta gratuita • Respuesta en 2 horas</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hablemos de tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">próximo éxito</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            ¿Listo para revolucionar tu sistema de pagos? Nuestro equipo de expertos está aquí para ayudarte a crecer.
          </p>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Implementación en 48hs</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-blue-600" />
              <span>PCI DSS Certificado</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-purple-600" />
              <span>+1000 empresas confían</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="h-4 w-4 text-yellow-500" />
              <span>Soporte 24/7</span>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">adm@gestiondecobranzas.com</p>
                  </div>
                </div>



                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Oficina</h3>
                    <p className="text-gray-600">Av. Corrientes 1234, Piso 10</p>
                    <p className="text-gray-600">Ciudad Autónoma de Buenos Aires</p>
                    <p className="text-gray-600">Argentina (C1043AAZ)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Horarios de Atención</h3>
                    <p className="text-gray-600">Lunes a Viernes: 9:00 - 18:00</p>
                    <p className="text-gray-600">Sábados: 9:00 - 13:00</p>
                    <p className="text-gray-600">Soporte 24/7 disponible</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">¿Por qué elegirnos?</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Implementación en menos de 48 horas</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Soporte técnico 24/7</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Comisiones hasta 10x más bajas</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>API REST moderna y documentada</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Dashboard en tiempo real</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ContactForm />
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Preguntas Frecuentes</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">¿Cuánto tiempo toma la implementación?</h3>
              <p className="text-gray-600">La implementación básica toma entre 24-48 horas. Para integraciones complejas, nuestro equipo técnico trabajará contigo para completar el proceso en menos de una semana.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">¿Qué métodos de pago soportan?</h3>
              <p className="text-gray-600">Soportamos todos los métodos populares en Argentina: tarjetas de crédito/débito, transferencias bancarias, Mercado Pago, Rapipago, Pago Fácil, y más.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">¿Hay costos de setup?</h3>
              <p className="text-gray-600">No cobramos costos de setup ni mantenimiento. Solo pagas por las transacciones procesadas, con tarifas transparentes y competitivas.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">¿Ofrecen soporte técnico?</h3>
              <p className="text-gray-600">Sí, ofrecemos soporte técnico 24/7 a través de múltiples canales: email, teléfono, chat en vivo, y un portal de soporte dedicado.</p>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}