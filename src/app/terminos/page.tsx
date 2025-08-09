'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, FileText, Users, AlertTriangle } from 'lucide-react';
import Footer from '@/components/Footer';

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
                <li><strong>Email:</strong> adm@gestionesdecobranzas.com</li>
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

      <Footer />
    </div>
  );
}