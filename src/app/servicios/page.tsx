'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, CreditCard, Smartphone, Globe, Shield, Zap, BarChart3, Users, CheckCircle, ArrowRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import Image from 'next/image';
import LogoSVG from '@/images/Logo Gestion de cobranzas SAS  -color.png';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ServicesPage() {
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Nuestros <span className="text-blue-600">Servicios</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones completas de gestión de pagos diseñadas para impulsar tu negocio
          </p>
        </motion.div>

        {/* Main Services */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20"
        >
          {[
            {
              icon: <CreditCard className="w-8 h-8" />,
              title: "Gateway de Pagos",
              description: "Procesa pagos con tarjetas de crédito, débito y métodos alternativos con las comisiones más bajas del mercado.",
              features: [
                "Integración API REST",
                "Checkout personalizable",
                "Pagos en una sola página",
                "Soporte multi-moneda",
                "Tokenización segura"
              ],
              highlight: "Comisiones desde 1.5%"
            },
            {
              icon: <Smartphone className="w-8 h-8" />,
              title: "Transferencias Bancarias",
              description: "Acepta transferencias bancarias instantáneas con confirmación automática y conciliación en tiempo real.",
              features: [
                "CBU/CVU automático",
                "Confirmación instantánea",
                "Conciliación automática",
                "QR de pago",
                "Notificaciones push"
              ],
              highlight: "Sin contracargos"
            },
            {
              icon: <Globe className="w-8 h-8" />,
              title: "Pagos Recurrentes",
              description: "Automatiza cobros de suscripciones y servicios con gestión inteligente de reintentos y notificaciones.",
              features: [
                "Facturación automática",
                "Gestión de reintentos",
                "Notificaciones automáticas",
                "Análisis de churn",
                "Recuperación de pagos"
              ],
              highlight: "Retención +95%"
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: "Seguridad Avanzada",
              description: "Protección completa con certificación PCI DSS, tokenización y detección de fraude en tiempo real.",
              features: [
                "Certificación PCI DSS",
                "Tokenización de datos",
                "Detección de fraude",
                "3D Secure 2.0",
                "Monitoreo 24/7"
              ],
              highlight: "99.9% Uptime"
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-600 p-3 rounded-lg text-white">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  <span className="text-blue-600 font-semibold">{service.highlight}</span>
                </div>
              </div>
              
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

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Servicios <span className="text-blue-600">Adicionales</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Analytics Avanzado",
                description: "Dashboard en tiempo real con métricas detalladas, reportes personalizables y análisis predictivo."
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Soporte Dedicado",
                description: "Equipo de soporte técnico 24/7, account manager asignado y documentación completa."
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Integración Express",
                description: "Implementación en menos de 48 horas con nuestro equipo de especialistas en integración."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center"
              >
                <div className="bg-blue-600 p-3 rounded-lg w-fit mx-auto mb-4 text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 border border-gray-200 mb-20"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Precios <span className="text-blue-600">Transparentes</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Sin costos ocultos, sin setup, solo pagas por lo que usas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tarjetas de Crédito</h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">2.9%</p>
              <p className="text-gray-600">+ $15 por transacción</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Transferencias</h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">0.5%</p>
              <p className="text-gray-600">Mínimo $50 por transacción</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Débito Automático</h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">1.5%</p>
              <p className="text-gray-600">+ $25 por transacción</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            ¿Listo para <span className="text-blue-600">comenzar</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Implementa nuestra solución en menos de 48 horas y comienza a ahorrar en comisiones desde el primer día
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-2xl flex items-center gap-2">
                Solicitar Consulta
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}