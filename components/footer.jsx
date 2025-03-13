"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-accent/5"></div>
        <div className="blob-bg absolute top-[10%] right-[20%] opacity-10"></div>
        <div className="blob-bg absolute bottom-[20%] left-[10%] opacity-10" style={{ animationDelay: "-5s" }}></div>
        <div className="absolute inset-0 dot-pattern opacity-10"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link
              href="/"
              className="text-2xl font-bold text-gradient mb-6 inline-block heading-hover"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
            >
              DigitalPro
            </Link>
            <p className="text-gray-400 mb-6">
              We help businesses grow through strategic digital marketing, innovative IT solutions, and cutting-edge
              healthcare technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors transform hover:scale-110">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors transform hover:scale-110">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors transform hover:scale-110">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors transform hover:scale-110">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors transform hover:scale-110">
                <FaYoutube size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6 heading-hover">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-accent transition-all duration-300 flex items-center footer-link-hover"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("about")
                  }}
                >
                  <ArrowRight className="mr-2 h-4 w-4" />
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-accent transition-all duration-300 flex items-center footer-link-hover"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("services")
                  }}
                >
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-gray-400 hover:text-accent transition-all duration-300 flex items-center footer-link-hover"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("portfolio")
                  }}
                >
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-gray-400 hover:text-accent transition-all duration-300 flex items-center footer-link-hover"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("blog")
                  }}
                >
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-accent transition-all duration-300 flex items-center footer-link-hover"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("contact")
                  }}
                >
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6 heading-hover">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-accent transition-all duration-300 flex items-center footer-link-hover"
                  onClick={(e) => {
                    e.preventDefault()
                    const servicesSection = document.getElementById("services")
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: "smooth" })
                      // Find the digital marketing button and click it
                      setTimeout(() => {
                        const buttons = document.querySelectorAll("#services button")
                        const digitalMarketingButton = Array.from(buttons).find((button) =>
                          button.textContent.includes("Digital Marketing"),
                        )
                        if (digitalMarketingButton) digitalMarketingButton.click()
                      }, 800)
                    }
                  }}
                >
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Digital Marketing
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-accent transition-all duration-300 flex items-center footer-link-hover"
                  onClick={(e) => {
                    e.preventDefault()
                    const servicesSection = document.getElementById("services")
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: "smooth" })
                      // Find the IT solutions button and click it
                      setTimeout(() => {
                        const buttons = document.querySelectorAll("#services button")
                        const itSolutionsButton = Array.from(buttons).find((button) =>
                          button.textContent.includes("IT Solutions"),
                        )
                        if (itSolutionsButton) itSolutionsButton.click()
                      }, 800)
                    }
                  }}
                >
                  <ArrowRight className="mr-2 h-4 w-4" />
                  IT Solutions
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-accent transition-all duration-300 flex items-center footer-link-hover"
                  onClick={(e) => {
                    e.preventDefault()
                    const servicesSection = document.getElementById("services")
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: "smooth" })
                      // Find the healthcare button and click it
                      setTimeout(() => {
                        const buttons = document.querySelectorAll("#services button")
                        const healthcareButton = Array.from(buttons).find((button) =>
                          button.textContent.includes("Healthcare"),
                        )
                        if (healthcareButton) healthcareButton.click()
                      }, 800)
                    }
                  }}
                >
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Healthcare
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-accent transition-all duration-300 flex items-center footer-link-hover"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("services")
                  }}
                >
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-accent transition-all duration-300 flex items-center footer-link-hover"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("services")
                  }}
                >
                  <ArrowRight className="mr-2 h-4 w-4" />
                  App Development
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6 heading-hover">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <MapPin className="mr-3 mt-1 text-accent group-hover:text-white transition-colors" size={18} />
                <span className="text-gray-400 group-hover:text-white transition-colors">
                  123 Digital Street, Tech City, CA 90210, USA
                </span>
              </li>
              <li className="flex items-center group">
                <Phone className="mr-3 text-accent group-hover:text-white transition-colors" size={18} />
                <a href="tel:+11234567890" className="text-gray-400 group-hover:text-white transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center group">
                <Mail className="mr-3 text-accent group-hover:text-white transition-colors" size={18} />
                <a href="mailto:info@digitalpro.com" className="text-gray-400 group-hover:text-white transition-colors">
                  info@digitalpro.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 pb-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold mb-2 heading-hover">Subscribe to Our Newsletter</h3>
              <p className="text-gray-400">Stay updated with our latest news, updates, and offers.</p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  required
                />
                <button
                  type="submit"
                  className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-md font-medium btn-hover-effect shine"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
            &copy; {currentYear} DigitalPro. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="text-gray-400 hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-accent transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-accent transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

