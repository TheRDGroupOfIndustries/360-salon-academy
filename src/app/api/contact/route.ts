import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      first_name,
      last_name,
      email,
      phone,
      service_interest,
      preferred_date,
      preferred_time,
      experience_level,
      message,
      type, // <-- important: "appointment" | "enquiry"
    }: {
      first_name: string;
      last_name: string;
      email: string;
      phone?: string;
      service_interest: string;
      preferred_date?: string;
      preferred_time?: string;
      experience_level?: string;
      message: string;
      type: "appointment" | "enquiry";
    } = body;

    /* --------------------------
        MAIL TRANSPORTER
    ---------------------------*/
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER as string,
        pass: process.env.EMAIL_PASS as string,
      },
    });

    /* -----------------------------------
       CONDITIONAL HTML BLOCKS
    ----------------------------------- */

    const appointmentFields = `
      <tr><td style="padding:8px; font-weight:bold;">Service</td><td style="padding:8px;">${service_interest}</td></tr>
      <tr><td style="padding:8px; font-weight:bold;">Preferred Date</td><td style="padding:8px;">${preferred_date}</td></tr>
      <tr><td style="padding:8px; font-weight:bold;">Preferred Time</td><td style="padding:8px;">${preferred_time}</td></tr>
    `;

    const enquiryFields = `
      <tr><td style="padding:8px; font-weight:bold;">Course</td><td style="padding:8px;">${service_interest}</td></tr>
      <tr><td style="padding:8px; font-weight:bold;">Experience Level</td><td style="padding:8px;">${experience_level}</td></tr>
    `;

    /* ================================
          1. EMAIL TO ADMIN
    ================================= */
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New ${type === "appointment" ? "Appointment" : "Academy Enquiry"} — ${first_name} ${last_name}`,
      html: `
      <div style="font-family: Arial; line-height: 1.6; color: #333;">
        <h2>New ${type === "appointment" ? "Appointment Booking" : "Academy Enquiry"}</h2>

        <table style="width:100%; border-collapse: collapse;">
          <tr><td style="padding:8px; font-weight:bold;">Name</td><td style="padding:8px;">${first_name} ${last_name}</td></tr>
          <tr><td style="padding:8px; font-weight:bold;">Email</td><td style="padding:8px;">${email}</td></tr>
          <tr><td style="padding:8px; font-weight:bold;">Phone</td><td style="padding:8px;">${phone}</td></tr>

          ${type === "appointment" ? appointmentFields : enquiryFields}
        </table>

        <h3 style="margin-top:20px;">Message:</h3>
        <p style="background:#f7f7f7; padding:12px; border-radius:5px;">${message}</p>

        <p style="font-size:14px; color:#777; margin-top:20px;">
          This is an automated email from your website contact form.
        </p>
      </div>
      `,
    });

    /* ================================
         2. AUTO-REPLY TO USER
    ================================= */
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: `We Received Your ${type === "appointment" ? "Appointment Request" : "Enquiry"} ✔`,
      html: `
      <div style="font-family: Arial; line-height: 1.6; color: #333;">
        <h2 style="color:#0d6efd;">Thank You, ${first_name}!</h2>

        <p>Your ${type === "appointment" ? "appointment request" : "academy enquiry"} has been received.</p>
        <p>Our team will get back to you shortly.</p>

        <h3>Your Details:</h3>
        <table style="width:100%; border-collapse: collapse;">
          <tr><td style="padding:8px; font-weight:bold;">Name</td><td style="padding:8px;">${first_name} ${last_name}</td></tr>
          <tr><td style="padding:8px; font-weight:bold;">Email</td><td style="padding:8px;">${email}</td></tr>
          <tr><td style="padding:8px; font-weight:bold;">Phone</td><td style="padding:8px;">${phone}</td></tr>

          ${type === "appointment" ? appointmentFields : enquiryFields}
        </table>

        <h3>Your Message:</h3>
        <p style="background:#f0f7ff; padding:12px; border-radius:5px;">${message}</p>

        <p style="margin-top:20px;">
          If your request is urgent, reply directly to this email.
        </p>

        <p style="font-weight:bold; font-size:16px; margin-top:10px;">
          Warm Regards,<br/>
          <span style="color:#0d6efd;">360 Academy Team</span>
        </p>

        <p style="font-size:12px; color:#888; margin-top:20px;">
          This is an automated confirmation email.
        </p>
      </div>
    `,
    });

    return NextResponse.json({ success: true, message: "Emails sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Nodemailer Error:", error);
    return NextResponse.json({ success: false, message: "Error sending emails" }, { status: 500 });
  }
}
