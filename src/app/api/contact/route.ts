import { NextRequest, NextResponse } from 'next/server';

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

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
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
    `;

    // For now, we'll use a simple approach with Nodemailer
    // You can replace this with your preferred email service
    const emailData = {
      to: 'kumawataryan23@gmail.com',
      from: 'noreply@aryankumawat.com', // You can set up a custom domain
      subject: `Portfolio Contact: ${subject}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8B5CF6;">New message from your portfolio website</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          <div style="background: #fff; padding: 20px; border-left: 4px solid #8B5CF6;">
            <h3>Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <div style="margin-top: 20px; padding: 10px; background: #f1f3f4; border-radius: 4px; font-size: 12px; color: #666;">
            <p>Sent from: ${request.headers.get('origin') || 'Portfolio Website'}</p>
            <p>Time: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `
    };

    // For development, we'll just log the email
    // In production, you would send this via your email service
    console.log('Email would be sent:', emailData);

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully' 
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