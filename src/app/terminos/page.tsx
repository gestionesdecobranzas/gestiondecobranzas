'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, FileText, Users, AlertTriangle } from 'lucide-react';

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span>Volver al inicio</span>
            </Link>
            <Link href="/contacto" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
              Contacto
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-16 text-center"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-600/20 p-4 rounded-full">
              <FileText className="h-12 w-12 text-blue-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Términos de Servicio
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Condiciones generales de uso de nuestros servicios de gestión de pagos
          </p>
        </div>
      </motion.div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-8"
        >
          {/* Aceptación de Términos */}
          <section>
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">1. Aceptación de Términos</h2>
            </div>
            <div className="text-slate-300 space-y-4">
              <p>
                Al acceder y utilizar los servicios de Gestión de Cobranzas SAS, usted acepta estar sujeto a estos términos de servicio y todas las leyes y regulaciones aplicables.
              </p>
              <p>
                Si no está de acuerdo con alguno de estos términos, no debe utilizar nuestros servicios.
              </p>
            </div>
          </section>

          {/* Descripción de Servicios */}
          <section>
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">2. Descripción de Servicios</h2>
            </div>
            <div className="text-slate-300 space-y-4">
              <p>
                Gestión de Cobranzas SAS proporciona servicios de procesamiento de pagos, incluyendo:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Gateway de pagos con tarjetas de crédito y débito</li>
                <li>Procesamiento de transferencias bancarias</li>
                <li>Gestión de pagos recurrentes y suscripciones</li>
                <li>API de integración para comercios electrónicos</li>
                <li>Herramientas de análisis y reportes</li>
              </ul>
            </div>
          </section>

          {/* Obligaciones del Usuario */}
          <section>
            <div className="flex items-center mb-4">
              <AlertTriangle className="h-6 w-6 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">3. Obligaciones del Usuario</h2>
            </div>
            <div className="text-slate-300 space-y-4">
              <p>Al utilizar nuestros servicios, usted se compromete a:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Proporcionar información precisa y actualizada</li>
                <li>Cumplir con todas las leyes y regulaciones aplicables</li>
                <li>No utilizar los servicios para actividades fraudulentas o ilegales</li>
                <li>Mantener la confidencialidad de sus credenciales de acceso</li>
                <li>Notificar inmediatamente cualquier uso no autorizado</li>
              </ul>
            </div>
          </section>

          {/* Tarifas y Pagos */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Tarifas y Pagos</h2>
            <div className="text-slate-300 space-y-4">
              <p>
                Las tarifas por nuestros servicios se establecen según el plan contratado y el volumen de transacciones procesadas.
              </p>
              <p>
                Los pagos se procesan automáticamente según los términos acordados en el contrato de servicio.
              </p>
              <p>
                Nos reservamos el derecho de modificar las tarifas con previo aviso de 30 días.
              </p>
            </div>
          </section>

          {/* Limitación de Responsabilidad */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Limitación de Responsabilidad</h2>
            <div className="text-slate-300 space-y-4">
              <p>
                Gestión de Cobranzas SAS no será responsable por daños indirectos, incidentales o consecuentes que puedan surgir del uso de nuestros servicios.
              </p>
              <p>
                Nuestra responsabilidad total no excederá el monto de las tarifas pagadas por el cliente en los últimos 12 meses.
              </p>
            </div>
          </section>

          {/* Seguridad y Protección de Datos */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Seguridad y Protección de Datos</h2>
            <div className="text-slate-300 space-y-4">
              <p>
                Implementamos medidas de seguridad de nivel bancario para proteger la información de nuestros clientes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Encriptación SSL/TLS para todas las comunicaciones</li>
                <li>Cumplimiento con estándares PCI DSS</li>
                <li>Monitoreo 24/7 de transacciones</li>
                <li>Autenticación de dos factores</li>
              </ul>
            </div>
          </section>

          {/* Terminación del Servicio */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Terminación del Servicio</h2>
            <div className="text-slate-300 space-y-4">
              <p>
                Cualquiera de las partes puede terminar el servicio con un aviso previo de 30 días.
              </p>
              <p>
                Nos reservamos el derecho de suspender o terminar el servicio inmediatamente en caso de violación de estos términos.
              </p>
            </div>
          </section>

          {/* Modificaciones */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Modificaciones a los Términos</h2>
            <div className="text-slate-300 space-y-4">
              <p>
                Nos reservamos el derecho de modificar estos términos en cualquier momento.
              </p>
              <p>
                Las modificaciones serán notificadas con al menos 15 días de anticipación y entrarán en vigor en la fecha especificada.
              </p>
            </div>
          </section>

          {/* Ley Aplicable */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Ley Aplicable</h2>
            <div className="text-slate-300 space-y-4">
              <p>
                Estos términos se rigen por las leyes de la República Argentina.
              </p>
              <p>
                Cualquier disputa será resuelta en los tribunales competentes de la Ciudad Autónoma de Buenos Aires.
              </p>
            </div>
          </section>

          {/* Contacto */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Contacto</h2>
            <div className="text-slate-300 space-y-4">
              <p>
                Para consultas sobre estos términos de servicio, puede contactarnos:
              </p>
              <ul className="space-y-2">
                <li><strong>Email:</strong> legal@gestioncobranzas.com</li>
                <li><strong>Teléfono:</strong> +54 11 1234-5678</li>
                <li><strong>Dirección:</strong> Buenos Aires, Argentina</li>
              </ul>
            </div>
          </section>

          <div className="border-t border-slate-600 pt-6 mt-8">
            <p className="text-slate-400 text-sm">
              Última actualización: Enero 2025
            </p>
          </div>
        </motion.div>
      </div>

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