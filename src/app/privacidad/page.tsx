'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Eye, Lock, FileText } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="bg-blue-600 p-4 rounded-full w-fit mx-auto mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Política de <span className="text-blue-400">Privacidad</span>
          </h1>
          <p className="text-xl text-slate-300">
            Tu privacidad es nuestra prioridad. Conoce cómo protegemos tus datos.
          </p>
          <p className="text-sm text-slate-400 mt-4">
            Última actualización: Enero 2025
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Introduction */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Eye className="w-6 h-6 text-blue-400" />
              Introducción
            </h2>
            <p className="text-white/80 leading-relaxed">
              En Gestión de Cobranzas SAS, nos comprometemos a proteger y respetar tu privacidad. 
              Esta política explica cómo recopilamos, usamos y protegemos tu información personal 
              cuando utilizas nuestros servicios de gateway de pagos.
            </p>
          </div>

          {/* Data Collection */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <FileText className="w-6 h-6 text-blue-400" />
              Información que Recopilamos
            </h2>
            <div className="space-y-4 text-white/80">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Información Personal</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Nombre completo y datos de contacto</li>
                  <li>Información de la empresa</li>
                  <li>Datos de facturación y dirección</li>
                  <li>Información de identificación fiscal</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Información de Transacciones</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Datos de transacciones (montos, fechas, métodos de pago)</li>
                  <li>Información de tarjetas (tokenizada y encriptada)</li>
                  <li>Datos bancarios para transferencias</li>
                  <li>Historial de pagos y facturación</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Información Técnica</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Direcciones IP y datos de conexión</li>
                  <li>Información del navegador y dispositivo</li>
                  <li>Logs de actividad y uso del servicio</li>
                  <li>Cookies y tecnologías similares</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Data Usage */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">Cómo Usamos tu Información</h2>
            <div className="grid md:grid-cols-2 gap-6 text-white/80">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Servicios Principales</h3>
                <ul className="space-y-2">
                  <li>• Procesar pagos y transacciones</li>
                  <li>• Verificar identidad y prevenir fraude</li>
                  <li>• Generar reportes y análisis</li>
                  <li>• Brindar soporte técnico</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Mejoras y Comunicación</h3>
                <ul className="space-y-2">
                  <li>• Mejorar nuestros servicios</li>
                  <li>• Enviar notificaciones importantes</li>
                  <li>• Cumplir con obligaciones legales</li>
                  <li>• Comunicar actualizaciones del servicio</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Data Protection */}
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Lock className="w-6 h-6 text-blue-400" />
              Protección de Datos
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-white/80">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Medidas de Seguridad</h3>
                <ul className="space-y-2">
                  <li>• Encriptación SSL/TLS 256-bit</li>
                  <li>• Certificación PCI DSS Nivel 1</li>
                  <li>• Tokenización de datos sensibles</li>
                  <li>• Monitoreo 24/7 de seguridad</li>
                  <li>• Auditorías de seguridad regulares</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Acceso y Control</h3>
                <ul className="space-y-2">
                  <li>• Acceso limitado por roles</li>
                  <li>• Autenticación de dos factores</li>
                  <li>• Logs de acceso detallados</li>
                  <li>• Políticas de retención de datos</li>
                  <li>• Procedimientos de eliminación segura</li>
                </ul>
              </div>
            </div>
          </div>

          {/* User Rights */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">Tus Derechos</h2>
            <div className="text-white/80 space-y-4">
              <p className="leading-relaxed">
                Bajo la Ley de Protección de Datos Personales de Argentina (Ley 25.326) y el RGPD, tienes los siguientes derechos:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-2">Acceso y Portabilidad</h3>
                  <p className="text-sm">Solicitar una copia de tus datos personales en formato estructurado.</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-2">Rectificación</h3>
                  <p className="text-sm">Corregir datos inexactos o incompletos.</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-2">Eliminación</h3>
                  <p className="text-sm">Solicitar la eliminación de tus datos personales.</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-2">Oposición</h3>
                  <p className="text-sm">Oponerte al procesamiento de tus datos.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cookies */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">Cookies y Tecnologías Similares</h2>
            <div className="text-white/80 space-y-4">
              <p className="leading-relaxed">
                Utilizamos cookies y tecnologías similares para mejorar tu experiencia, 
                analizar el uso del sitio y personalizar el contenido.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-2">Esenciales</h3>
                  <p className="text-sm">Necesarias para el funcionamiento básico del sitio.</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-2">Analíticas</h3>
                  <p className="text-sm">Nos ayudan a entender cómo usas nuestro sitio.</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-2">Funcionales</h3>
                  <p className="text-sm">Mejoran la funcionalidad y personalización.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">Contacto</h2>
            <div className="text-white/80 space-y-4">
              <p className="leading-relaxed">
                Si tienes preguntas sobre esta política de privacidad o deseas ejercer tus derechos, 
                puedes contactarnos:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-white mb-2">Datos de Protección</h3>
                  <p className="text-sm mb-1">Email: adm@gestiondecobranzas.com</p>
                  <p className="text-sm mb-1">Teléfono: +54 11 1234-5678</p>
                  <p className="text-sm">Horario: Lunes a Viernes 9:00-18:00</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Dirección Postal</h3>
                  <p className="text-sm mb-1">Av. Corrientes 1234, Piso 10</p>
                  <p className="text-sm mb-1">Ciudad Autónoma de Buenos Aires</p>
                  <p className="text-sm">Argentina (C1043AAZ)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Updates */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">Actualizaciones de la Política</h2>
            <div className="text-white/80">
              <p className="leading-relaxed mb-4">
                Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos 
                sobre cambios significativos por email o mediante un aviso prominente en nuestro sitio web.
              </p>
              <p className="text-sm text-blue-400">
                Recomendamos revisar esta página periódicamente para estar al tanto de cualquier cambio.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link href="/contacto">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-2xl">
              ¿Tienes preguntas? Contáctanos
            </button>
          </Link>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}