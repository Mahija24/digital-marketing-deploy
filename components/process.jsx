"use client"

import { motion } from "framer-motion"
import { Search, FileText, BarChart3, Zap, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Process() {
  const steps = [
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: "Discovery & Research",
      description:
        "We start by understanding your business, goals, target audience, and competitive landscape to develop a tailored strategy.",
    },
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "Strategy Development",
      description:
        "Based on our research, we create a comprehensive digital marketing strategy aligned with your business objectives.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Implementation",
      description:
        "Our team executes the strategy across all relevant channels, creating campaigns that drive results.",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "Monitoring & Optimization",
      description:
        "We continuously track performance, analyze data, and make data-driven optimizations to improve results.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: "Reporting & Refinement",
      description:
        "Regular reporting keeps you informed of progress, and we refine strategies based on results and feedback.",
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-primary/10 text-primary font-medium text-sm">
            Our Process
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">How We Drive Results</h2>
          <p className="text-xl text-muted-foreground">
            Our proven 5-step process ensures we deliver consistent, measurable results for your business.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-muted-foreground text-lg">{step.description}</p>
                </div>

                <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 z-10">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow"></div>
                  {step.icon}
                </div>

                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-primary hover:bg-primary/90">
            Learn More About Our Approach <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

