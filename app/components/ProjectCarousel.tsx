"use client";

import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  image: string;
  slug: string;
}

interface ProjectCarouselProps {
  projects: Project[];
  viewProjectText: string;
}

export default function ProjectCarousel({ projects, viewProjectText }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex >= projects.length) nextIndex = 0;
      if (nextIndex < 0) nextIndex = projects.length - 1;
      return nextIndex;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full mt-24 sm:mt-32 flex justify-center">
      <div className="relative w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[16/9] max-h-[600px] mx-auto">
          <AnimatePresence initial={false} custom={currentIndex}>
            <motion.div
              key={currentIndex}
              custom={currentIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute inset-0"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute inset-0 w-full">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden group">
                    <Image
                      src={projects[currentIndex].image}
                      alt={projects[currentIndex].title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
                    
                    <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 sm:pb-12">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-center w-full px-4 sm:px-8 max-w-3xl"
                      >
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-white mb-2 sm:mb-3">
                          {projects[currentIndex].title}
                        </h3>
                        <p className="text-zinc-200 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 line-clamp-2 max-w-2xl mx-auto">
                          {projects[currentIndex].description}
                        </p>
                        <Link
                          href={`/projects/${projects[currentIndex].slug}`}
                          className="inline-flex px-4 py-2 text-sm sm:text-base text-emerald-400 hover:text-emerald-300 bg-zinc-800/50 rounded-full border border-zinc-700/50 hover:border-zinc-700 transition-colors"
                        >
                          {viewProjectText} →
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-6 sm:mt-8">
          {projects.map((_, index) => (
            <motion.button
              key={index}
              className={`h-[2px] w-8 rounded-full transition-colors ${
                index === currentIndex ? 'bg-emerald-400' : 'bg-zinc-600'
              }`}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: index === currentIndex ? '#34d399' : '#52525b' 
              }}
              whileTap={{ scale: 0.95 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 