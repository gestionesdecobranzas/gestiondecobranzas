'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, CreditCard, Zap, Shield, TrendingUp, Users, Clock, Menu, X, Star } from 'lucide-react';
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

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const words = ['Cobranzas', 'Servicios', 'Transferencias'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Escribiendo
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          // Palabra completa, esperar antes de borrar
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Borrando
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          // Palabra borrada, cambiar a la siguiente
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 75 : 100); // Animación más rápida

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

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
              <Link href="/servicios" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Servicios</Link>
              <a href="#ventajas" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Ventajas</a>
              <a href="#casos-uso" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Casos de Uso</a>

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
                <a 
                  href="#ventajas" 
                  className="text-gray-700 hover:text-gray-900 transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ventajas
                </a>
                <a 
                  href="#casos-uso" 
                  className="text-gray-700 hover:text-gray-900 transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Casos de Uso
                </a>

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
        <section id="main-content" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="text-center"
            >
              {/* Trust Indicators */}
              <motion.div 
                variants={fadeInUp}
                className="flex justify-center items-center gap-4 mb-6 text-sm text-gray-600"
              >
                <div className="flex items-center gap-1">
                  <Shield className="h-4 w-4 text-blue-400" />
                  <span>Certificado PCI DSS</span>
                </div>
                <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-gray-700" />
                  <span>4.9/5 en reseñas</span>
                </div>
                <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4 text-blue-400" />
                  <span>+1000 empresas</span>
                </div>
              </motion.div>

              <motion.h1 
                variants={fadeInUp}
                className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Revoluciona tus
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  {currentText}
                  {currentText === '' && <span className="text-transparent">|</span>}
                </span>
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto"
              >
                Gateway de recaudación inteligente. Hasta <strong className="text-gray-900">10x más económico</strong> que tarjetas y QR.
                Transferencias automáticas que transforman tu negocio.
              </motion.p>

              {/* Value Proposition Pills */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap justify-center gap-3 mb-8"
              >
                <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-300">
                  ✅ Sin contracargos
                </span>
                <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-300">
                  ⚡ Acreditación inmediata
                </span>
                <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-300">
                  🔒 100% seguro
                </span>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
              >
                <Link href="/contacto">
                  <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 flex items-center gap-2 shadow-2xl hover:shadow-blue-500/25 hover:scale-105">
                    Comenzar Ahora
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>

                <Link href="#ventajas">
                  <button className="text-gray-600 hover:text-gray-900 px-8 py-4 font-semibold text-lg transition-all duration-300 underline underline-offset-4">
                    Conocer Más
                  </button>
                </Link>
              </motion.div>

              {/* Social Proof */}
              <motion.div 
                variants={fadeInUp}
                className="text-center text-gray-500 text-sm"
              >
                <p className="mb-2">Empresas que ya confían en nosotros:</p>
                <div className="flex justify-center items-center gap-8 opacity-60">
                  <span className="font-semibold">MercadoLibre</span>
                  <span className="font-semibold">Rappi</span>
                  <span className="font-semibold">Ualá</span>
                  <span className="font-semibold">Naranja X</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Números que hablan por sí solos
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Miles de empresas ya transformaron sus cobranzas con nuestra plataforma
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            <motion.div 
              variants={fadeInUp} 
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">10x</div>
              <div className="text-gray-700 font-medium">Más Económico</div>
              <div className="text-gray-500 text-sm mt-1">vs. tarjetas de crédito</div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp} 
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <div className="text-4xl md:text-5xl font-bold text-gray-700 mb-2 group-hover:scale-110 transition-transform duration-300">99.9%</div>
              <div className="text-gray-700 font-medium">Uptime</div>
              <div className="text-gray-500 text-sm mt-1">Disponibilidad garantizada</div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp} 
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-gray-700 font-medium">Soporte</div>
              <div className="text-gray-500 text-sm mt-1">Atención especializada</div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp} 
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <div className="text-4xl md:text-5xl font-bold text-gray-700 mb-2 group-hover:scale-110 transition-transform duration-300">1000+</div>
              <div className="text-gray-700 font-medium">Empresas</div>
              <div className="text-gray-500 text-sm mt-1">Confían en nosotros</div>
            </motion.div>
          </motion.div>

          {/* Additional Trust Elements */}
          <motion.div 
            variants={fadeInUp}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div className="flex flex-col items-center">
              <Shield className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Máxima Seguridad</h3>
              <p className="text-gray-600 text-sm">Certificación PCI DSS Level 1 y encriptación de extremo a extremo</p>
            </div>
            <div className="flex flex-col items-center">
              <Zap className="h-12 w-12 text-gray-700 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Procesamiento Instantáneo</h3>
              <p className="text-gray-600 text-sm">Transferencias procesadas en tiempo real, 24/7</p>
            </div>
            <div className="flex flex-col items-center">
              <TrendingUp className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Crecimiento Garantizado</h3>
              <p className="text-gray-600 text-sm">Aumenta tus conversiones hasta un 40% con nuestro sistema</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div 
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/30 mb-6"
            >
              <Zap className="h-4 w-4" />
              <span>Tecnología de vanguardia</span>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Transferencias
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Inteligentes
              </span>
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Automatiza completamente tus cobranzas con nuestro sistema de transferencias bancarias.
              Sin intermediarios, sin comisiones altas, sin complicaciones.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <Link href="/servicios">
                <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 flex items-center gap-2">
                  Ver todos los servicios
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/contacto">
                <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300">
                  Solicitar demo
                </button>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 group hover:scale-105 shadow-sm"
            >
              <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Automatización Total</h3>
              <p className="text-gray-600 mb-6">
                Genera órdenes de pago automáticas. Tus clientes reciben instrucciones precisas 
                para transferir directamente a tu cuenta.
              </p>
              <ul className="space-y-3 text-gray-500">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Generación automática de CBU/CVU</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Instrucciones de pago personalizadas</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Seguimiento en tiempo real</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link href="/servicios#automatizacion">
                  <button className="text-gray-700 hover:text-blue-600 font-semibold flex items-center gap-2 group">
                    Conocer más
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 group hover:scale-105 shadow-sm"
            >
              <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pagos Seguros</h3>
              <p className="text-gray-600 mb-6">
                Máxima seguridad bancaria. Cada transferencia es directa entre tu cliente 
                y tu cuenta, sin intermediarios.
              </p>
              <ul className="space-y-3 text-gray-500">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Sin riesgo de contracargos</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Certificación bancaria PCI DSS</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Encriptación de extremo a extremo</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link href="/servicios#seguridad">
                  <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 group">
                    Conocer más
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 group hover:scale-105 shadow-sm"
            >
              <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Integración Completa</h3>
              <p className="text-gray-600 mb-6">
                Conecta con tu sistema actual en minutos. API REST, webhooks 
                y documentación completa para desarrolladores.
              </p>
              <ul className="space-y-3 text-gray-500">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>API REST completa</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Webhooks en tiempo real</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>SDKs para múltiples lenguajes</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link href="/servicios#integracion">
                  <button className="text-gray-700 hover:text-blue-600 font-semibold flex items-center gap-2 group">
                    Conocer más
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="ventajas" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div 
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/30 mb-6"
            >
              <CheckCircle className="h-4 w-4" />
              <span>Ventajas comprobadas</span>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              ¿Por qué elegir nuestro
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Gateway?
              </span>
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Descubre las ventajas que han convencido a más de 1000 empresas a transformar sus cobranzas
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 group shadow-sm"
            >
              <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">10x Más Económico</h3>
              <p className="text-gray-600 mb-4">
                Reduce tus costos de procesamiento hasta un 90% comparado con tarjetas de crédito y otros métodos.
              </p>
              <div className="bg-gray-100 rounded-lg p-4 border border-gray-200">
                <div className="text-sm text-gray-700 font-semibold mb-2">Comparación de costos:</div>
                <div className="space-y-1 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Tarjetas de crédito:</span>
                    <span className="text-red-400">3-6%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Nuestro gateway:</span>
                    <span className="text-blue-400">0.3-0.8%</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 group shadow-sm"
            >
              <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Confirmación Instantánea</h3>
              <p className="text-gray-600 mb-4">
                Recibe confirmación inmediata de cada pago. Sin esperas, sin incertidumbre.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-500">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Notificación en tiempo real</span>
                </div>
                <div className="flex items-center gap-3 text-gray-500">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Webhooks automáticos</span>
                </div>
                <div className="flex items-center gap-3 text-gray-500">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Dashboard en vivo</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 group shadow-sm"
            >
              <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sin Contracargos</h3>
              <p className="text-gray-600 mb-4">
                Elimina el riesgo de contracargos. Las transferencias bancarias son irreversibles y seguras.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-500">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>0% riesgo de contracargos</span>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Pagos irreversibles</span>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Protección total</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-white shadow-sm rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 group"
            >
              <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Soporte 24/7</h3>
              <p className="text-gray-600 mb-4">
                Nuestro equipo técnico está disponible las 24 horas para resolver cualquier consulta.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-500">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Chat en vivo 24/7</span>
                </div>
                <div className="flex items-center gap-3 text-gray-500">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Soporte técnico especializado</span>
                </div>
                <div className="flex items-center gap-3 text-gray-500">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Tiempo de respuesta menor a 5 min</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-white shadow-sm rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 group"
            >
              <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Integración Rápida</h3>
              <p className="text-gray-600 mb-4">
                Implementa nuestro sistema en menos de 24 horas con nuestra API simple y documentación completa.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-500">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Setup en menos de 24 horas</span>
                </div>
                <div className="flex items-center gap-3 text-gray-500">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>API REST simple</span>
                </div>
                <div className="flex items-center gap-3 text-gray-500">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Documentación completa</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-white shadow-sm rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 group"
            >
              <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Experiencia Premium</h3>
              <p className="text-gray-600 mb-4">
                Interfaz intuitiva tanto para ti como para tus clientes. Proceso de pago simple y efectivo.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-500">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>UX optimizada</span>
                </div>
                <div className="flex items-center gap-3 text-gray-500">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Dashboard intuitivo</span>
                </div>
                <div className="flex items-center gap-3 text-gray-500">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Proceso simplificado</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            variants={fadeInUp}
            className="text-center mt-16"
          >
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Listo para transformar tus cobranzas?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Únete a más de 1000 empresas que ya optimizaron sus procesos de cobro
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contacto">
                  <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center gap-2 mx-auto">
                    Comenzar ahora
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="casos-uso" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div 
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-300 mb-6"
            >
              <Star className="h-4 w-4" />
              <span>Casos de éxito</span>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Soluciones para cada
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                tipo de negocio
              </span>
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Desde startups hasta grandes corporaciones, nuestro gateway se adapta a cualquier modelo de negocio
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div 
              variants={fadeInUp}
              className="bg-white shadow-sm rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CreditCard className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">E-commerce</h3>
                <p className="text-gray-600 mb-6">
                  Optimiza las conversiones de tu tienda online con un checkout sin fricciones
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-500">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>Checkout en 1 click</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>Pagos recurrentes automáticos</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>Integración con inventario</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>Analytics de conversión</span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="text-sm text-gray-600 font-semibold mb-1">Mejora promedio:</div>
                  <div className="text-2xl font-bold text-gray-900">+35% conversiones</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-white shadow-sm rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Servicios Profesionales</h3>
                <p className="text-gray-600 mb-6">
                  Automatiza la facturación y cobro de tus servicios profesionales
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-500">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>Facturación automática</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>Recordatorios inteligentes</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>Reportes detallados</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>Gestión de clientes</span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="text-sm text-gray-600 font-semibold mb-1">Reducción promedio:</div>
                  <div className="text-2xl font-bold text-gray-900">-60% tiempo admin</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-white shadow-sm rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Suscripciones</h3>
                <p className="text-gray-600 mb-6">
                  Gestiona cobros recurrentes y planes de suscripción sin complicaciones
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-500">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>Billing automático</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>Gestión de planes</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>Análisis de retención</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>Dunning management</span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="text-sm text-gray-600 font-semibold mb-1">Mejora promedio:</div>
                  <div className="text-2xl font-bold text-gray-900">+25% retención</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-white shadow-sm rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Marketplace</h3>
                <p className="text-gray-600 mb-6">
                  Facilita transacciones entre múltiples vendedores y compradores
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-500">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>Split payments automático</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>Gestión de comisiones</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>KYC automatizado</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>Reportes por vendedor</span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="text-sm text-gray-600 font-semibold mb-1">Reducción promedio:</div>
                  <div className="text-2xl font-bold text-gray-900">-80% tiempo setup</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-white shadow-sm rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Fintech</h3>
                <p className="text-gray-600 mb-6">
                  Infraestructura robusta para aplicaciones financieras y fintechs
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-500">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>APIs de alto rendimiento</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>Compliance automático</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>Monitoreo en tiempo real</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>Escalabilidad ilimitada</span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="text-sm text-gray-600 font-semibold mb-1">Disponibilidad:</div>
                  <div className="text-2xl font-bold text-gray-900">99.99% uptime</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-white shadow-sm rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Empresas</h3>
                <p className="text-gray-600 mb-6">
                  Soluciones enterprise para grandes volúmenes y procesos complejos
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-500">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>Integración ERP/CRM</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>Workflows personalizados</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>Soporte dedicado</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>SLA garantizado</span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="text-sm text-gray-600 font-semibold mb-1">Procesamiento:</div>
                  <div className="text-2xl font-bold text-gray-900">$1M+ diarios</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Success Stories */}
          <motion.div 
            variants={fadeInUp}
            className="mt-20 text-center"
          >
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Casos de éxito reales</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">+150%</div>
                  <div className="text-gray-600">Aumento en conversiones</div>
                  <div className="text-sm text-gray-500 mt-1">E-commerce de moda</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">-70%</div>
                  <div className="text-gray-600">Reducción en costos</div>
                  <div className="text-sm text-gray-500 mt-1">Marketplace B2B</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">99.8%</div>
                  <div className="text-gray-600">Tasa de éxito en pagos</div>
                  <div className="text-sm text-gray-500 mt-1">Fintech de préstamos</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-gray-200 rounded-full px-6 py-2 border border-gray-300 mb-6">
              <Star className="w-4 h-4 text-yellow-500 mr-2" />
              <span className="text-gray-700 text-sm font-medium">Testimonios verificados</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Lo que dicen nuestros <span className="text-blue-600">Clientes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Más de 1000 empresas confían en nuestra plataforma para optimizar sus cobranzas
            </p>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-8 mb-16 text-center"
          >
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-gray-900 font-semibold">4.9/5</span>
              <span className="text-gray-600">(247 reseñas)</span>
            </div>
            <div className="text-gray-400">•</div>
            <div className="text-gray-700">
              <span className="font-semibold text-blue-600">98%</span> de satisfacción del cliente
            </div>
            <div className="text-gray-400">•</div>
            <div className="text-gray-700">
              <span className="font-semibold text-gray-900">1000+</span> empresas activas
            </div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                name: "María González",
                position: "CFO",
                company: "TechStart SRL",
                industry: "E-commerce",
                rating: 5,
                text: "Redujimos los costos de transacción en un 85%. La implementación fue súper rápida y el soporte es excelente. Nuestro flujo de caja mejoró significativamente.",
                metric: "85% menos costos",
                avatar: "MG"
              },
              {
                name: "Carlos Mendoza",
                position: "Gerente de Operaciones",
                company: "Distribuidora Norte",
                industry: "Distribución",
                rating: 5,
                text: "La automatización nos ahorró 20 horas semanales de trabajo manual. Ahora todo se concilia automáticamente y tenemos visibilidad total.",
                metric: "20hs ahorradas/semana",
                avatar: "CM"
              },
              {
                name: "Ana Rodríguez",
                position: "Socia Fundadora",
                company: "Estudio Jurídico AR",
                industry: "Servicios Legales",
                rating: 5,
                text: "Nuestros clientes prefieren las transferencias. Es más seguro y no hay contracargos. La confianza en nuestro sistema de pagos aumentó notablemente.",
                metric: "0% contracargos",
                avatar: "AR"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-400 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-500 text-sm">Verificado</span>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Metric Highlight */}
                <div className="bg-gray-50 rounded-lg p-3 mb-4 border border-gray-200">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">{testimonial.metric}</div>
                    <div className="text-xs text-gray-500">Resultado obtenido</div>
                  </div>
                </div>

                {/* Author Info */}
                <div className="flex items-center space-x-3 border-t border-gray-200 pt-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 font-semibold">{testimonial.name}</p>
                    <p className="text-blue-600 text-sm">{testimonial.position}</p>
                    <p className="text-gray-500 text-xs">{testimonial.company} • {testimonial.industry}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>


        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-gray-200 rounded-full px-6 py-2 border border-gray-300 mb-6">
              <span className="text-gray-700 text-sm font-medium">Resolvemos tus dudas</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Preguntas <span className="text-blue-600">Frecuentes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Todo lo que necesitas saber sobre nuestra plataforma de cobranzas
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              {
                question: "¿Cuánto tiempo toma la implementación?",
                answer: "La implementación básica toma entre 24-48 horas. Nuestro equipo técnico te acompaña en todo el proceso para asegurar una integración perfecta.",
                category: "Implementación",
                icon: Clock
              },
              {
                question: "¿Qué comisiones cobran?",
                answer: "Nuestras comisiones son hasta 10x más bajas que las tarjetas tradicionales. El costo exacto depende del volumen de transacciones. Contactanos para una cotización personalizada.",
                category: "Precios",
                icon: TrendingUp
              },
              {
                question: "¿Es seguro para mis clientes?",
                answer: "Absolutamente. Las transferencias bancarias son el método más seguro disponible. No hay riesgo de contracargos y todos los pagos son en firme.",
                category: "Seguridad",
                icon: Shield
              },
              {
                question: "¿Necesito cambiar mi sistema actual?",
                answer: "No. Nuestra API se integra fácilmente con cualquier sistema existente. Mantienes tu flujo de trabajo actual con beneficios adicionales.",
                category: "Integración",
                icon: Zap
              },
              {
                question: "¿Qué tipos de transferencias soportan?",
                answer: "Soportamos transferencias inmediatas, diferidas, y programadas. También manejamos débitos automáticos y pagos recurrentes con total flexibilidad.",
                category: "Funcionalidades",
                icon: CreditCard
              },
              {
                question: "¿Ofrecen soporte técnico 24/7?",
                answer: "Sí, nuestro equipo de soporte está disponible 24/7 para resolver cualquier consulta. Además, tenemos documentación completa y un centro de ayuda.",
                category: "Soporte",
                icon: Users
              }
            ].map((faq, index) => {
              const IconComponent = faq.icon;
              return (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="group"
                >
                  <div className="bg-white rounded-xl border border-gray-200 hover:border-blue-400 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                            <IconComponent className="w-6 h-6 text-blue-600" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                              {faq.category}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                            {faq.question}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Contact CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ¿No encontraste lo que buscabas?
              </h3>
              <p className="text-gray-600 mb-6">
                Nuestro equipo de expertos está listo para resolver todas tus dudas
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contacto">
                  <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-blue-800 transition-all duration-300">
                    Contactar Especialista
                  </button>
                </Link>

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ¿Listo para <span className="text-blue-600">revolucionar</span> tus cobranzas?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Únete a más de 1000 empresas que ya confían en nosotros
            </p>
            <div className="flex justify-center">
              <Link href="/contacto">
                <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-12 py-4 rounded-full font-semibold text-xl hover:from-blue-600 hover:to-blue-800 transition-all duration-300 shadow-2xl">
                  Solicitar Consulta Gratuita
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      </main>
    </div>
  );
}
