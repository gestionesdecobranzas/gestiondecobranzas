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
            </motion.div>
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
                icon: <CreditCard className="w-8 h-8" />,
                title: "Gateway de Pagos",
                description: "Acepta todos los métodos de pago con las comisiones más bajas del mercado.",
                features: ["Tarjetas de crédito/débito", "Transferencias bancarias", "Billeteras digitales", "Pagos en efectivo"]
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Máxima Seguridad",
                description: "Protección completa con certificación PCI DSS y detección de fraude.",
                features: ["Certificación PCI DSS", "Tokenización", "3D Secure", "Detección de fraude"]
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Procesamiento Instantáneo",
                description: "Confirmación y acreditación inmediata de todas las transacciones.",
                features: ["Tiempo real", "24/7 disponible", "API REST", "Webhooks"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-lg group"
              >
                <div className="bg-blue-600 p-4 rounded-xl w-fit mb-6 text-white group-hover:bg-blue-700 transition-colors duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="ventajas" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              ¿Por qué elegir
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                nuestro sistema?
              </span>
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Revoluciona tu negocio con la tecnología de pagos más avanzada y económica del mercado
            </motion.p>
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
                icon: <TrendingUp className="w-8 h-8" />,
                title: "10x Más Económico",
                description: "Reduce tus costos de transacción hasta 10 veces comparado con tarjetas de crédito tradicionales.",
                highlight: "Ahorra hasta 90%"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Sin Contracargos",
                description: "Las transferencias bancarias eliminan completamente el riesgo de contracargos y disputas.",
                highlight: "0% de riesgo"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Acreditación Inmediata",
                description: "Recibe el dinero al instante sin esperas ni demoras en la acreditación.",
                highlight: "Tiempo real"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Experiencia Superior",
                description: "Interfaz intuitiva que mejora la conversión y satisfacción de tus clientes.",
                highlight: "+40% conversión"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Disponibilidad 24/7",
                description: "Sistema operativo las 24 horas, los 7 días de la semana, sin interrupciones.",
                highlight: "99.9% uptime"
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Implementación Rápida",
                description: "Integración completa en menos de 48 horas con nuestro equipo especializado.",
                highlight: "< 48 horas"
              }
            ].map((advantage, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-lg group"
              >
                <div className="bg-blue-600 p-4 rounded-xl w-fit mb-6 text-white group-hover:bg-blue-700 transition-colors duration-300">
                  {advantage.icon}
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{advantage.title}</h3>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {advantage.highlight}
                  </span>
                </div>
                
                <p className="text-gray-600">{advantage.description}</p>
              </motion.div>
            ))}
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
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Casos de
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Uso Reales
              </span>
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Descubre cómo empresas de diferentes sectores están transformando sus cobranzas
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                title: "E-commerce",
                description: "Tiendas online que redujeron sus costos de transacción en un 85% y eliminaron completamente los contracargos.",
                metrics: ["85% menos costos", "0 contracargos", "+30% conversión"],
                icon: <CreditCard className="w-6 h-6" />
              },
              {
                title: "Servicios Profesionales",
                description: "Consultoras y agencias que automatizaron completamente sus procesos de facturación y cobranza.",
                metrics: ["100% automatizado", "48h implementación", "+50% eficiencia"],
                icon: <Users className="w-6 h-6" />
              },
              {
                title: "Suscripciones",
                description: "Plataformas SaaS que mejoraron su retención de clientes y redujeron la fricción en los pagos recurrentes.",
                metrics: ["+95% retención", "Pagos automáticos", "0% fricción"],
                icon: <Zap className="w-6 h-6" />
              },
              {
                title: "Marketplace",
                description: "Plataformas que conectan compradores y vendedores con split de pagos automático y liquidación instantánea.",
                metrics: ["Split automático", "Liquidación inmediata", "Multi-vendor"],
                icon: <TrendingUp className="w-6 h-6" />
              }
            ].map((useCase, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-blue-600 p-3 rounded-lg text-white">
                    {useCase.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{useCase.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {useCase.metrics.map((metric, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {metric}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para revolucionar tus cobranzas?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Únete a más de 1000 empresas que ya transformaron su negocio con nuestro sistema de pagos inteligente
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contacto">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 shadow-xl">
                  Comenzar Ahora
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              
              <Link href="/servicios">
                <button className="text-white border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                  Ver Servicios
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}