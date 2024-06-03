import { Resend } from 'resend'

import WelcomeTemplate from '@/emails/WelcomeTemplate'
import { NextResponse } from 'next/server'


const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST() {
  resend.emails.send({
    from: "", // your domain
    to: "bba@wheretech.it",
    subject: "Hello",
    react: <WelcomeTemplate name="Bamba" />,
  })

  return NextResponse.json({ message: "Email sent" })
}