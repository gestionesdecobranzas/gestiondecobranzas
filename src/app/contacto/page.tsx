'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, ArrowLeft, CheckCircle, Star, Users, Shield, Zap } from 'lucide-react';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50">
        Saltar al contenido principal
      </a>

      {/* Navigation */}
      <nav className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700/50" role="navigation" aria-label="Navegación principal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors group">
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-semibold">Volver al inicio</span>
            </Link>
            <div className="text-xl font-bold text-white">
              Gestión de Cobranzas SAS
            </div>

          </div>
        </div>
      </nav>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-slate-400">
          <Link href="/" className="hover:text-blue-400 transition-colors">Inicio</Link>
          <span>/</span>
          <span className="text-white font-medium">Contacto</span>
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
          <div className="inline-flex items-center bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
            <Star className="h-4 w-4 text-yellow-400 mr-2" />
            <span className="text-blue-300 text-sm font-medium">Consulta gratuita • Respuesta en 2 horas</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hablemos de tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">próximo éxito</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            ¿Listo para revolucionar tu sistema de pagos? Nuestro equipo de expertos está aquí para ayudarte a crecer.
          </p>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-400">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>Implementación en 48hs</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-blue-400" />
              <span>PCI DSS Certificado</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-purple-400" />
              <span>+1000 empresas confían</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="h-4 w-4 text-yellow-400" />
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
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">Información de Contacto</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <p className="text-slate-300">ventas@gestioncobranzas.com</p>
                    <p className="text-slate-300">soporte@gestioncobranzas.com</p>
                  </div>
                </div>



                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Oficina</h3>
                    <p className="text-slate-300">Av. Corrientes 1234, Piso 10</p>
                    <p className="text-slate-300">Ciudad Autónoma de Buenos Aires</p>
                    <p className="text-slate-300">Argentina (C1043AAZ)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Horarios de Atención</h3>
                    <p className="text-slate-300">Lunes a Viernes: 9:00 - 18:00</p>
                    <p className="text-slate-300">Sábados: 9:00 - 13:00</p>
                    <p className="text-slate-300">Soporte 24/7 disponible</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
              <h3 className="text-xl font-bold text-white mb-4">¿Por qué elegirnos?</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Implementación en menos de 48 horas</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Soporte técnico 24/7</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Comisiones hasta 10x más bajas</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>API REST moderna y documentada</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
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
          <h2 className="text-3xl font-bold text-white text-center mb-12">Preguntas Frecuentes</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-3">¿Cuánto tiempo toma la implementación?</h3>
              <p className="text-slate-300">La implementación básica toma entre 24-48 horas. Para integraciones complejas, nuestro equipo técnico trabajará contigo para completar el proceso en menos de una semana.</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-3">¿Qué métodos de pago soportan?</h3>
              <p className="text-slate-300">Soportamos todos los métodos populares en Argentina: tarjetas de crédito/débito, transferencias bancarias, Mercado Pago, Rapipago, Pago Fácil, y más.</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-3">¿Hay costos de setup?</h3>
              <p className="text-slate-300">No cobramos costos de setup ni mantenimiento. Solo pagas por las transacciones procesadas, con tarifas transparentes y competitivas.</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-3">¿Ofrecen soporte técnico?</h3>
              <p className="text-slate-300">Sí, ofrecemos soporte técnico 24/7 a través de múltiples canales: email, teléfono, chat en vivo, y un portal de soporte dedicado.</p>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo y descripción */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold text-white mb-4">Gestión de Cobranzas SAS</h3>
              <p className="text-slate-300 mb-4">
                Especialistas en recuperación de cartera vencida con más de 15 años de experiencia. 
                Soluciones efectivas y personalizadas para su empresa.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Servicios */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Servicios</h4>
              <ul className="space-y-2">
                <li><Link href="/servicios" className="text-slate-300 hover:text-white transition-colors">Cobranza Extrajudicial</Link></li>
                <li><Link href="/servicios" className="text-slate-300 hover:text-white transition-colors">Cobranza Judicial</Link></li>
                <li><Link href="/servicios" className="text-slate-300 hover:text-white transition-colors">Gestión de Cartera</Link></li>
                <li><Link href="/servicios" className="text-slate-300 hover:text-white transition-colors">Consultoría</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/privacidad" className="text-slate-300 hover:text-white transition-colors">Política de Privacidad</Link></li>
                <li><Link href="/terminos" className="text-slate-300 hover:text-white transition-colors">Términos y Condiciones</Link></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Aviso Legal</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-400">
              © {new Date().getFullYear()} Gestión de Cobranzas SAS. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}