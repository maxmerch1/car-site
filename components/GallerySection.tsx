'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const GallerySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      id: 1,
      src: '/carpics/hero-bg.png',
      alt: 'Professional car detailing work',
      category: 'Complete Detail',
    },
    {
      id: 2,
      src: '/carpics/service-1.png',
      alt: 'Interior car detailing process',
      category: 'Interior',
    },
    {
      id: 3,
      src: '/carpics/Screenshot 2025-09-23 175819.png',
      alt: 'Premium leather conditioning',
      category: 'Interior',
    },
    {
      id: 4,
      src: '/carpics/Screenshot 2025-09-23 175831.png',
      alt: 'Exterior car wash and wax',
      category: 'Exterior',
    },
    {
      id: 5,
      src: '/carpics/Screenshot 2025-09-23 175842.png',
      alt: 'Dashboard cleaning and protection',
      category: 'Interior',
    },
    {
      id: 6,
      src: '/carpics/Screenshot 2025-09-23 175852.png',
      alt: 'Paint correction and protection',
      category: 'Exterior',
    },
    {
      id: 7,
      src: '/carpics/Screenshot 2025-09-23 175901.png',
      alt: 'Carpet and upholstery cleaning',
      category: 'Interior',
    },
    {
      id: 8,
      src: '/carpics/Screenshot 2025-09-23 175911.png',
      alt: 'Wheel and tire detailing',
      category: 'Exterior',
    },
    {
      id: 9,
      src: '/carpics/Screenshot 2025-09-23 175925.png',
      alt: 'Engine bay cleaning',
      category: 'Exterior',
    },
  ]

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }

  return (
    <section id="gallery" className="py-20 bg-luxury-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our <span className="text-gradient">Work Speaks</span> for Itself
          </h2>
          <p className="text-xl text-luxury-silver max-w-3xl mx-auto">
            See the stunning transformations we've achieved for our clients. 
            Every detail matters, and it shows in our results.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group cursor-pointer overflow-hidden rounded-xl"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-luxury-gold text-luxury-black px-3 py-1 rounded-full text-sm font-bold inline-block mb-2">
                  {image.category}
                </div>
                <p className="text-sm font-medium">Click to view full size</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-luxury-black/95 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  className="w-full h-full object-contain rounded-lg"
                />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-luxury-black/50 hover:bg-luxury-black/70 text-white p-2 rounded-full transition-colors duration-300"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-luxury-black/50 hover:bg-luxury-black/70 text-white p-2 rounded-full transition-colors duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-luxury-black/50 hover:bg-luxury-black/70 text-white p-2 rounded-full transition-colors duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Image Info */}
                <div className="absolute bottom-4 left-4 right-4 bg-luxury-black/50 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-semibold">{galleryImages[selectedImage].alt}</p>
                      <p className="text-luxury-silver text-sm">{galleryImages[selectedImage].category} Detail</p>
                    </div>
                    <div className="text-luxury-silver text-sm">
                      {selectedImage + 1} of {galleryImages.length}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Car?
          </h3>
          <p className="text-luxury-silver mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust Auto Dynamics 
            for their luxury car detailing needs.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-luxury text-lg px-8 py-4"
          >
            Book Your Detail Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default GallerySection
