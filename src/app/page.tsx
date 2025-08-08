'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, CreditCard, Zap, Shield, TrendingUp, Users, Clock, Menu, X, Star } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect, useMemo } from 'react';
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
  
  const words = useMemo(() => ['Cobranzas', 'Servicios', 'Transferencias'], []);

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
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 group hover:scale-105 shadow-sm"
            >
              <div className="bg-blue-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <CreditCard className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Gateway Inteligente</h3>
              <p className="text-gray-600 mb-6">
                Integra múltiples métodos de pago en una sola plataforma. 
                Optimiza automáticamente las rutas de pago para maximizar conversiones.
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
                  <span>Dashboard analítico</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link href="/servicios#gateway">
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
                <Shield className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Máxima Seguridad</h3>
              <p className="text-gray-600 mb-6">
                Cumplimiento PCI DSS Level 1. Encriptación de extremo a extremo. 
                Monitoreo 24/7 con detección de fraude en tiempo real.
              </p>
              <ul className="space-y-3 text-gray-500">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Certificación PCI DSS</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Tokenización avanzada</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Detección de fraude IA</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link href="/servicios#seguridad">
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
      <section id="ventajas" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
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
              <TrendingUp className="h-4 w-4" />
              <span>Ventajas competitivas</span>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              ¿Por qué elegir
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Transferencias?
              </span>
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Descubre las ventajas que hacen de las transferencias bancarias 
              la mejor opción para tu negocio en Argentina.
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
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 group shadow-sm"
            >
              <div className="bg-blue-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hasta 10x más económico</h3>
              <p className="text-gray-600 mb-4">
                Comisiones desde 0.5% vs 3-6% de tarjetas de crédito. 
                Ahorra miles de pesos en comisiones mensuales.
              </p>
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="text-sm text-gray-500 mb-2">Ejemplo: Facturación $1M/mes</div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Tarjetas:</span>
                  <span className="font-bold text-red-600">$50.000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Transferencias:</span>
                  <span className="font-bold text-green-600">$5.000</span>
                </div>
                <div className="border-t border-gray-300 mt-2 pt-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">Ahorro:</span>
                    <span className="font-bold text-blue-600">$45.000</span>
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">Acreditación inmediata</h3>
              <p className="text-gray-600 mb-4">
                El dinero llega a tu cuenta al instante, 24/7. 
                Sin esperas, sin retenciones, sin sorpresas.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Transferencias inmediatas</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Disponible 24/7</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Sin retenciones</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 group shadow-sm"
            >
              <div className="bg-blue-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sin contracargos</h3>
              <p className="text-gray-600 mb-4">
                Las transferencias son irreversibles. Elimina el riesgo 
                de contracargos y disputas fraudulentas.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Pagos irreversibles</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Sin disputas</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Protección total</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 group shadow-sm"
            >
              <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mayor conversión</h3>
              <p className="text-gray-600 mb-4">
                Los argentinos prefieren transferencias. Aumenta tus ventas 
                ofreciendo el método de pago más popular.
              </p>
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="text-sm text-gray-500 mb-2">Preferencias de pago en Argentina</div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Transferencias</span>
                    <span className="font-bold text-blue-600">68%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Tarjetas</span>
                    <span className="font-bold text-gray-600">24%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Otros</span>
                    <span className="font-bold text-gray-600">8%</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 group shadow-sm"
            >
              <div className="bg-blue-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Implementación rápida</h3>
              <p className="text-gray-600 mb-4">
                Integra nuestro sistema en minutos con nuestra API REST. 
                Documentación completa y soporte técnico incluido.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">API REST simple</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">SDKs disponibles</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Soporte técnico 24/7</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 group shadow-sm"
            >
              <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Escalabilidad total</h3>
              <p className="text-gray-600 mb-4">
                Desde startups hasta grandes corporaciones. Nuestra infraestructura 
                crece contigo sin límites de volumen.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Sin límites de volumen</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Infraestructura cloud</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Auto-escalado</span>
                </div>
              </div>
            </motion.div>
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
              <Users className="h-4 w-4" />
              <span>Casos de uso</span>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Perfecto para
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                tu industria
              </span>
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Desde e-commerce hasta servicios profesionales, nuestro sistema 
              se adapta a las necesidades específicas de cada sector.
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
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 group shadow-sm"
            >
              <div className="bg-blue-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <CreditCard className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">E-commerce</h3>
              <p className="text-gray-600 mb-6">
                Optimiza tus ventas online con transferencias automáticas. 
                Reduce carritos abandonados y aumenta la conversión.
              </p>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li>• Checkout optimizado</li>
                <li>• Confirmación automática</li>
                <li>• Integración con marketplaces</li>
                <li>• Gestión de inventario</li>
              </ul>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 group shadow-sm"
            >
              <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Servicios Profesionales</h3>
              <p className="text-gray-600 mb-6">
                Cobra honorarios y servicios de forma profesional. 
                Facturas automáticas y seguimiento de pagos.
              </p>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li>• Facturación automática</li>
                <li>• Recordatorios de pago</li>
                <li>• Reportes detallados</li>
                <li>• Integración contable</li>
              </ul>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 group shadow-sm"
            >
              <div className="bg-blue-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">SaaS y Suscripciones</h3>
              <p className="text-gray-600 mb-6">
                Automatiza cobros recurrentes con máxima confiabilidad. 
                Reduce la rotación y mejora el cash flow.
              </p>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li>• Cobros recurrentes</li>
                <li>• Gestión de suscripciones</li>
                <li>• Dunning management</li>
                <li>• Analytics avanzados</li>
              </ul>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 group shadow-sm"
            >
              <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fintech</h3>
              <p className="text-gray-600 mb-6">
                Potencia tu aplicación financiera con nuestro gateway. 
                APIs robustas y compliance garantizado.
              </p>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li>• APIs RESTful</li>
                <li>• Webhooks en tiempo real</li>
                <li>• Compliance PCI DSS</li>
                <li>• Sandbox completo</li>
              </ul>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 group shadow-sm"
            >
              <div className="bg-blue-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Marketplaces</h3>
              <p className="text-gray-600 mb-6">
                Facilita transacciones entre compradores y vendedores. 
                Split payments y gestión de comisiones automática.
              </p>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li>• Split payments</li>
                <li>• Gestión de comisiones</li>
                <li>• Escrow automático</li>
                <li>• Multi-vendor support</li>
              </ul>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 group shadow-sm"
            >
              <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Educación</h3>
              <p className="text-gray-600 mb-6">
                Simplifica el pago de cursos y matrículas. 
                Planes de pago flexibles y gestión estudiantil.
              </p>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li>• Planes de pago</li>
                <li>• Gestión de matrículas</li>
                <li>• Becas y descuentos</li>
                <li>• Portal estudiantil</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              ¿Listo para
              <span className="block text-blue-200">
                revolucionar
              </span>
              tus cobranzas?
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            >
              Únete a más de 1000 empresas que ya transformaron sus cobranzas 
              con nuestro sistema de transferencias inteligentes.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/contacto">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 flex items-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105">
                  Comenzar Ahora
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              
              <Link href="/servicios">
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                  Ver Servicios
                </button>
              </Link>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="mt-8 text-blue-200 text-sm"
            >
              <p>✅ Sin costos de setup • ✅ Integración en 24hs • ✅ Soporte 24/7</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}