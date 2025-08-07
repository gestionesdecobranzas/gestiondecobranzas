# Guía de Despliegue - Gestión de Cobranzas SAS

## 🚀 Preparación para Producción

### Verificaciones Pre-Despliegue

✅ **Build exitoso**
```bash
npm run build
```

✅ **Linting sin errores**
```bash
npm run lint
```

✅ **Variables de entorno configuradas**
- Copiar `.env.example` a `.env.local`
- Configurar credenciales SMTP reales
- Verificar URLs de producción

## 🌐 Opciones de Despliegue

### 1. Vercel (Recomendado)

**Ventajas:**
- Integración nativa con Next.js
- Despliegue automático desde Git
- CDN global incluido
- SSL automático

**Pasos:**
1. Conectar repositorio en [vercel.com](https://vercel.com)
2. Configurar variables de entorno en el dashboard
3. Desplegar automáticamente

**Variables de entorno requeridas:**
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu-email@gmail.com
SMTP_PASS=tu-password-de-aplicacion
SMTP_FROM=noreply@gestioncobranzas.com
SALES_EMAIL=ventas@gestioncobranzas.com
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
```

### 2. Netlify

**Configuración:**
1. Conectar repositorio
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Configurar variables de entorno

### 3. Railway

**Ventajas:**
- Fácil configuración
- Base de datos incluida si es necesaria
- Escalado automático

### 4. DigitalOcean App Platform

**Configuración:**
```yaml
name: gestiondecobranzas
services:
- name: web
  source_dir: /
  github:
    repo: tu-usuario/gestiondecobranzas
    branch: main
  run_command: npm start
  build_command: npm run build
  environment_slug: node-js
  instance_count: 1
  instance_size_slug: basic-xxs
  envs:
  - key: SMTP_HOST
    value: smtp.gmail.com
  # ... otras variables
```

## 📧 Configuración de Email en Producción

### Gmail (Para desarrollo/testing)
1. Habilitar autenticación de 2 factores
2. Generar contraseña de aplicación
3. Usar en `SMTP_PASS`

### SendGrid (Recomendado para producción)
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=tu-api-key-de-sendgrid
```

### AWS SES
```env
SMTP_HOST=email-smtp.us-east-1.amazonaws.com
SMTP_PORT=587
SMTP_USER=tu-access-key-id
SMTP_PASS=tu-secret-access-key
```

## 🔒 Configuración de Seguridad

### Headers de Seguridad
Añadir en `next.config.ts`:
```typescript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}
```

### Rate Limiting
Implementar en `src/app/api/contact/route.ts`:
```typescript
// Ejemplo con Upstash Redis
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, '1 h'),
})
```

## 📊 Monitoreo y Analytics

### Google Analytics 4
1. Crear propiedad en Google Analytics
2. Añadir tracking ID en `layout.tsx`

### Vercel Analytics
```bash
npm install @vercel/analytics
```

### Sentry (Error Tracking)
```bash
npm install @sentry/nextjs
```

## 🔧 Optimizaciones de Rendimiento

### Compresión de Imágenes
- Usar formato WebP
- Implementar lazy loading
- Optimizar tamaños para diferentes dispositivos

### Caché
- Configurar headers de caché apropiados
- Usar CDN para assets estáticos

### Bundle Analysis
```bash
npm install @next/bundle-analyzer
```

## 🚨 Troubleshooting

### Errores Comunes

**Build falla:**
- Verificar versiones de Node.js (18+)
- Limpiar caché: `rm -rf .next node_modules && npm install`

**Emails no se envían:**
- Verificar credenciales SMTP
- Revisar logs del proveedor
- Confirmar que el puerto no esté bloqueado

**Errores de CORS:**
- Configurar dominios permitidos
- Verificar headers de seguridad

## 📋 Checklist de Despliegue

- [ ] Build exitoso localmente
- [ ] Linting sin errores
- [ ] Variables de entorno configuradas
- [ ] Dominio configurado
- [ ] SSL habilitado
- [ ] Email funcionando
- [ ] Analytics configurado
- [ ] Monitoreo de errores activo
- [ ] Backup de base de datos (si aplica)
- [ ] Documentación actualizada

## 🔄 Proceso de Actualización

1. **Desarrollo local**
   ```bash
   git checkout -b feature/nueva-funcionalidad
   # Desarrollar cambios
   npm run build
   npm run lint
   ```

2. **Testing**
   ```bash
   git push origin feature/nueva-funcionalidad
   # Crear PR y revisar
   ```

3. **Despliegue**
   ```bash
   git checkout main
   git merge feature/nueva-funcionalidad
   git push origin main
   # Despliegue automático en Vercel
   ```

---

**Última actualización:** Enero 2025  
**Versión:** 1.0.0