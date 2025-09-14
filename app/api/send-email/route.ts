import { NextRequest, NextResponse } from 'next/server'

type FormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  jobTitle: string
  company: string
  country: string
  projectDescription?: string
}

const EMAIL_TO = process.env.POSTMARK_TO_ADDRESS || 'suumit@mydukaan.io'
const EMAIL_FROM = process.env.POSTMARK_FROM_ADDRESS || 'helpme@bot9.ai'
const POSTMARK_TOKEN = process.env.POSTMARK_SERVER_TOKEN

export async function POST(req: NextRequest) {
  try {
    if (!POSTMARK_TOKEN) {
      return NextResponse.json(
        { error: 'Missing POSTMARK_SERVER_TOKEN' },
        { status: 500 }
      )
    }

    const body = (await req.json()) as Partial<FormData>

    // Basic server-side validation
    const required: (keyof FormData)[] = [
      'firstName',
      'lastName',
      'email',
      'phone',
      'jobTitle',
      'company',
      'country',
    ]

    for (const key of required) {
      const v = body[key]
      if (!v || (typeof v === 'string' && !v.trim())) {
        return NextResponse.json(
          { error: `Missing field: ${key}` },
          { status: 400 }
        )
      }
    }

    const email = String(body.email)
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    const firstName = String(body.firstName).trim()
    const lastName = String(body.lastName).trim()
    const phone = String(body.phone).trim()
    const jobTitle = String(body.jobTitle).trim()
    const company = String(body.company).trim()
    const country = String(body.country).trim()
    const projectDescription = (body.projectDescription || '').toString().trim()

    const subject = `Wiredleap inquiry: ${firstName} ${lastName} @ ${company}`

    const html = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', Arial, sans-serif; line-height: 1.5; color: #111">
        <h2 style="margin: 0 0 16px">New Get Started submission</h2>
        <p style="margin: 0 0 8px">You received a new request from the website.</p>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0" />
        <table style="width: 100%; border-collapse: collapse">
          <tbody>
            <tr><td style="padding: 4px 0; width: 160px; color: #555">Name</td><td style="padding: 4px 0">${firstName} ${lastName}</td></tr>
            <tr><td style="padding: 4px 0; color: #555">Email</td><td style="padding: 4px 0">${email}</td></tr>
            <tr><td style="padding: 4px 0; color: #555">Phone</td><td style="padding: 4px 0">${phone}</td></tr>
            <tr><td style="padding: 4px 0; color: #555">Job Title</td><td style="padding: 4px 0">${jobTitle}</td></tr>
            <tr><td style="padding: 4px 0; color: #555">Company</td><td style="padding: 4px 0">${company}</td></tr>
            <tr><td style="padding: 4px 0; color: #555">Country</td><td style="padding: 4px 0">${country}</td></tr>
          </tbody>
        </table>
        ${projectDescription ? `<div style="margin-top: 16px"><div style="color:#555; margin-bottom: 4px">Project Description</div><div>${projectDescription.replace(/\n/g, '<br/>')}</div></div>` : ''}
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0" />
        <p style="font-size: 12px; color: #666; margin: 0">Sent from Wiredleap Get Started form.</p>
      </div>
    `

    const payload = {
      From: EMAIL_FROM,
      To: EMAIL_TO,
      Subject: subject,
      HtmlBody: html,
      MessageStream: 'broadcast',
      ReplyTo: email,
      TextBody: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nJob Title: ${jobTitle}\nCompany: ${company}\nCountry: ${country}\n\nProject Description:\n${projectDescription}`,
    }

    const res = await fetch('https://api.postmarkapp.com/email', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Postmark-Server-Token': POSTMARK_TOKEN,
      },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      const err = await res.text().catch(() => '')
      return NextResponse.json(
        { error: 'Failed to send email', details: err },
        { status: 502 }
      )
    }

    const data = await res.json().catch(() => ({}))
    return NextResponse.json({ ok: true, data })
  } catch (e: any) {
    return NextResponse.json({ error: 'Unexpected error', details: e?.message }, { status: 500 })
  }
}

