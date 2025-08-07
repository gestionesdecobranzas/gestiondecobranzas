'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, CreditCard, Smartphone, Globe, Shield, Zap, BarChart3, Users, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';

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
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-semibold">Volver al inicio</span>
            </Link>
            <div className="text-xl font-bold text-white">
              Gestión de Cobranzas SAS
            </div>
            <Link href="/contacto" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
              Contacto
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Nuestros <span className="text-blue-400">Servicios</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
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
              className="bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-600 p-3 rounded-lg text-white">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  <span className="text-blue-400 font-semibold">{service.highlight}</span>
                </div>
              </div>
              
              <p className="text-white/80 mb-6">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/70">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
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
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Servicios <span className="text-blue-400">Adicionales</span>
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
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center"
              >
                <div className="bg-blue-600 p-3 rounded-lg w-fit mx-auto mb-4 text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/70">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 mb-20"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Precios <span className="text-blue-400">Transparentes</span>
            </h2>
            <p className="text-white/80 text-lg">
              Sin costos ocultos, sin setup, solo pagas por lo que usas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">Tarjetas de Crédito</h3>
              <p className="text-3xl font-bold text-blue-400 mb-2">2.9%</p>
              <p className="text-white/70">+ $15 por transacción</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">Transferencias</h3>
              <p className="text-3xl font-bold text-blue-400 mb-2">0.5%</p>
              <p className="text-white/70">Mínimo $50 por transacción</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">Débito Automático</h3>
              <p className="text-3xl font-bold text-blue-400 mb-2">1.5%</p>
              <p className="text-white/70">+ $25 por transacción</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para <span className="text-blue-400">comenzar</span>?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
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