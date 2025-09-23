'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import ServicesSection from '@/components/ServicesSection'
import GallerySection from '@/components/GallerySection'
import SpecialOffer from '@/components/SpecialOffer'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for smooth animations
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-luxury-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-luxury-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-luxury-silver text-lg">Loading Auto Dynamics...</p>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-luxury-black">
      <Navigation />
      <HeroSection />
      <WhyChooseUs />
      <ServicesSection />
      <GallerySection />
      <SpecialOffer />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
