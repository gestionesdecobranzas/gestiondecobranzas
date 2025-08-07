# Gestión de Cobranzas SAS - Gateway de Pagos

## 🚀 Descripción del Proyecto

Sitio web corporativo moderno para **Gestión de Cobranzas SAS**, una empresa argentina especializada en soluciones de gateway de pagos. El sitio está diseñado para ser visualmente impactante y funcional, inspirado en las mejores prácticas de la industria fintech.

## ✨ Características Principales

### 🎨 Diseño y UX
- **Diseño moderno y responsivo** con gradientes y efectos visuales
- **Animaciones fluidas** con Framer Motion
- **Interfaz intuitiva** optimizada para conversión
- **Tema oscuro profesional** con acentos en azul

### 📱 Funcionalidades
- **Página principal** con secciones de hero, servicios, beneficios y estadísticas
- **Página de contacto dedicada** con información completa
- **Formulario de contacto funcional** con validación y envío de emails
- **Sección de preguntas frecuentes**
- **Navegación fluida** entre secciones

### 🛠 Tecnologías Utilizadas
- **Next.js 15** - Framework React con App Router
- **React 19** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de estilos utilitarios
- **Framer Motion** - Animaciones y transiciones
- **React Hook Form** - Manejo de formularios
- **Zod** - Validación de esquemas
- **Nodemailer** - Envío de emails
- **Lucide React** - Iconos modernos

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js 18+ 
- npm o yarn
- Git

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd gestiondecobranzas
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env.local
   ```
   
   Edita `.env.local` con tus configuraciones:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=tu-email@gmail.com
   SMTP_PASS=tu-password-de-aplicacion
   SMTP_FROM=noreply@gestioncobranzas.com
   SALES_EMAIL=ventas@gestioncobranzas.com
   ```

4. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

5. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 📧 Configuración de Email

### Modo Desarrollo
En desarrollo, los emails se muestran en la consola del servidor en lugar de enviarse realmente.

### Modo Producción
Para producción, configura un servicio SMTP real:

#### Gmail
1. Habilita la autenticación de 2 factores
2. Genera una "Contraseña de aplicación"
3. Usa esa contraseña en `SMTP_PASS`

#### Servicios Recomendados
- **SendGrid** - Hasta 100 emails/día gratis
- **AWS SES** - Muy económico para alto volumen
- **Mailgun** - Fácil integración
- **Resend** - Moderno y developer-friendly

## 🏗 Estructura del Proyecto

```
gestiondecobranzas/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts          # API para formulario de contacto
│   │   ├── contacto/
│   │   │   └── page.tsx              # Página de contacto
│   │   ├── globals.css               # Estilos globales
│   │   ├── layout.tsx                # Layout principal
│   │   └── page.tsx                  # Página de inicio
│   └── components/
│       └── ContactForm.tsx           # Componente del formulario
├── public/                           # Archivos estáticos
├── .env.example                      # Ejemplo de variables de entorno
├── .gitignore                        # Archivos ignorados por Git
├── package.json                      # Dependencias y scripts
├── tailwind.config.ts               # Configuración de Tailwind
├── tsconfig.json                     # Configuración de TypeScript
└── README.md                         # Este archivo
```

## 🎯 Funcionalidades del Formulario

### Validaciones
- **Nombre**: Mínimo 2 caracteres
- **Email**: Formato de email válido
- **Empresa**: Mínimo 2 caracteres
- **Mensaje**: Mínimo 10 caracteres
- **Volumen mensual**: Campo requerido

### Flujo de Emails
1. **Email al equipo de ventas** con todos los datos del prospecto
2. **Email de confirmación** al cliente con información de seguimiento

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno en el dashboard
3. Despliega automáticamente

### Otros Proveedores
- **Netlify**: Compatible con Next.js
- **Railway**: Fácil despliegue con base de datos
- **DigitalOcean App Platform**: Escalable y económico

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build        # Construye la aplicación
npm run start        # Inicia servidor de producción

# Calidad de código
npm run lint         # Ejecuta ESLint
npm run lint:fix     # Corrige errores de ESLint automáticamente
```

## 🎨 Personalización

### Colores y Tema
Los colores principales están definidos en `tailwind.config.ts` y pueden modificarse fácilmente.

### Contenido
- Modifica `src/app/page.tsx` para cambiar la página principal
- Edita `src/app/contacto/page.tsx` para la página de contacto
- Actualiza `src/components/ContactForm.tsx` para el formulario

### Animaciones
Las animaciones están implementadas con Framer Motion y pueden ajustarse en cada componente.

## 📊 Métricas y Analytics

Para implementar analytics, considera:
- **Google Analytics 4**
- **Mixpanel** para eventos de conversión
- **Hotjar** para mapas de calor
- **Vercel Analytics** si usas Vercel

## 🔒 Seguridad

- ✅ Validación de formularios con Zod
- ✅ Sanitización de datos de entrada
- ✅ Variables de entorno para credenciales
- ✅ HTTPS en producción (recomendado)
- ✅ Rate limiting (implementar en producción)

## 🐛 Solución de Problemas

### Emails no se envían
1. Verifica las credenciales SMTP
2. Revisa los logs del servidor
3. Confirma que el puerto no esté bloqueado

### Errores de compilación
1. Verifica las versiones de Node.js
2. Elimina `node_modules` y reinstala
3. Revisa la sintaxis de TypeScript

### Problemas de estilos
1. Verifica que Tailwind esté configurado correctamente
2. Revisa la importación de `globals.css`
3. Limpia la caché del navegador

## 📝 Changelog

### Versión 1.0.0 (Enero 2025)
- ✅ **Eliminación completa de referencias telefónicas** del sitio web
- ✅ **Footer unificado** añadido a todas las subpáginas (contacto, servicios, privacidad, términos)
- ✅ **Navegación mejorada** en todas las páginas
- ✅ **Formulario de contacto optimizado** sin campo de teléfono
- ✅ **Copyright dinámico** que se actualiza automáticamente
- ✅ **Build de producción optimizado** sin errores de compilación
- ✅ **Estructura de páginas completa** con todas las secciones legales
- ✅ **Responsive design** mejorado para todos los dispositivos

## 🤝 Contribución

Para contribuir al proyecto:
1. Fork el repositorio
2. Crea una rama para tu feature
3. Realiza tus cambios
4. Ejecuta las pruebas
5. Envía un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Soporte

Para soporte técnico:
- **Email**: soporte@gestioncobranzas.com
- **Documentación**: [Enlace a docs]

---

**Desarrollado con ❤️ en Argentina 🇦🇷**

*Gestión de Cobranzas SAS - Revolucionando los pagos digitales desde 2025*
