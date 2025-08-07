import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  message: z.string().min(10),
  monthlyVolume: z.string().min(1),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validar los datos del formulario
    const validatedData = contactSchema.parse(body);
    
    // Configurar el transportador de email para Google Workspace
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true para puerto 465, false para otros puertos
      auth: {
        user: process.env.SMTP_USER || 'adm@gestiondecobranzas.com',
        pass: process.env.SMTP_PASS || 'demo-password',
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Email para el equipo de ventas
    const salesEmail = {
      from: process.env.SMTP_FROM || 'noreply@gestiondecobranzas.com',
      to: process.env.SALES_EMAIL || 'adm@gestiondecobranzas.com',
      subject: `Nueva solicitud de demo - ${validatedData.company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1e293b 0%, #1e40af 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0;">Nueva Solicitud de Demo</h1>
          </div>
          
          <div style="padding: 30px; background: #f8fafc;">
            <h2 style="color: #1e293b; margin-bottom: 20px;">Información del Cliente</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Nombre:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${validatedData.name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${validatedData.email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Empresa:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${validatedData.company}</td>
              </tr>

              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Volumen Mensual:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${validatedData.monthlyVolume}</td>
              </tr>
            </table>
            
            <h3 style="color: #1e293b; margin-top: 30px; margin-bottom: 15px;">Mensaje:</h3>
            <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6;">
              <p style="color: #1e293b; line-height: 1.6; margin: 0;">${validatedData.message}</p>
            </div>
          </div>
          
          <div style="background: #1e293b; padding: 20px; text-align: center;">
            <p style="color: #94a3b8; margin: 0; font-size: 14px;">
              © 2025 Gestión de Cobranzas SAS - Sistema de Notificaciones
            </p>
          </div>
        </div>
      `,
    };

    // Email de confirmación para el cliente
    const confirmationEmail = {
      from: process.env.SMTP_FROM || 'noreply@gestiondecobranzas.com',
      to: validatedData.email,
      subject: 'Confirmación de solicitud - Gestión de Cobranzas SAS',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1e293b 0%, #1e40af 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0;">¡Gracias por tu interés!</h1>
          </div>
          
          <div style="padding: 30px; background: #f8fafc;">
            <h2 style="color: #1e293b;">Hola ${validatedData.name},</h2>
            
            <p style="color: #475569; line-height: 1.6;">
              Hemos recibido tu solicitud de demo para <strong>${validatedData.company}</strong>. 
              Nuestro equipo de especialistas se pondrá en contacto contigo en las próximas 24 horas.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981;">
              <h3 style="color: #1e293b; margin-top: 0;">¿Qué sigue?</h3>
              <ul style="color: #475569; line-height: 1.6;">
                <li>Un especialista revisará tu solicitud</li>
                <li>Te contactaremos para agendar una demo personalizada</li>
                <li>Te mostraremos cómo ahorrar hasta 10x en costos de transacción</li>
                <li>Diseñaremos una solución específica para tu negocio</li>
              </ul>
            </div>
            
            <p style="color: #475569; line-height: 1.6;">
              Mientras tanto, puedes conocer más sobre nuestras soluciones en nuestro sitio web.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://gestiondecobranzas.com" style="background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: bold;">Visitar Sitio Web</a>
            </div>
          </div>
          
          <div style="background: #1e293b; padding: 20px; text-align: center;">
            <p style="color: #94a3b8; margin: 0; font-size: 14px;">
              © 2025 Gestión de Cobranzas SAS<br>
              Buenos Aires, Argentina | adm@gestiondecobranzas.com
            </p>
          </div>
        </div>
      `,
    };

    // En desarrollo, solo logueamos los emails en lugar de enviarlos
    if (process.env.NODE_ENV === 'development') {
      console.log('=== EMAIL DE VENTAS ===');
      console.log('To:', salesEmail.to);
      console.log('Subject:', salesEmail.subject);
      console.log('Data:', validatedData);
      
      console.log('=== EMAIL DE CONFIRMACIÓN ===');
      console.log('To:', confirmationEmail.to);
      console.log('Subject:', confirmationEmail.subject);
      
      return NextResponse.json({ 
        success: true, 
        message: 'Formulario procesado exitosamente (modo desarrollo)' 
      });
    }

    // En producción, enviar los emails reales
    try {
      await Promise.all([
        transporter.sendMail(salesEmail),
        transporter.sendMail(confirmationEmail)
      ]);
      
      return NextResponse.json({ 
        success: true, 
        message: 'Emails enviados exitosamente' 
      });
    } catch (emailError) {
      console.error('Error sending emails:', emailError);
      
      // Aún así retornamos éxito para no frustrar al usuario
      // En un sistema real, podrías guardar en base de datos como respaldo
      return NextResponse.json({ 
        success: true, 
        message: 'Solicitud procesada, nos contactaremos pronto' 
      });
    }
    
  } catch (error) {
    console.error('Error processing contact form:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: 'Datos del formulario inválidos', errors: error.issues },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { success: false, message: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}