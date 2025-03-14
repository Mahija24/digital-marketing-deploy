"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Brands() {
  const containerRef = useRef(null);
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  const brands = [
    { name: "Brand 1", logo: "/placeholder.svg" },
    { name: "Brand 2", logo: "/placeholder.svg" },
    { name: "Brand 3", logo: "/placeholder.svg" },
    { name: "Brand 4", logo: "/placeholder.svg" },
    { name: "Brand 5", logo: "/placeholder.svg" },
    { name: "Brand 6", logo: "/placeholder.svg" },
    { name: "Brand 7", logo: "/placeholder.svg" },
    { name: "Brand 8", logo: "/placeholder.svg" },
    { name: "Brand 9", logo: "/placeholder.svg" },
    { name: "Brand 10", logo: "/placeholder.svg" },
  ];

  const firstRow = brands.slice(0, 5);
  const secondRow = brands.slice(5);

  useEffect(() => {
    const startMarquee = async () => {
      await controls1.start({
        x: [0, -1920],
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      });
    };

    const startMarqueeReverse = async () => {
      await controls2.start({
        x: [-1920, 0],
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      });
    };

    startMarquee();
    startMarqueeReverse();
  }, [controls1, controls2]);

  return (
    <section
      className="py-16 relative overflow-hidden bg-transparent"
      ref={containerRef}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10"></div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-[5%] w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-[15%] w-72 h-72 bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 mb-4 rounded-full bg-primary/10 dark:bg-primary/20 text-accent font-medium text-sm">
            Trusted Partners
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient relative -top-2">
              Brands That Trust Us
            </h2>
          <p className="text-muted-foreground dark:text-white/70 max-w-2xl mx-auto">
            We've helped businesses of all sizes achieve their marketing goals
            and drive growth.
          </p>
        </div>
      </div>

      {/* Marquee Animation */}
      <div className="relative w-full overflow-hidden py-8">
        {/* First row - Left to Right */}
        <div className="flex space-x-12 mb-12 overflow-hidden">
          <motion.div className="flex space-x-12 min-w-max" animate={controls1}>
            {[...firstRow, ...firstRow, ...firstRow].map((brand, index) => (
              <div
              key={`first-${index}`}
              className="flex items-center justify-center min-w-[180px] h-24 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 hover:shadow-lg rounded-lg p-4 bg-transparent dark:bg-transparent"
            >
              <img
                src={brand.logo || "/placeholder.svg"}
                alt={brand.name}
                className="max-h-12 max-w-[150px] bg-transparent dark:bg-transparent"
              />
            </div>
            
            
            ))}
          </motion.div>
        </div>

        {/* Second row - Right to Left */}
        <div className="flex space-x-12 overflow-hidden">
          <motion.div className="flex space-x-12 min-w-max" animate={controls2}>
            {[...secondRow, ...secondRow, ...secondRow].map((brand, index) => (
              <div
              key={`first-${index}`}
              className="flex items-center justify-center min-w-[180px] h-24 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 hover:shadow-lg rounded-lg p-4 bg-transparent dark:bg-transparent"
            >
              <img
                src={brand.logo || "/placeholder.svg"}
                alt={brand.name}
                className="max-h-12 max-w-[150px] bg-transparent dark:bg-transparent"
              />
            </div>
            
            ))}
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container px-4 md:px-6 mt-12">
        <div className="text-center">
          <a
            href="/clients"
            className="inline-flex items-center text-accent font-medium hover:underline"
          >
            View Our Client Success Stories
          </a>
        </div>
      </div>
    </section>
  );
}
