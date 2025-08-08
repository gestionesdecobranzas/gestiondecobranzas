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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className={`fixed top-2.5 left-1/2 transform -translate-x-1/2 w-[90%] z-50 transition-all duration-300 rounded-2xl ${
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
              <Link href="/servicios" className={`${isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/80 hover:text-white'} transition-colors font-medium`}>Servicios</Link>
              <a href="#ventajas" className={`${isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/80 hover:text-white'} transition-colors font-medium`}>Ventajas</a>
              <a href="#casos-uso" className={`${isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/80 hover:text-white'} transition-colors font-medium`}>Casos de Uso</a>

              <Link href="/contacto" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 rounded-full transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
                Contacto
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden ${isScrolled ? 'text-gray-700' : 'text-white'} p-2 rounded-lg hover:bg-white/10 transition-colors`}
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
              className={`md:hidden border-t ${isScrolled ? 'border-gray-200' : 'border-white/20'} py-4`}
            >
              <div className="flex flex-col space-y-4">
                <Link 
                  href="/servicios" 
                  className={`${isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/80 hover:text-white'} transition-colors font-medium py-2`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Servicios
                </Link>
                <a 
                  href="#ventajas" 
                  className={`${isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/80 hover:text-white'} transition-colors font-medium py-2`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ventajas
                </a>
                <a 
                  href="#casos-uso" 
                  className={`${isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/80 hover:text-white'} transition-colors font-medium py-2`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Casos de Uso
                </a>

                <Link 
                  href="/contacto" 
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-semibold text-center transition-all duration-300"
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
                className="flex justify-center items-center gap-4 mb-6 text-sm text-white/60"
              >
                <div className="flex items-center gap-1">
                  <Shield className="h-4 w-4 text-green-400" />
                  <span>Certificado PCI DSS</span>
                </div>
                <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full"></div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span>4.9/5 en reseñas</span>
                </div>
                <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full"></div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4 text-blue-400" />
                  <span>+1000 empresas</span>
                </div>
              </motion.div>

              <motion.h1 
                variants={fadeInUp}
                className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              >
                Revoluciona tus
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  {currentText}
                  {currentText === '' && <span className="text-transparent">|</span>}
                </span>
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto"
              >
                Gateway de recaudación inteligente. Hasta <strong className="text-yellow-400">10x más económico</strong> que tarjetas y QR.
                Transferencias automáticas que transforman tu negocio.
              </motion.p>

              {/* Value Proposition Pills */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap justify-center gap-3 mb-8"
              >
                <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium border border-green-500/30">
                  ✅ Sin contracargos
                </span>
                <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/30">
                  ⚡ Acreditación inmediata
                </span>
                <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium border border-purple-500/30">
                  🔒 100% seguro
                </span>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
              >
                <Link href="/contacto">
                  <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center gap-2 shadow-2xl hover:shadow-blue-500/25 hover:scale-105">
                    Comenzar Ahora
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>

                <Link href="#ventajas">
                  <button className="text-white/80 hover:text-white px-8 py-4 font-semibold text-lg transition-all duration-300 underline underline-offset-4">
                    Conocer Más
                  </button>
                </Link>
              </motion.div>

              {/* Social Proof */}
              <motion.div 
                variants={fadeInUp}
                className="text-center text-white/60 text-sm"
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
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
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Números que hablan por sí solos
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-white/70 max-w-2xl mx-auto"
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
              className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300 group"
            >
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">10x</div>
              <div className="text-white/80 font-medium">Más Económico</div>
              <div className="text-white/60 text-sm mt-1">vs. tarjetas de crédito</div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp} 
              className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30 hover:border-green-400/50 transition-all duration-300 group"
            >
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">99.9%</div>
              <div className="text-white/80 font-medium">Uptime</div>
              <div className="text-white/60 text-sm mt-1">Disponibilidad garantizada</div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp} 
              className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group"
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-white/80 font-medium">Soporte</div>
              <div className="text-white/60 text-sm mt-1">Atención especializada</div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp} 
              className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group"
            >
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">1000+</div>
              <div className="text-white/80 font-medium">Empresas</div>
              <div className="text-white/60 text-sm mt-1">Confían en nosotros</div>
            </motion.div>
          </motion.div>

          {/* Additional Trust Elements */}
          <motion.div 
            variants={fadeInUp}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div className="flex flex-col items-center">
              <Shield className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Máxima Seguridad</h3>
              <p className="text-white/70 text-sm">Certificación PCI DSS Level 1 y encriptación de extremo a extremo</p>
            </div>
            <div className="flex flex-col items-center">
              <Zap className="h-12 w-12 text-yellow-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Procesamiento Instantáneo</h3>
              <p className="text-white/70 text-sm">Transferencias procesadas en tiempo real, 24/7</p>
            </div>
            <div className="flex flex-col items-center">
              <TrendingUp className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Crecimiento Garantizado</h3>
              <p className="text-white/70 text-sm">Aumenta tus conversiones hasta un 40% con nuestro sistema</p>
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
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Transferencias
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Inteligentes
              </span>
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-white/70 max-w-3xl mx-auto mb-8"
            >
              Automatiza completamente tus cobranzas con nuestro sistema de transferencias bancarias.
              Sin intermediarios, sin comisiones altas, sin complicaciones.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <Link href="/servicios">
                <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center gap-2">
                  Ver todos los servicios
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/contacto">
                <button className="border-2 border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
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
              className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-300 group hover:scale-105"
            >
              <div className="bg-yellow-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Transferencias Instantáneas</h3>
              <p className="text-white/70 mb-6">Procesa pagos en tiempo real con nuestro sistema de transferencias bancarias automatizadas. Sin esperas, sin demoras.</p>
              <ul className="space-y-2 text-white/60">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Acreditación inmediata</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Disponible 24/7</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Sin límites de monto</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group hover:scale-105"
            >
              <div className="bg-blue-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <CreditCard className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Gateway Inteligente</h3>
              <p className="text-white/70 mb-6">Integra múltiples métodos de pago en una sola plataforma. Optimiza automáticamente las rutas de pago para maximizar conversiones.</p>
              <ul className="space-y-2 text-white/60">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Múltiples métodos de pago</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Optimización automática</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>API REST completa</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 group hover:scale-105"
            >
              <div className="bg-green-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Máxima Seguridad</h3>
              <p className="text-white/70 mb-6">Protección de nivel bancario con certificación PCI DSS. Encriptación de extremo a extremo y monitoreo 24/7.</p>
              <ul className="space-y-2 text-white/60">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Certificación PCI DSS</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Encriptación E2E</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Monitoreo 24/7</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="ventajas" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
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
              className="inline-flex items-center gap-2 bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium border border-green-500/30 mb-6"
            >
              <TrendingUp className="h-4 w-4" />
              <span>Ventajas competitivas</span>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              ¿Por qué elegir
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                nuestro sistema?
              </span>
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-white/70 max-w-3xl mx-auto"
            >
              Comparamos nuestro sistema con las alternativas tradicionales para que veas la diferencia.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          >
            {/* Comparison Table */}
            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Métodos Tradicionales</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-red-300">
                  <X className="w-5 h-5 text-red-400" />
                  <span>Comisiones del 3-6% por transacción</span>
                </div>
                <div className="flex items-center gap-3 text-red-300">
                  <X className="w-5 h-5 text-red-400" />
                  <span>Acreditación en 24-48 horas</span>
                </div>
                <div className="flex items-center gap-3 text-red-300">
                  <X className="w-5 h-5 text-red-400" />
                  <span>Riesgo de contracargos</span>
                </div>
                <div className="flex items-center gap-3 text-red-300">
                  <X className="w-5 h-5 text-red-400" />
                  <span>Límites de transacción</span>
                </div>
                <div className="flex items-center gap-3 text-red-300">
                  <X className="w-5 h-5 text-red-400" />
                  <span>Configuración compleja</span>
                </div>
                <div className="flex items-center gap-3 text-red-300">
                  <X className="w-5 h-5 text-red-400" />
                  <span>Soporte limitado</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Nuestro Sistema</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-green-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Comisiones desde 0.5%</span>
                </div>
                <div className="flex items-center gap-3 text-green-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Acreditación instantánea</span>
                </div>
                <div className="flex items-center gap-3 text-green-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Sin riesgo de contracargos</span>
                </div>
                <div className="flex items-center gap-3 text-green-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Sin límites de monto</span>
                </div>
                <div className="flex items-center gap-3 text-green-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Integración en minutos</span>
                </div>
                <div className="flex items-center gap-3 text-green-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Soporte 24/7 especializado</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ROI Calculator */}
          <motion.div 
            variants={fadeInUp}
            className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 text-center"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Calcula tu ahorro</h3>
            <p className="text-white/70 mb-6">Una empresa que procesa $1,000,000 mensuales puede ahorrar hasta:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-500/30">
                <div className="text-3xl font-bold text-yellow-400 mb-2">$25,000</div>
                <div className="text-white/80">Ahorro mensual</div>
                <div className="text-white/60 text-sm">vs. tarjetas de crédito</div>
              </div>
              <div className="bg-green-500/20 rounded-xl p-6 border border-green-500/30">
                <div className="text-3xl font-bold text-green-400 mb-2">$300,000</div>
                <div className="text-white/80">Ahorro anual</div>
                <div className="text-white/60 text-sm">en comisiones</div>
              </div>
              <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-500/30">
                <div className="text-3xl font-bold text-blue-400 mb-2">ROI 500%</div>
                <div className="text-white/80">Retorno de inversión</div>
                <div className="text-white/60 text-sm">en el primer año</div>
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
              className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium border border-purple-500/30 mb-6"
            >
              <Users className="h-4 w-4" />
              <span>Casos de uso</span>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Perfecto para
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                tu industria
              </span>
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-white/70 max-w-3xl mx-auto"
            >
              Nuestro sistema se adapta a las necesidades específicas de diferentes sectores.
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
              className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group hover:scale-105"
            >
              <div className="bg-blue-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <CreditCard className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">E-commerce</h3>
              <p className="text-white/70 mb-4">Optimiza las conversiones de tu tienda online con pagos instantáneos y sin fricciones.</p>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>• Checkout optimizado</li>
                <li>• Recuperación de carritos abandonados</li>
                <li>• Integración con plataformas populares</li>
              </ul>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 group hover:scale-105"
            >
              <div className="bg-green-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">SaaS</h3>
              <p className="text-white/70 mb-4">Automatiza la facturación recurrente y mejora la retención de clientes.</p>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>• Suscripciones automáticas</li>
                <li>• Facturación inteligente</li>
                <li>• Métricas de retención</li>
              </ul>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group hover:scale-105"
            >
              <div className="bg-purple-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Marketplaces</h3>
              <p className="text-white/70 mb-4">Facilita los pagos entre compradores y vendedores con split payments automáticos.</p>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>• Split payments automáticos</li>
                <li>• Gestión de comisiones</li>
                <li>• Pagos a múltiples destinatarios</li>
              </ul>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-300 group hover:scale-105"
            >
              <div className="bg-yellow-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Servicios</h3>
              <p className="text-white/70 mb-4">Cobra por tus servicios profesionales de manera rápida y segura.</p>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>• Facturación profesional</li>
                <li>• Pagos por horas/proyectos</li>
                <li>• Reportes detallados</li>
              </ul>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-br from-red-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20 hover:border-red-400/40 transition-all duration-300 group hover:scale-105"
            >
              <div className="bg-red-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Fintech</h3>
              <p className="text-white/70 mb-4">Integra nuestro sistema en tu aplicación financiera para ofrecer más valor.</p>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>• API completa y documentada</li>
                <li>• Webhooks en tiempo real</li>
                <li>• Compliance bancario</li>
              </ul>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-br from-indigo-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300 group hover:scale-105"
            >
              <div className="bg-indigo-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Empresas</h3>
              <p className="text-white/70 mb-4">Optimiza los procesos de cobranza de tu empresa con automatización inteligente.</p>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>• Cobranza automatizada</li>
                <li>• Integración con ERP</li>
                <li>• Reportes ejecutivos</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              ¿Listo para revolucionar tus cobranzas?
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            >
              Únete a más de 1000 empresas que ya transformaron sus procesos de pago.
              Comienza hoy mismo y ve la diferencia.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/contacto">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105">
                  Comenzar Gratis
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              
              <Link href="/contacto">
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                  Solicitar Demo
                </button>
              </Link>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="mt-8 text-white/80 text-sm"
            >
              <p>✅ Sin costos de setup • ✅ Integración en 24 horas • ✅ Soporte especializado</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
}