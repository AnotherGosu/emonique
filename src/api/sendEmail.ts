"use server";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  secure: true,
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASSWORD },
});

export const sendEmail = async ({
  formData,
  token,
  context = {},
}: {
  formData: FormData;
  token: string;
  context?: { artworkSlug?: string; artistSlug?: string };
}) => {
  /* VERIFY reCAPTCHA */

  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET}&response=${token}`,
    },
  );

  const data = await response.json();

  if (!data.success || data.score < 0.5) {
    throw new Error("reCAPTCHA validation failed");
  }

  /* SEND EMAIL NOTIFICATION */

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  let subject = `New contact request by ${name} (${email})`;
  let html = `
      <h3>New contact request</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p>${message}</p>
    `;

  const { artworkSlug, artistSlug } = context;

  if (artworkSlug) {
    subject = `New artwork inquiry by ${name} (${email})`;
    html = `
      <h3>New artwork inquiry</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Artwork:</strong> <a href="https://emonique.com/gallery/${artworkSlug}">${artworkSlug}</a></p>
      <p>${message}</p>
    `;
  }

  if (artistSlug) {
    subject = `New artwork inquiry by ${name} (${email})`;
    html = `
      <h3>New artist inquiry</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Artist:</strong> <a href="https://emonique.com/artists/${artistSlug}">${artistSlug}</a></p>
      <p>${message}</p>
    `;
  }

  return transporter.sendMail({
    from: "notification@emonique.com",
    to: ["maksim@emonique.com", "hyein@emonique.com"],
    subject,
    text: subject,
    html,
  });
};
