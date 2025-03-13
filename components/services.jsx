"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  BarChart3,
  Search,
  Mail,
  Share2,
  PenTool,
  LineChart,
  ArrowRight,
  CheckCircle,
  Code,
  Monitor,
  Heart,
  Users,
  Smartphone,
  Database,
  Cloud,
  Shield,
  Cpu,
  X,
} from "lucide-react"

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [expandedService, setExpandedService] = useState(null)
  const serviceRef = useRef(null)

  // Default services with Content Creation added to each category
  const services = [
    // Digital Marketing Services
    {
      icon: <Search className="h-10 w-10 text-accent" />,
      title: "SEO Optimization",
      description: "Improve your search rankings and drive organic traffic to your website.",
      features: [
        "Keyword Research & Strategy",
        "On-Page SEO Optimization",
        "Technical SEO Audits",
        "Link Building Campaigns",
        "Local SEO Optimization",
      ],
      category: "digital-marketing",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-accent" />,
      title: "PPC Advertising",
      description: "Strategic pay-per-click campaigns that maximize ROI and conversions.",
      features: [
        "Google Ads Management",
        "Social Media Advertising",
        "Display & Remarketing",
        "Landing Page Optimization",
        "Conversion Tracking",
      ],
      category: "digital-marketing",
    },
    {
      icon: <Share2 className="h-10 w-10 text-accent" />,
      title: "Social Media",
      description: "Engage your audience and build brand awareness across social platforms.",
      features: [
        "Platform Strategy & Setup",
        "Content Creation & Curation",
        "Community Management",
        "Influencer Partnerships",
        "Performance Analytics",
      ],
      category: "digital-marketing",
    },
    {
      icon: <Mail className="h-10 w-10 text-accent" />,
      title: "Email Marketing",
      description: "Targeted email campaigns that nurture leads and drive customer retention.",
      features: [
        "Campaign Strategy & Planning",
        "Email Template Design",
        "Automation & Workflows",
        "List Segmentation",
        "A/B Testing & Optimization",
      ],
      category: "digital-marketing",
    },
    {
      icon: <PenTool className="h-10 w-10 text-accent" />,
      title: "Content Creation",
      description: "Compelling content that tells your story and connects with your audience.",
      features: [
        "Blog Posts & Articles",
        "Whitepapers & Ebooks",
        "Video Production",
        "Infographics & Visuals",
        "Content Distribution",
      ],
      category: "digital-marketing",
    },
    {
      icon: <LineChart className="h-10 w-10 text-accent" />,
      title: "Analytics & Reporting",
      description: "Data-driven insights to measure performance and optimize strategies.",
      features: [
        "Custom Dashboard Setup",
        "KPI Tracking & Analysis",
        "Conversion Optimization",
        "Competitive Analysis",
        "Monthly Performance Reports",
      ],
      category: "digital-marketing",
    },

    // IT Solutions Services
    {
      icon: <Monitor className="h-10 w-10 text-accent" />,
      title: "Website Designing",
      description: "Custom website designs that reflect your brand and engage your audience.",
      features: [
        "Responsive Design",
        "UI/UX Design",
        "Wireframing & Prototyping",
        "Brand Integration",
        "Conversion-Focused Layouts",
      ],
      category: "it-solutions",
    },
    {
      icon: <Code className="h-10 w-10 text-accent" />,
      title: "Web Development",
      description: "Custom web applications and websites built with the latest technologies.",
      features: [
        "Frontend Development",
        "Backend Development",
        "E-commerce Solutions",
        "CMS Integration",
        "API Development",
      ],
      category: "it-solutions",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-accent" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: [
        "iOS & Android Development",
        "React Native & Flutter",
        "App Store Optimization",
        "UI/UX Design",
        "Maintenance & Support",
      ],
      category: "it-solutions",
    },
    

    // Healthcare Services
    {
      icon: <Heart className="h-10 w-10 text-accent" />,
      title: "Healthcare Marketing",
      description: "Specialized marketing strategies for healthcare providers and organizations.",
      features: [
        "HIPAA Compliant Marketing",
        "Patient Acquisition Strategies",
        "Healthcare SEO",
        "Medical Content Creation",
        "Reputation Management",
      ],
      category: "healthcare",
    },
    {
      icon: <Users className="h-10 w-10 text-accent" />,
      title: "Patient Engagement",
      description: "Digital solutions to improve patient engagement and satisfaction.",
      features: [
        "Patient Portal Development",
        "Appointment Scheduling Systems",
        "Telehealth Integration",
        "Patient Education Materials",
        "Feedback & Survey Systems",
      ],
      category: "healthcare",
    },
    {
      icon: <Shield className="h-10 w-10 text-accent" />,
      title: "Healthcare IT Security",
      description: "Secure solutions that protect patient data and ensure compliance.",
      features: [
        "HIPAA Compliance",
        "Security Assessments",
        "Data Encryption",
        "Access Control Systems",
        "Security Training",
      ],
      category: "healthcare",
    },    
  ]

  const filteredServices =
    activeCategory === "all" ? services : services.filter((service) => service.category === activeCategory)

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  // Scroll to service section when category changes
  useEffect(() => {
    if (serviceRef.current && activeCategory !== "all") {
      // Add a small delay to allow for animation
      setTimeout(() => {
        serviceRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 100)
    }
  }, [activeCategory])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Categories for filter buttons
  const categories = [
    { id: "all", label: "All Services" },
    { id: "digital-marketing", label: "Digital Marketing" },
    { id: "it-solutions", label: "IT Solutions" },
    { id: "healthcare", label: "Healthcare" },
  ]

  // Get category label
  const getCategoryLabel = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId)
    return category ? category.label : ""
  }

  return (
    <section id="services" className="py-24 relative overflow-hidden noise-overlay dark:bg-primary/90">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-accent/5 dark:from-secondary/10 dark:to-accent/10"></div>
      <div className="blob-bg absolute top-[20%] left-[10%] dark:opacity-20"></div>
      <div
        className="blob-bg absolute bottom-[10%] right-[20%] dark:opacity-20"
        style={{ animationDelay: "-7s" }}
      ></div>
      <div className="absolute inset-0 dot-pattern dark:opacity-20"></div>

      <div className="container px-4 md:px-6 relative z-10" ref={serviceRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1 mb-6 rounded-full bg-primary/10 dark:bg-accent/20 text-accent font-medium text-sm glass-effect dark:glass-effect-dark">
              Our Services
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 text-gradient dark:text-white heading-hover">
              {activeCategory === "all"
                ? "Comprehensive Digital Solutions"
                : `${getCategoryLabel(activeCategory)} Solutions`}
            </h2>
            <p className="text-xl text-muted-foreground dark:text-white/70 mb-8">
              {activeCategory === "all"
                ? "We offer a full spectrum of digital services tailored to your business goals and target audience."
                : `Our ${getCategoryLabel(activeCategory)} services are designed to help your business thrive in the digital landscape.`}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-md font-medium btn-glow shine flex items-center btn-hover-effect"
                onClick={() => scrollToSection("portfolio")}
              >
                Explore All Services <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button
                className="border border-primary dark:border-white/20 text-primary dark:text-white hover:bg-primary/10 dark:hover:bg-white/10 px-4 py-2 rounded-md font-medium glass-effect dark:glass-effect-dark btn-hover-effect"
                onClick={() => scrollToSection("contact")}
              >
                Schedule a Consultation
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 dark:bg-accent/10 rounded-lg"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 dark:bg-secondary/10 rounded-lg"></div>
            <div className="relative rounded-xl overflow-hidden card-3d">
            <img
                src="/comprehensive digital marketing solutions.jpg"
                alt="Our Services"
                className="w-full h-auto object-cover"
                style={{ maxHeight: "500px" }} // Ensures the image doesn't exceed 500px in height
              />
            </div>
          </motion.div>
        </div>

        <div className="mb-12">
          <ul className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <li key={category.id}>
                <button
                  className={`${
                    activeCategory === category.id
                      ? "bg-accent text-white shine"
                      : "glass-effect dark:glass-effect-dark dark:text-white hover:bg-accent/10"
                  } px-6 py-2 rounded-full text-base transition-all duration-300 btn-hover-effect`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            exit={{ opacity: 0, y: -10 }}
            ref={ref}
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="service-card-hover"
                layoutId={`service-card-${service.title}`}
              >
                <div
                  className="h-full transition-all border-t-4 border-t-accent bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 glass-effect dark:glass-effect-dark cursor-pointer"
                  onClick={() => setExpandedService(service)}
                >
                  <div className="mb-4 p-3 bg-accent/10 dark:bg-accent/20 rounded-lg w-fit">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-2 dark:text-white heading-hover">{service.title}</h3>
                  <p className="text-muted-foreground dark:text-white/70 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span className="dark:text-white/90">{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-accent font-medium">+ {service.features.length - 3} more features</li>
                    )}
                  </ul>
                  <button
                    className="text-accent font-medium flex items-center hover:underline animated-underline"
                    onClick={(e) => {
                      e.stopPropagation()
                      scrollToSection("contact")
                    }}
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Expanded Service Modal */}
        <AnimatePresence>
          {expandedService && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExpandedService(null)}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto"
                layoutId={`service-card-${expandedService.title}`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 dark:bg-accent/20 rounded-lg">{expandedService.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold dark:text-white">{expandedService.title}</h3>
                      <p className="text-sm text-accent">{getCategoryLabel(expandedService.category)}</p>
                    </div>
                  </div>
                  <button
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    onClick={() => setExpandedService(null)}
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <p className="text-muted-foreground dark:text-white/70 mb-6">{expandedService.description}</p>
                <h4 className="font-bold mb-4 dark:text-white">Key Features:</h4>
                <ul className="space-y-3 mb-6">
                  {expandedService.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span className="dark:text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-end gap-4">
                  <button
                    className="border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    onClick={() => setExpandedService(null)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-accent text-white px-4 py-2 rounded-md hover:bg-accent/90 transition-colors btn-hover-effect"
                    onClick={() => {
                      setExpandedService(null)
                      scrollToSection("contact")
                    }}
                  >
                    Get Started
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

