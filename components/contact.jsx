"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, CheckCircle, Send } from "lucide-react"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value.trimStart() }));  // ✅ Prevent leading spaces
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")
    setIsSubmitted(false)
    // ✅ Validate email before submitting
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formState.email)) {
    setError("Please enter a valid email address.");
    setIsSubmitting(false);
    return;
  }
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong!")
      }

      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      })
    } catch (err) {
      console.error("Form submission error:", err);
      const errorMessage = err.message.includes("Failed to fetch")
        ? "Network error. Please check your internet connection."
        : err.message || "Failed to send message. Please try again.";
    
      setError(errorMessage);
    }
     finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-accent" />,
      title: "Our Location",
      details: "123 Marketing Street, Suite 100, New York, NY 10001",
    },
    {
      icon: <Phone className="h-5 w-5 text-accent" />,
      title: "Phone Number",
      details: "+1 (555) 123-4567",
    },
    {
      icon: <Mail className="h-5 w-5 text-accent" />,
      title: "Email Address",
      details: "hello@digitalagency.com",
    },
    {
      icon: <Clock className="h-5 w-5 text-accent" />,
      title: "Working Hours",
      details: "Monday - Friday: 9AM - 6PM",
    },
  ]

  return (
    <section id="contact" className="py-20 relative overflow-hidden noise-overlay">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background dark:from-muted/10 dark:to-background"></div>
      <div className="blob-bg absolute top-[10%] right-[20%] dark:opacity-20"></div>
      <div className="blob-bg absolute bottom-[20%] left-[10%] dark:opacity-20" style={{ animationDelay: "-5s" }}></div>
      <div className="absolute inset-0 dot-pattern"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <motion.h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 text-gradient dark:text-gradient">
  Get in Touch
</motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-[700px] text-muted-foreground dark:text-white/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
          >
            Ready to elevate your digital strategy? Contact us today.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 glass-effect dark:glass-effect-dark"
          >
            <h3 className="text-2xl font-bold mb-6 dark:text-white heading-hover-gradient">Send Us a Message</h3>
            <p className="text-muted-foreground dark:text-white/70 mb-8">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="w-16 h-16 bg-accent/10 dark:bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Message Sent!</h3>
                <p className="text-muted-foreground dark:text-white/70">
                  Thank you for reaching out. We'll be in touch with you shortly.
                </p>
                <p className="text-muted-foreground dark:text-white/70 mt-2">
                  We've sent a confirmation email to your inbox.
                </p>
                <button
                  className="mt-6 bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-md font-medium btn-hover-effect"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium dark:text-white">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-accent dark:text-white transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium dark:text-white">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-accent dark:text-white transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium dark:text-white">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-accent dark:text-white transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium dark:text-white">
                      Company Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      placeholder="Acme Inc."
                      className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-accent dark:text-white transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium dark:text-white">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project and requirements..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-accent dark:text-white transition-all"
                    required
                  />
                </div>

                <button
  type="submit"
  className={`w-full bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center btn-hover-effect shine ${
    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
  }`}
  disabled={isSubmitting}  // ✅ Prevent multiple submissions
>
  {isSubmitting ? (
    <>
      <span className="animate-spin mr-2">
        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </span>
      Sending...
    </>
  ) : (
    <>
      Send Message <Send className="ml-2 h-5 w-5" />
    </>
  )}
</button>

                {error && <p className="text-red-500 mt-2">{error}</p>}
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 glass-effect dark:glass-effect-dark">
              <h3 className="text-2xl font-bold mb-6 dark:text-white heading-hover-gradient">Contact Information</h3>
              <p className="text-muted-foreground dark:text-white/70 mb-8">
                Reach out to us directly using the information below.
              </p>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="mr-4 mt-1 p-3 bg-accent/10 dark:bg-accent/20 rounded-full group-hover:bg-accent/20 dark:group-hover:bg-accent/30 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium dark:text-white">{item.title}</h4>
                      <p className="text-muted-foreground dark:text-white/70">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden glass-effect dark:glass-effect-dark">
              <div className="aspect-video w-full bg-muted rounded-md overflow-hidden">
                {/* Map placeholder - would be replaced with actual map component */}
                <div className="w-full h-full flex items-center justify-center bg-muted dark:bg-gray-900 relative">
                  <MapPin className="h-12 w-12 text-muted-foreground/50" />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent opacity-50"></div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 dark:text-white heading-hover-gradient">Our Location</h3>
                <p className="text-muted-foreground dark:text-white/70">
                  Visit us at our office to discuss your project in person.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

