import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { name, email, telefon, leistung, nachricht } = body

        // Validierung
        if (!name || !email || !leistung || !nachricht) {
            return NextResponse.json(
                { error: 'Bitte fülle alle Pflichtfelder aus' },
                { status: 400 }
            )
        }

        // Email Transporter konfigurieren
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com', // Oder dein SMTP Server
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER, // Deine Email
                pass: process.env.EMAIL_PASSWORD, // Dein App-Passwort
            },
        })

        // Email Inhalt
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // An dich selbst
            replyTo: email, // Kunde kann direkt antworten
            subject: `🔔 Neue Anfrage von ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
                    <div style="background: linear-gradient(135deg, #a855f7 0%, #14b8a6 100%); padding: 30px; border-radius: 10px; text-align: center;">
                        <h1 style="color: white; margin: 0;">Neue Kundenanfrage! 🎉</h1>
                    </div>
                    
                    <div style="background: white; padding: 30px; border-radius: 10px; margin-top: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                        <h2 style="color: #333; border-bottom: 2px solid #a855f7; padding-bottom: 10px;">Kontaktdaten</h2>
                        
                        <p><strong>👤 Name:</strong> ${name}</p>
                        <p><strong>📧 E-Mail:</strong> <a href="mailto:${email}">${email}</a></p>
                        <p><strong>📞 Telefon:</strong> ${telefon || 'Nicht angegeben'}</p>
                        
                        <h2 style="color: #333; border-bottom: 2px solid #a855f7; padding-bottom: 10px; margin-top: 30px;">Anfrage Details</h2>
                        
                        <p><strong>🧹 Gewünschte Leistung:</strong> ${leistung}</p>
                        
                        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin-top: 20px;">
                            <p style="margin: 0;"><strong>💬 Nachricht:</strong></p>
                            <p style="white-space: pre-wrap; margin-top: 10px;">${nachricht}</p>
                        </div>
                        
                        <div style="margin-top: 30px; padding: 20px; background: #e0f2fe; border-left: 4px solid #0284c7; border-radius: 5px;">
                            <p style="margin: 0; color: #0284c7;"><strong>💡 Tipp:</strong> Antworte innerhalb von 24h für die beste Conversion!</p>
                        </div>
                    </div>
                    
                    <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
                        <p>Diese E-Mail wurde über das Kontaktformular auf cleanitup.de gesendet</p>
                    </div>
                </div>
            `,
        }

        // Email senden
        await transporter.sendMail(mailOptions)

        return NextResponse.json(
            { message: 'Email erfolgreich gesendet!' },
            { status: 200 }
        )

    } catch (error) {
        console.error('Email Fehler:', error)
        return NextResponse.json(
            { error: 'Fehler beim Senden der Email' },
            { status: 500 }
        )
    }
}