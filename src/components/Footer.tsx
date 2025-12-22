"use client";

import Image from "next/image";
// --- Inline SVG Icons (Matching the style) ---
// MapPin Icon for Location
const MapPinIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

// Phone Icon for Contact
const PhoneIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-3.67-4.23l-2.88-2.88-4.23-3.67a19.5 19.5 0 0 1 4.23-3.67 19.79 19.79 0 0 1 8.63-3.07A2 2 0 0 1 22 4.08v3" />
  </svg>
);

// Mail Icon for Email
const MailIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.83 1.83 0 0 1-2.06 0L2 7" />
  </svg>
);

// Clock Icon for Hours
const ClockIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

// Social Icons (using placeholders for simplicity)
const FacebookIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M14 10.5h2.5L16 13h-2.5v7h-3v-7h-2v-2.5h2v-1.9c0-2.3 1.2-3.6 3.7-3.6 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.1 0-1.4.7-1.4 1.4v1.5h2.5z" />
  </svg>
);
const InstagramIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2.163c3.2 0 3.585.013 4.85.07c1.33.06 2.06.287 2.51.467.45.174.74.397.975.645.24.247.46.547.635.975.18.45.407 1.18.467 2.51.057 1.265.07 1.65.07 4.85s-.013 3.585-.07 4.85c-.06 1.33-.287 2.06-.467 2.51-.174.45-.397.74-.645.975-.247.24-.547.46-.975.635-.45.18-1.18.407-2.51.467-1.265.057-1.65.07-4.85.07s-3.585-.013-4.85-.07c-1.33-.06-2.06-.287-2.51-.467-.45-.174-.74-.397-.975-.645-.24-.247-.46-.547-.635-.975-.18-.45-.407-1.18-.467-2.51-.057-1.265-.07-1.65-.07-4.85s.013-3.585.07-4.85c.06-1.33.287-2.06.467-2.51.174-.45.397-.74.645-.975.247-.24.547-.46.975-.635.45-.18 1.18-.407 2.51-.467C8.415 2.176 8.79 2.163 12 2.163zM12 4.163c-2.73 0-3.06.01-4.12.06s-1.8.2-2.3.4C4.6 4.9 4.3 5.3 4.1 5.6c-.2.3-.3.8-.4 1.2-.05 1.06-.06 1.39-.06 4.12s.01 3.06.06 4.12c.1 1.06.2 1.8.4 2.3.2.5.5.8.8 1.1.3.3.8.5 1.2.6.4.1 1.1.2 2.3.2 1.06.05 1.39.06 4.12.06s3.06-.01 4.12-.06c1.06-.1 1.8-.2 2.3-.4.5-.2.8-.5 1.1-.8.3-.3.5-.8.6-1.2.1-1.06.06-1.39.06-4.12s-.01-3.06-.06-4.12c-.1-1.06-.2-1.8-.4-2.3-.2-.5-.5-.8-.8-1.1-.3-.3-.8-.5-1.2-.6-.4-.1-1.1-.2-2.3-.2C15.06 4.173 14.73 4.163 12 4.163zM12 6.563c2.99 0 5.4 2.41 5.4 5.4s-2.41 5.4-5.4 5.4-5.4-2.41-5.4-5.4 2.41-5.4 5.4-5.4zM12 8.563c-1.88 0-3.4 1.52-3.4 3.4s1.52 3.4 3.4 3.4 3.4-1.52 3.4-3.4-1.52-3.4-3.4-3.4zM18.4 5.563c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" />
  </svg>
);
const LinkedInIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.5 19h-3v-11h3v11zm-1.5-12c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm12.5 12h-3v-5.5c0-1.33-.67-2.33-1.67-2.33-.83 0-1.17.43-1.17.8v7.03h-3v-11h3v1.5c.46-.78 1.4-1.5 3.33-1.5 2.4 0 4.17 1.53 4.17 4.83v7.17z" />
  </svg>
);
const PinterestIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.18 2.56 7.74 6.25 9.17-.07-.57-.14-1.46.06-2.07.2-.6.76-3.26.76-3.26s-.26-.52-.26-1.29c0-1.21.7-2.12 1.58-2.12.75 0 1.1.56 1.1.92 0 .76-.48 1.88-.72 2.9-.22.95.49 1.73 1.44 1.73 1.73 0 3.07-1.78 3.07-4.37 0-2.37-1.7-3.95-4.14-3.95-2.82 0-4.49 2.11-4.49 4.13 0 .77.29 1.58.62 1.94.07.08.08.15.06.27-.06.28-.18.72-.25 1.05-.03.11-.12.15-.22.1-.47-.23-1.13-.58-1.53-1.15-.49-.71-.78-1.77-.78-2.9 0-3.32 2.45-6.32 7.15-6.32 3.86 0 6.64 2.76 6.64 6.55 0 3.7-2.28 6.77-5.5 6.77-1.07 0-1.8-.57-2.1-1.07v1.44c-.2.78-.5 1.5-.83 2.15C13 21.6 17 22 22 17c2-3 2-6 2-10 0-5.52-4.48-10-10-10z" />
  </svg>
);
// Floating "Chat with Us" button icon
const ChatIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const SocialButton = ({ icon: Icon, label, href = "#" }: any) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    className="w-10 h-10 flex items-center justify-center bg-zinc-700/50 hover:bg-amber-600 rounded-lg transition duration-300"
  >
    <Icon className="w-5 h-5 text-zinc-300 hover:text-white" />
  </a>
);

const FooterLink = ({ href = "#", children }: any) => (
  <a
    href={href}
    className="text-zinc-400 hover:text-amber-500 transition duration-200 block mb-2"
  >
    {children}
  </a>
);

const ContactDetail = ({ icon: Icon, content }: any) => (
  <div className="flex items-start mb-3">
    <Icon className="shrink-0 w-5 h-5 text-amber-500 mr-3 mt-1" />
    <div className="text-sm">
      {content.map((line: string, index: number) => (
        <p key={index} className="text-zinc-400 leading-relaxed">
          {line}
        </p>
      ))}
    </div>
  </div>
);
export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white font-sans relative">
      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1: Brand Info and Socials */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* The 360 logo circle - using CSS to mimic the look */}
              {/* <div className="bg-linear-to-r from-yellow-500 to-yellow-600 h-10 w-10 flex items-center justify-center p-4 rounded-full font-bold">
                360
              </div> */}
              <Image
                src="/new_logo.png"
                height={150}
                width={150}
                alt="logo"
                className="object-cover rounded-full "
              />
              {/* <h2 className="text-2xl font-bold text-white font-playfair">
                360 Salon & Academy
              </h2> */}
            </div>
            <p className="text-sm text-zinc-400 mb-6 leading-relaxed pr-4">
              Redefining beauty through luxury services and professional
              education. Where elegance meets expertise in the heart of the
              beauty industry.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-3">
                <SocialButton
                  icon={FacebookIcon}
                  label="Facebook"
                  href="https://www.facebook.com/share/1AEKQTcuXc/"
                />
                <SocialButton
                  icon={InstagramIcon}
                  label="Instagram"
                  href="https://www.instagram.com/360salonacademy?igsh=bzg5ZXluNjgwYTFn"
                />
                <SocialButton
                  icon={FacebookIcon}
                  label="Facebook (share)"
                  href="https://www.facebook.com/share/17bCQuEfJh/"
                />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-amber-500 mb-4 uppercase tracking-wider">
              Quick Links
            </h3>
            <nav>
              <FooterLink href="#home">Home</FooterLink>
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#services">Salon Services</FooterLink>
              <FooterLink href="#academy">Academy Courses</FooterLink>
              <FooterLink href="#gallery">Gallery</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </nav>
          </div>

          {/* Column 3: Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-amber-500 mb-4 uppercase tracking-wider">
              Contact Info
            </h3>
            <div className="space-y-4">
              <ContactDetail
                icon={MapPinIcon}
                content={[
                  "123 Beauty Boulevard",
                  "Luxury District, City 12345",
                ]}
              />
              <ContactDetail icon={PhoneIcon} content={["(555) 360-SALON"]} />
              <ContactDetail
                icon={MailIcon}
                content={["info@360salonacademy.com"]}
              />
              <ContactDetail
                icon={ClockIcon}
                content={["Mon-Fri: 9AM-8PM", "Sat: 8AM-6PM, Sun: 10AM-5PM"]}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright and Policy Links */}
      <div className="border-t border-zinc-800 bg-[#111827] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500">
          <p className="mb-2 md:mb-0">
            © 2025 360 Salon & Academy. All rights reserved.
          </p>
          <div className="space-x-4">
            <a href="#" className="hover:text-amber-500 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-amber-500 transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-amber-500 transition">
              Refund Policy
            </a>
          </div>
        </div>
      </div>

      {/* Floating "Talk with Us" Button */}
      {/* <a
        href="#"
        className="fixed bottom-6 right-6 z-50 flex items-center py-3 px-5 bg-black text-white rounded-full shadow-xl 
                           hover:bg-amber-600 transition duration-300 cursor-pointer"
      >
        <FaHeadset className="w-5 h-5 mr-2" />
        <span className="font-medium">Talk with Us</span>
      </a> */}
    </footer>
  );
}
