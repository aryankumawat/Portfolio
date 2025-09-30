import { NextRequest, NextResponse } from 'next/server';

// Lazy load Resend to avoid build-time errors
let resend: any = null;

const getResend = () => {
  if (!resend) {
    const { Resend } = require('resend');
    resend = new Resend(process.env.RESEND_API_KEY);
  }
  return resend;
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate field lengths and content
    if (name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Name must be at least 2 characters long' },
        { status: 400 }
      );
    }

    if (name.trim().length > 100) {
      return NextResponse.json(
        { error: 'Name must be less than 100 characters' },
        { status: 400 }
      );
    }

    if (subject.trim().length < 3) {
      return NextResponse.json(
        { error: 'Subject must be at least 3 characters long' },
        { status: 400 }
      );
    }

    if (subject.trim().length > 100) {
      return NextResponse.json(
        { error: 'Subject must be less than 100 characters' },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters long' },
        { status: 400 }
      );
    }

    if (message.length > 1000) {
      return NextResponse.json(
        { error: 'Message must be less than 1000 characters' },
        { status: 400 }
      );
    }

    if (company && company.length > 100) {
      return NextResponse.json(
        { error: 'Company name must be less than 100 characters' },
        { status: 400 }
      );
    }

    // Comprehensive email validation
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Additional validation for common email providers
    const validDomains = [
      'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com',
      'protonmail.com', 'aol.com', 'live.com', 'msn.com', 'zoho.com',
      'yandex.com', 'mail.com', 'gmx.com', 'web.de', 'tutanota.com',
      'fastmail.com', 'hey.com', 'company.com', 'org.com', 'edu.com',
      'gov.com', 'mil.com', 'net.com', 'co.uk', 'co.in', 'co.au',
      'co.ca', 'co.nz', 'co.za', 'de', 'fr', 'it', 'es', 'nl',
      'be', 'ch', 'at', 'se', 'no', 'dk', 'fi', 'pl', 'cz',
      'hu', 'ro', 'bg', 'hr', 'sk', 'si', 'lt', 'lv', 'ee',
      'ie', 'pt', 'gr', 'cy', 'mt', 'lu', 'jp', 'kr', 'cn',
      'tw', 'hk', 'sg', 'my', 'th', 'ph', 'id', 'vn', 'br',
      'mx', 'ar', 'cl', 'co', 'pe', 've', 'uy', 'py', 'bo',
      'ec', 'gy', 'sr', 'gf', 'fk', 'ru', 'ua', 'by', 'kz',
      'kg', 'tj', 'tm', 'uz', 'mn', 'af', 'pk', 'bd', 'lk',
      'mv', 'np', 'bt', 'mm', 'la', 'kh', 'bn', 'tl', 'au',
      'nz', 'fj', 'pg', 'sb', 'vu', 'nc', 'pf', 'ws', 'to',
      'ki', 'tv', 'nr', 'fm', 'mh', 'pw', 'as', 'gu', 'mp',
      'vi', 'pr', 'do', 'ht', 'cu', 'jm', 'tt', 'bb', 'lc',
      'vc', 'gd', 'ag', 'kn', 'dm', 'bs', 'bz', 'gt', 'sv',
      'hn', 'ni', 'cr', 'pa', 'ca', 'us'
    ];
    
    const emailDomain = email.split('@')[1]?.toLowerCase();
    
    if (!emailDomain) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }
    
    if (!validDomains.some(domain => emailDomain === domain || emailDomain.endsWith('.' + domain))) {
      return NextResponse.json(
        { error: 'Please use a valid email provider (Gmail, Yahoo, Outlook, etc.)' },
        { status: 400 }
      );
    }
    
    if (email.length > 254) {
      return NextResponse.json(
        { error: 'Email address is too long' },
        { status: 400 }
      );
    }
    
    if (email.includes('..') || email.startsWith('.') || email.endsWith('.')) {
      return NextResponse.json(
        { error: 'Email format is invalid' },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === '') {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service not configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    // Send email using Resend
    const resendInstance = getResend();
    const { data, error } = await resendInstance.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // This will be your domain once verified
      to: ['kumawataryan23@gmail.com'],
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa; padding: 20px;">
          <div style="background: white; border-radius: 12px; padding: 30px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #8B5CF6; margin: 0; font-size: 28px;">New Portfolio Contact</h1>
              <p style="color: #666; margin: 10px 0 0 0;">Someone reached out through your website</p>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
              <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #8B5CF6;">${email}</a></p>
              <p style="margin: 8px 0;"><strong>Company:</strong> ${company || 'Not provided'}</p>
              <p style="margin: 8px 0;"><strong>Subject:</strong> ${subject}</p>
            </div>
            
            <div style="background: #fff; padding: 20px; border-left: 4px solid #8B5CF6; border-radius: 0 8px 8px 0;">
              <h3 style="color: #333; margin-top: 0;">Message</h3>
              <p style="white-space: pre-wrap; line-height: 1.6; color: #555;">${message}</p>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background: #e9ecef; border-radius: 6px; font-size: 12px; color: #666;">
              <p style="margin: 0;"><strong>Sent from:</strong> ${request.headers.get('origin') || 'Portfolio Website'}</p>
              <p style="margin: 5px 0 0 0;"><strong>Time:</strong> ${new Date().toLocaleString()}</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #666; font-size: 14px; margin: 0;">
                Reply directly to this email to respond to ${name}
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
New message from your portfolio website:

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Subject: ${subject}

Message:
${message}

---
Sent from: ${request.headers.get('origin') || 'Portfolio Website'}
Time: ${new Date().toLocaleString()}
      `,
    });

    if (error) {
      console.error('Error sending email:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', data);
    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully',
        emailId: data?.id
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}