'use client';

import Link from 'next/link';
import { ArrowRight, Shield, CheckCircle, Star, Mail } from 'lucide-react';
import Image from 'next/image';
import LogoBlanco from '@/images/Logo Gestion de cobranzas SAS -blanco.svg';

/**
 * Componente Footer unificado para todas las páginas del sitio
 * Incluye información de la empresa, enlaces de navegación, servicios y datos de contacto
 */
export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Image 
                src={LogoBlanco}
                alt="Gestión de Cobranzas SAS"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Líderes en soluciones de recaudación inteligente en Argentina. Transformamos la manera en que las empresas gestionan sus cobranzas.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-3 py-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-white/80 text-sm">PCI DSS</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-3 py-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span className="text-white/80 text-sm">ISO 27001</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-3 py-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-white/80 text-sm">4.9/5</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <Link href="mailto:adm@gestionesdecobranzas.com" className="text-white/80 hover:text-blue-400 transition-colors">
                  adm@gestionesdecobranzas.com
                </Link>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Servicios</h4>
            <ul className="space-y-3 text-white/70">
              <li><Link href="/servicios" className="hover:text-blue-400 transition-colors flex items-center group">
                <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Gateway de Pagos
              </Link></li>
              <li><Link href="/servicios" className="hover:text-blue-400 transition-colors flex items-center group">
                <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Transferencias Inteligentes
              </Link></li>
              <li><Link href="/servicios" className="hover:text-blue-400 transition-colors flex items-center group">
                <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Automatización
              </Link></li>
              <li><Link href="/servicios" className="hover:text-blue-400 transition-colors flex items-center group">
                <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Integración API
              </Link></li>
              <li><Link href="/servicios" className="hover:text-blue-400 transition-colors flex items-center group">
                <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Consultoría
              </Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Empresa</h4>
            <ul className="space-y-3 text-white/70">
              <li><Link href="/" className="hover:text-blue-400 transition-colors flex items-center group">
                <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Inicio
              </Link></li>
              <li><Link href="/servicios" className="hover:text-blue-400 transition-colors flex items-center group">
                <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Servicios
              </Link></li>
              <li><Link href="/contacto" className="hover:text-blue-400 transition-colors flex items-center group">
                <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Contacto
              </Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Soporte</h4>
            <ul className="space-y-3 text-white/70">
              <li><Link href="/contacto" className="hover:text-blue-400 transition-colors flex items-center group">
                <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Contacto
              </Link></li>

            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-6 pb-6 border-b border-white/10">
            <span className="text-white/60 text-sm font-medium">Legal:</span>
            <Link href="/privacidad" className="text-white/60 hover:text-blue-400 transition-colors text-sm">
              Política de Privacidad
            </Link>
            <span className="text-white/30">•</span>
            <Link href="/terminos" className="text-white/60 hover:text-blue-400 transition-colors text-sm">
              Términos de Servicio
            </Link>
          </div>
          
          {/* Copyright and Info */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © {new Date().getFullYear()} Gestión de Cobranzas SAS. Todos los derechos reservados.
            </div>
            <div className="flex items-center space-x-6 text-white/60 text-sm">
              <span>Hecho con ❤️ en Argentina</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Todos los sistemas operativos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}