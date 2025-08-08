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
            <div className="flex items-center">
              <Image
                src={LogoSVG}
                alt="Gestión de Cobranzas SAS"
                width={50}
                height={50}
                className="mr-3"
              />
              <span className="text-xl font-bold text-slate-800">Gestión de Cobranzas</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#servicios" className="text-slate-700 hover:text-blue-600 transition-colors">
                Servicios
              </Link>
              <Link href="#nosotros" className="text-slate-700 hover:text-blue-600 transition-colors">
                Nosotros
              </Link>
              <Link href="#testimonios" className="text-slate-700 hover:text-blue-600 transition-colors">
                Testimonios
              </Link>
              <Link href="/contacto" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Contacto
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200 pt-4 pb-4"
            >
              <div className="flex flex-col space-y-4">
                <Link href="#servicios" className="text-slate-700 hover:text-blue-600 transition-colors">
                  Servicios
                </Link>
                <Link href="#nosotros" className="text-slate-700 hover:text-blue-600 transition-colors">
                  Nosotros
                </Link>
                <Link href="#testimonios" className="text-slate-700 hover:text-blue-600 transition-colors">
                  Testimonios
                </Link>
                <Link href="/contacto" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors text-center">
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
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6"
              >
                Gestión de{' '}
                <span className="text-blue-600 relative">
                  {currentText}
                  <span className="animate-pulse">|</span>
                </span>
                <br />
                <span className="text-slate-700">Profesional</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed"
              >
                Optimizamos tu flujo de caja con soluciones integrales de cobranza, 
                servicios financieros y transferencias seguras.
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Link 
                  href="/contacto"
                  className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Comenzar Ahora
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="#servicios"
                  className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                >
                  Ver Servicios
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
            >
              <motion.div variants={fadeInUp} className="">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-slate-600">Clientes Satisfechos</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="">
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-slate-600">Tasa de Recuperación</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="">
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-slate-600">Soporte Disponible</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="">
                <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-slate-600">Años de Experiencia</div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicios" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
              >
                Nuestros Servicios
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-slate-600 max-w-3xl mx-auto"
              >
                Soluciones integrales diseñadas para optimizar tu gestión financiera
              </motion.p>
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
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <CreditCard className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Gestión de Cobranzas</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Recuperación eficiente de cartera vencida con estrategias personalizadas y tecnología avanzada.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-600">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Cobranza prejudicial y judicial</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-600">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Reportes detallados en tiempo real</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-600">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Estrategias de negociación</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <Zap className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Servicios Financieros</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Soluciones financieras integrales para optimizar el flujo de caja de tu empresa.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-600">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Factoring y descuento de cartera</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-600">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Análisis de riesgo crediticio</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-600">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Consultoría financiera</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <Shield className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Transferencias Seguras</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Procesamiento seguro y eficiente de transferencias nacionales e internacionales.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-600">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Transferencias nacionales e internacionales</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-600">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Seguridad bancaria garantizada</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-600">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Tarifas competitivas</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="nosotros" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  15+ Años de Experiencia en Gestión Financiera
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Somos una empresa especializada en la gestión integral de cobranzas y servicios financieros, 
                  con un equipo de profesionales altamente capacitados y tecnología de vanguardia.
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Nuestro compromiso es ayudar a las empresas a optimizar su flujo de caja y reducir la cartera vencida 
                  mediante estrategias personalizadas y un servicio de excelencia.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                    <div className="text-slate-600">Clientes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                    <div className="text-slate-600">Efectividad</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-50 to-slate-100 p-8 rounded-2xl">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <TrendingUp className="w-8 h-8 text-blue-600 mb-4" />
                      <h4 className="font-bold text-slate-900 mb-2">Crecimiento</h4>
                      <p className="text-slate-600 text-sm">Incremento constante en recuperación</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <Users className="w-8 h-8 text-blue-600 mb-4" />
                      <h4 className="font-bold text-slate-900 mb-2">Equipo</h4>
                      <p className="text-slate-600 text-sm">Profesionales especializados</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <Shield className="w-8 h-8 text-blue-600 mb-4" />
                      <h4 className="font-bold text-slate-900 mb-2">Seguridad</h4>
                      <p className="text-slate-600 text-sm">Protección de datos garantizada</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <Clock className="w-8 h-8 text-blue-600 mb-4" />
                      <h4 className="font-bold text-slate-900 mb-2">Rapidez</h4>
                      <p className="text-slate-600 text-sm">Respuesta inmediata</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
              >
                Nuestro Proceso
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-slate-600 max-w-3xl mx-auto"
              >
                Un enfoque sistemático y eficiente para la gestión de cobranzas
              </motion.p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-4 gap-8"
            >
              <motion.div variants={fadeInUp} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  1
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Análisis</h3>
                <p className="text-slate-600">
                  Evaluamos tu cartera y definimos estrategias personalizadas
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  2
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Implementación</h3>
                <p className="text-slate-600">
                  Ejecutamos las estrategias de cobranza con nuestro equipo especializado
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  3
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Seguimiento</h3>
                <p className="text-slate-600">
                  Monitoreamos constantemente los resultados y ajustamos estrategias
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  4
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Resultados</h3>
                <p className="text-slate-600">
                  Entregamos reportes detallados y recuperación efectiva de cartera
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonios" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
              >
                Lo que Dicen Nuestros Clientes
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-slate-600 max-w-3xl mx-auto"
              >
                Testimonios reales de empresas que han transformado su gestión financiera
              </motion.p>
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
                className="bg-slate-50 p-8 rounded-2xl border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic">
                  "Gestión de Cobranzas SAS transformó completamente nuestra recuperación de cartera. 
                  En 6 meses aumentamos la recuperación en un 40%."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    MC
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">María Contreras</div>
                    <div className="text-slate-600 text-sm">Directora Financiera, TechCorp</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="bg-slate-50 p-8 rounded-2xl border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic">
                  "El servicio es excepcional. Su equipo es profesional y los resultados hablan por sí solos. 
                  Altamente recomendados."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    JR
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Juan Rodríguez</div>
                    <div className="text-slate-600 text-sm">Gerente General, Comercial Andina</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="bg-slate-50 p-8 rounded-2xl border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic">
                  "Trabajar con ellos ha sido una excelente decisión. Su tecnología y metodología 
                  nos han permitido optimizar nuestros procesos."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    AS
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Ana Sánchez</div>
                    <div className="text-slate-600 text-sm">CFO, Grupo Empresarial</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                Tecnología de Vanguardia
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                Utilizamos las mejores herramientas tecnológicas para garantizar resultados óptimos
              </motion.p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              <motion.div 
                variants={fadeInUp}
                className="text-center p-6 bg-slate-800 rounded-xl border border-slate-700"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Seguridad Avanzada</h3>
                <p className="text-gray-400 text-sm">Encriptación de datos y protocolos de seguridad bancaria</p>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="text-center p-6 bg-slate-800 rounded-xl border border-slate-700"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Analytics Avanzado</h3>
                <p className="text-gray-400 text-sm">Inteligencia artificial para análisis predictivo</p>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="text-center p-6 bg-slate-800 rounded-xl border border-slate-700"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Automatización</h3>
                <p className="text-gray-400 text-sm">Procesos automatizados para mayor eficiencia</p>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="text-center p-6 bg-slate-800 rounded-xl border border-slate-700"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Tiempo Real</h3>
                <p className="text-gray-400 text-sm">Monitoreo y reportes en tiempo real</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
              >
                ¿Por Qué Elegirnos?
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-slate-600 max-w-3xl mx-auto"
              >
                Características que nos distinguen en el mercado de gestión financiera
              </motion.p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <motion.div variants={fadeInUp} className="mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Experiencia Comprobada</h3>
                      <p className="text-slate-600">Más de 15 años en el mercado con resultados consistentes y clientes satisfechos.</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Cumplimiento Legal</h3>
                      <p className="text-slate-600">Operamos bajo estricto cumplimiento de la normativa legal vigente.</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Equipo Especializado</h3>
                      <p className="text-slate-600">Profesionales certificados en gestión de cobranzas y servicios financieros.</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Resultados Medibles</h3>
                      <p className="text-slate-600">Reportes detallados y métricas claras para evaluar el rendimiento.</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                variants={fadeInUp}
                className="bg-gradient-to-br from-blue-50 to-slate-100 p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Beneficios Clave</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-500">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>Reducción de cartera vencida hasta 60%</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>Mejora del flujo de caja inmediata</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>Reportes en tiempo real 24/7</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>Soporte técnico especializado</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>Integración con sistemas existentes</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>Tarifas competitivas del mercado</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>Estrategias personalizadas</span>
                  </div>
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
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                ¿Listo para Optimizar tu Gestión Financiera?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Únete a más de 500 empresas que ya confían en nosotros para gestionar sus cobranzas y servicios financieros.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contacto"
                  className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Solicitar Consulta Gratuita
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="#servicios"
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Ver Más Servicios
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}