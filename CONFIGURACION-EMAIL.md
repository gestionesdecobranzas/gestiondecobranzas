# Configuración de Email con Google Workspace

## 📧 Configuración del Sistema de Emails

Este documento explica cómo configurar Google Workspace para que los formularios de contacto funcionen correctamente.

## 🔧 Pasos de Configuración

### 1. Preparar Google Workspace

#### Habilitar Autenticación de 2 Factores
1. Ve a [myaccount.google.com](https://myaccount.google.com)
2. Selecciona **Seguridad** en el panel izquierdo
3. En "Iniciar sesión en Google", selecciona **Verificación en 2 pasos**
4. Sigue las instrucciones para habilitarla

#### Generar Contraseña de Aplicación
1. Una vez habilitada la verificación en 2 pasos, regresa a **Seguridad**
2. En "Iniciar sesión en Google", selecciona **Contraseñas de aplicaciones**
3. Selecciona la aplicación: **Correo**
4. Selecciona el dispositivo: **Otro (nombre personalizado)**
5. Escribe: "Gestión de Cobranzas Website"
6. Haz clic en **Generar**
7. **IMPORTANTE**: Copia la contraseña de 16 caracteres que aparece

### 2. Configurar Variables de Entorno

#### Crear archivo .env.local
```bash
# En la raíz del proyecto
cp .env.example .env.local
```

#### Completar las variables
```env
# Configuración SMTP para Google Workspace
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu-email@gestiondecobranzas.com
SMTP_PASS=contraseña-de-aplicación-de-16-caracteres
SMTP_FROM=noreply@gestiondecobranzas.com

# Email de destino para solicitudes
SALES_EMAIL=adm@gestiondecobranzas.com

# Entorno de producción
NODE_ENV=production
```

### 3. Configuración en Vercel (Producción)

#### Variables de Entorno en Vercel
1. Ve a tu proyecto en [vercel.com](https://vercel.com)
2. Selecciona **Settings** → **Environment Variables**
3. Agrega cada variable:

| Variable | Valor | Entorno |
|----------|-------|----------|
| `SMTP_HOST` | `smtp.gmail.com` | Production, Preview |
| `SMTP_PORT` | `587` | Production, Preview |
| `SMTP_USER` | `tu-email@gestiondecobranzas.com` | Production, Preview |
| `SMTP_PASS` | `tu-contraseña-de-aplicación` | Production, Preview |
| `SMTP_FROM` | `noreply@gestiondecobranzas.com` | Production, Preview |
| `SALES_EMAIL` | `adm@gestiondecobranzas.com` | Production, Preview |
| `NODE_ENV` | `production` | Production |

#### Redesplegar
Después de agregar las variables, haz un nuevo deploy:
```bash
git add .
git commit -m "feat: configurar variables de entorno para email"
git push origin main
```

## 🧪 Pruebas

### Desarrollo Local
```bash
# El sistema está configurado para modo desarrollo
# Los emails se muestran en la consola en lugar de enviarse
npm run dev
```

### Producción
```bash
# En producción, los emails se envían realmente
# Asegúrate de que NODE_ENV=production
npm run build
npm start
```

## 📋 Funcionalidades del Sistema

### Emails Automáticos
1. **Email al equipo de ventas**: Notificación con datos del cliente
2. **Email de confirmación**: Confirmación automática al cliente

### Características
- ✅ Validación de formularios con Zod
- ✅ Templates HTML responsivos
- ✅ Manejo de errores robusto
- ✅ Modo desarrollo vs producción
- ✅ Fallback en caso de error de email

## 🔒 Seguridad

### Mejores Prácticas
- ✅ Usar contraseñas de aplicación (no contraseña principal)
- ✅ Variables de entorno para credenciales
- ✅ Validación de datos de entrada
- ✅ Manejo seguro de errores

### Archivo .gitignore
El archivo `.env.local` ya está incluido en `.gitignore` para evitar subir credenciales.

## 🚨 Solución de Problemas

### Error: "Invalid login"
- Verifica que la autenticación de 2 factores esté habilitada
- Asegúrate de usar la contraseña de aplicación, no tu contraseña normal
- Confirma que el email sea correcto

### Error: "Connection timeout"
- Verifica la configuración del puerto (587)
- Asegúrate de que `secure: false` para puerto 587

### Emails no llegan
- Revisa la carpeta de spam
- Verifica que `SALES_EMAIL` sea correcto
- Comprueba los logs de Vercel

## 📞 Soporte

Si necesitas ayuda adicional:
1. Revisa los logs en Vercel
2. Verifica la configuración de Google Workspace
3. Contacta al administrador del sistema

---

**Última actualización**: Enero 2025
**Versión**: 1.0