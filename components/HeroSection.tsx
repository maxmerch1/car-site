'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Star, Shield, Award } from 'lucide-react'

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Collage Background */}
      <div className="absolute inset-0 z-0">
        {/* Grid of car detailing images */}
        <div className="grid grid-cols-3 grid-rows-3 h-full w-full">
          {/* Top row */}
          <motion.div 
            className="bg-cover bg-center hover:scale-105 transition-transform duration-700"
            style={{ backgroundImage: "url('/carpics/hero-bg.png')" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          />
          <motion.div 
            className="bg-cover bg-center hover:scale-105 transition-transform duration-700"
            style={{ backgroundImage: "url('/carpics/service-1.png')" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.div 
            className="bg-cover bg-center hover:scale-105 transition-transform duration-700"
            style={{ backgroundImage: "url('/carpics/Screenshot 2025-09-23 175819.png')" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          
          {/* Middle row */}
          <motion.div 
            className="bg-cover bg-center hover:scale-105 transition-transform duration-700"
            style={{ backgroundImage: "url('/carpics/Screenshot 2025-09-23 175831.png')" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.div 
            className="bg-cover bg-center hover:scale-105 transition-transform duration-700"
            style={{ backgroundImage: "url('/carpics/Screenshot 2025-09-23 175842.png')" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          <motion.div 
            className="bg-cover bg-center hover:scale-105 transition-transform duration-700"
            style={{ backgroundImage: "url('/carpics/Screenshot 2025-09-23 175852.png')" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
          
          {/* Bottom row */}
          <motion.div 
            className="bg-cover bg-center hover:scale-105 transition-transform duration-700"
            style={{ backgroundImage: "url('/carpics/Screenshot 2025-09-23 175901.png')" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          />
          <motion.div 
            className="bg-cover bg-center hover:scale-105 transition-transform duration-700"
            style={{ backgroundImage: "url('/carpics/Screenshot 2025-09-23 175911.png')" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          />
          <motion.div 
            className="bg-cover bg-center hover:scale-105 transition-transform duration-700"
            style={{ backgroundImage: "url('/carpics/Screenshot 2025-09-23 175925.png')" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          />
        </div>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-luxury-black/70" />
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-black/60 via-luxury-black/40 to-luxury-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-transparent to-luxury-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="space-y-8"
        >
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight"
          >
            <span className="text-white">Luxury Detailing,</span>
            <br />
            <span className="text-gradient">Flawless Finish.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-luxury-silver max-w-3xl mx-auto leading-relaxed"
          >
            Protect your investment and fall in love with your car again.
            <br />
            <span className="text-luxury-gold font-semibold">
              Professional expertise that transforms your vehicle into a pristine masterpiece.
            </span>
          </motion.p>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-8 text-luxury-silver"
          >
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-luxury-gold fill-current" />
              <span className="font-semibold">500+ Cars Detailed</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-luxury-gold" />
              <span className="font-semibold">10 Years Experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-luxury-gold" />
              <span className="font-semibold">100% Satisfaction</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="btn-luxury text-lg px-12 py-4 text-luxury-black font-bold"
            >
              Book Your Detail Today
            </motion.button>
            <motion.a
              href="tel:+18603996601"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-luxury-silver hover:text-luxury-gold transition-colors duration-300 text-lg font-semibold"
            >
              <span>Call (860) 399-6601</span>
            </motion.a>
          </motion.div>

          {/* Special Offer Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="inline-block bg-gradient-to-r from-luxury-gold to-luxury-blue text-luxury-black px-6 py-3 rounded-full font-bold text-lg shadow-lg"
          >
            🎉 $20 OFF Your First Detail - Limited Time!
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-luxury-silver"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
