"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Cta() {
  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-accent z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90"></div>
        <div className="blob-bg absolute top-[10%] right-[20%] opacity-20"></div>
        <div className="blob-bg absolute bottom-[20%] left-[10%] opacity-20" style={{ animationDelay: "-5s" }}></div>
        <div className="absolute inset-0 dot-pattern opacity-10"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 text-white heading-hover">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let's work together to create a digital strategy that drives real results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-white text-accent hover:bg-white/90 px-6 py-3 rounded-md font-medium text-lg flex items-center justify-center mx-auto btn-hover-effect shine"
            >
              Get a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-md font-medium text-lg flex items-center justify-center mx-auto btn-hover-effect"
            >
              View Our Work <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

