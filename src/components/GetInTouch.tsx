"use client";

import {
  Calendar,
  ClockIcon,
  GraduationCap,
  Mail,
  MailIcon,
  MapPin,
  MapPinIcon,
  Phone,
  PhoneIcon,
} from "lucide-react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.63.4 3.2 1.18 4.63l-.7 2.56 2.65-.68c1.38.74 2.91 1.13 4.47 1.13h.01c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zm4.79 13.91l-.22.37c-.32.55-.73.61-1.28.43-.52-.16-1.5-.6-2.88-1.78-.97-.84-1.63-1.87-1.84-2.22-.21-.37 0-.57.14-.72.11-.11.23-.27.35-.42.06-.08.11-.14.15-.2l.14-.23c.09-.15.06-.27-.01-.39-.06-.11-.2-.48-.28-.68-.14-.37-.32-.4-.44-.4-.12 0-.27.03-.43.03-.16 0-.34.07-.52.26-.17.18-.6.58-.6 1.41 0 .83.61 1.62.69 1.74.08.11 1.25 1.9 3.04 2.75 1.79.84 2.12.75 2.53.69.41-.06.87-.36 1-.74s.22-.65.15-.74c-.06-.09-.23-.15-.49-.29z" />
  </svg>
);

const ContactItem = ({ icon: Icon, title, content }: any) => (
  <div className="flex items-start mb-6">
    <div className="shrink-0 p-2 rounded-full bg-yellow-100 text-yellow-600 mr-4 mt-1">
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <h3 className="font-semibold text-zinc-800 mb-1">{title}</h3>
      {/* Render content as line breaks */}
      {content.map((line: string, index: number) => (
        <p key={index} className="text-zinc-600 text-sm">
          {line}
        </p>
      ))}
    </div>
  </div>
);
export default function GetInTouch() {
  const [activeTab, setActiveTab] = useState("appointment");
  const [loading, setLoading] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [formMessageType, setFormMessageType] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const fullName = (formData.get("name") as string) || "";
    const [first_name, ...rest] = fullName.split(" ");
    const last_name = rest.join(" ") || "";

    const data = {
      first_name,
      last_name,
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: "",
      service_interest:
        activeTab === "appointment"
          ? formData.get("service")
          : formData.get("course"),
      preferred_date: formData.get("date") || "",
      preferred_time: formData.get("time") || "",
      experience_level: formData.get("experience") || "",
      message: formData.get("message"),
      type: activeTab, // <-- ADD THIS
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const json = await res.json();

    setLoading(false);

    if (json.success) {
      setFormMessageType("success");
      setFormMessage("Submitted Successfully!");
      e.target.reset();
    } else {
      setFormMessageType("error");
      setFormMessage("Error submitting form");
    }

    // Remove message after 3 seconds
    setTimeout(() => {
      setFormMessage("");
    }, 3000);
  };

  const mapIframeSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1627964434914!2d-74.00844738459463!3d40.7132920793315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a18359b3d09%3A0x8382d5e236b2880c!2sNew%20York%20City%20Hall!5e0!3m2!1sen!2sus!4v1636577881000!5m2!1sen!2sus";

  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-800 mb-6 font-playfair">
            Get In <span className="text-[#CA8A04]">Touch</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Ready to transform your look or start your beauty career? Contact us
            today to book an appointment or learn more about our academy
            programs.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="">
            {/* Contact Info */}
            <div className="flex justify-center p-8 min-h-screen ">
              <div className="w-full max-w-2xl">
                <h1 className="text-2xl font-bold font-playfair text-zinc-800 mb-10">
                  Visit Our Salon & Academy
                </h1>

                {/* Contact Details Grid */}
                <div className="space-y-6 mb-8">
                  <ContactItem
                    icon={MapPinIcon}
                    title="Location"
                    content={[
                      "123 Beauty Boulevard",
                      "Luxury District, City 12345",
                    ]}
                  />

                  <ContactItem
                    icon={PhoneIcon}
                    title="Phone"
                    content={["(555) 360-SALON", "(555) 360-7256"]}
                  />

                  <ContactItem
                    icon={ClockIcon}
                    title="Hours"
                    content={[
                      "Mon - Fri: 9:00 AM - 8:00 PM",
                      "Sat: 8:00 AM - 6:00 PM",
                      "Sun: 10:00 AM - 5:00 PM",
                    ]}
                  />

                  <ContactItem
                    icon={MailIcon}
                    title="Email"
                    content={[
                      "info@360salonacademy.com",
                      "academy@360salonacademy.com",
                    ]}
                  />
                </div>

                {/* Google Map Section */}
                <div className="rounded-xl overflow-hidden shadow-lg border border-zinc-200 mb-8">
                  {/* The map container to mimic the appearance of the embedded map */}
                  <div className="aspect-video w-full">
                    <iframe
                      src={mapIframeSrc}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Location Map"
                    />
                  </div>
                </div>

                {/* WhatsApp Button */}
                <div className="">
                  <button
                    onClick={() => console.log("Directing to WhatsApp chat...")}
                        className={[
                          "inline-flex",
                          "items-center",
                          "justify-center",
                          "px-8",
                          "py-3",
                          "bg-green-500",
                          "text-white",
                          "font-semibold",
                          "text-lg",
                          "rounded-lg",
                          "shadow-lg",
                          "shadow-green-500/50",
                          "hover:bg-green-600",
                          "transition",
                          "duration-200",
                          "transform",
                          "hover:scale-[1.02]",
                          "active:scale-[0.98]",
                        ].join(" ")}
                  >
                    <FaWhatsapp className="w-5 h-5 mr-3" />
                    Chat on WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Tabs */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={() => setActiveTab("appointment")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-md font-medium transition ${
                  activeTab === "appointment"
                    ? "bg-yellow-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
              </button>
              <button
                onClick={() => setActiveTab("enquiry")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-md font-medium transition ${
                  activeTab === "enquiry"
                    ? "bg-yellow-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <GraduationCap className="w-5 h-5" />
                Academy Enquiry
              </button>
            </div>
            {formMessage && (
              <div
                className={`p-3 rounded-md text-center text-sm font-medium ${
                  formMessageType === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {formMessage}
              </div>
            )}

            {/* Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    {activeTab === "appointment" ? "Service" : "Course"}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  {/* <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black">
                      <option>
                        {activeTab === "appointment"
                          ? "Select a service"
                          : "Select a course"}
                      </option>
                      {activeTab === "appointment" ? (
                        <>
                          <option>Hair Cut & Styling</option>
                          <option>Makeup</option>
                          <option>Nail Art</option>
                          <option>Facial</option>
                          <option>Spa Treatment</option>
                        </>
                      ) : (
                        <>
                          <option>Hair Styling Master</option>
                          <option>Professional Makeup Artistry</option>
                          <option>Nail Art & Design</option>
                          <option>Advanced Skin Therapy</option>
                        </>
                      )}
                    </select> */}
                  {activeTab === "appointment" ? (
                    <select
                      name="service"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
                      required
                    >
                      <option>Hair Cut & Styling</option>
                      <option>Makeup</option>
                      <option>Nail Art</option>
                      <option>Facial</option>
                      <option>Spa Treatment</option>
                    </select>
                  ) : (
                    <select
                      name="course"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
                      required
                    >
                      <option>Hair Styling Master</option>
                      <option>Professional Makeup Artistry</option>
                      <option>Nail Art & Design</option>
                      <option>Advanced Skin Therapy</option>
                    </select>
                  )}
                </div>
              </div>

              {activeTab === "appointment" && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="date"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Preferred Time <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="time"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
                    >
                      <option>Select time</option>
                      <option>10:00 AM</option>
                      <option>11:00 AM</option>
                      <option>12:00 PM</option>
                      <option>02:00 PM</option>
                      <option>03:00 PM</option>
                      <option>04:00 PM</option>
                      <option>05:00 PM</option>
                    </select>
                  </div>
                </div>
              )}

              {activeTab === "enquiry" && (
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Experience Level <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="experience"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
                  >
                    <option>Select your experience level</option>
                    <option>Complete Beginner</option>
                    <option>Some Experience</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                    <option>Working Professional</option>
                  </select>
                </div>
              )}

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Additional Message
                </label>
                <textarea
                  placeholder="Any specific requests or questions? (Max 500 characters)"
                  rows={4}
                  name="message"
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
                ></textarea>
                <p className="text-gray-500 text-sm mt-1">0/500 characters</p>
              </div>

              {/* <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-md font-medium text-lg flex items-center justify-center gap-2"
                >
                  {activeTab === "appointment" ? (
                    <>
                      <Calendar className="w-5 h-5" />
                      Book Appointment
                    </>
                  ) : (
                    <>
                      <GraduationCap className="w-5 h-5" />
                      Submit Enquiry
                    </>
                  )}
                </button> */}
              <button
                type="submit"
                disabled={loading}
                className={[
                  "w-full",
                  "py-3",
                  "px-6",
                  "rounded-md",
                  "font-medium",
                  "text-lg",
                  "flex",
                  "items-center",
                  "justify-center",
                  "gap-2",
                  loading ? "bg-yellow-400 cursor-not-allowed" : "bg-yellow-500 hover:bg-yellow-600",
                  "text-white",
                  "transition",
                ].join(" ")}
              >
                {loading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Processing...
                  </>
                ) : activeTab === "appointment" ? (
                  <>
                    <Calendar className="w-5 h-5" />
                    Book Appointment
                  </>
                ) : (
                  <>
                    <GraduationCap className="w-5 h-5" />
                    Submit Enquiry
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
