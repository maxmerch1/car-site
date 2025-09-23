'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Clock, Star, Shield, Sparkles } from 'lucide-react'

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      title: 'Premium Inside & Out Detail',
      duration: '5 hours',
      price: 'From $300',
      image: '/carpics/service-1.png',
      benefits: [
        'Complete interior & exterior transformation',
        'Paint correction & protection',
        'Leather conditioning & protection',
        'Engine bay cleaning',
        'Showroom-ready finish'
      ],
      popular: true,
    },
    {
      title: 'Premium Interior Detail',
      duration: '4.5 hours',
      price: 'From $180',
      image: '/carpics/Screenshot 2025-09-23 175819.png',
      benefits: [
        'Deep carpet & upholstery cleaning',
        'Leather conditioning & protection',
        'Dashboard & console detailing',
        '99% stain removal guarantee',
        'Fresh, clean interior'
      ],
    },
    {
      title: 'Premium Exterior Detail',
      duration: '3 hours',
      price: 'From $200',
      image: '/carpics/Screenshot 2025-09-23 175831.png',
      benefits: [
        'Paint decontamination & correction',
        'Premium wax protection',
        'Wheel & tire detailing',
        'Shine that lasts 6+ months',
        'Headlight restoration'
      ],
    },
  ]

  return (
    <section id="services" className="py-20 bg-luxury-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our <span className="text-gradient">Premium Services</span>
          </h2>
          <p className="text-xl text-luxury-silver max-w-3xl mx-auto">
            Professional detailing services designed to protect your investment 
            and make your car look absolutely stunning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative luxury-card group overflow-hidden"
            >
              {service.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-gradient-to-r from-luxury-gold to-luxury-blue text-luxury-black px-3 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Service Image */}
              <div className="relative h-64 overflow-hidden rounded-t-xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 to-transparent" />
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-luxury-gold transition-colors duration-300">
                  {service.title}
                </h3>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2 text-luxury-silver">
                    <Clock className="w-4 h-4" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="text-2xl font-bold text-luxury-gold">
                    {service.price}
                  </div>
                </div>

                {/* Benefits List */}
                <ul className="space-y-3 mb-8">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <motion.li
                      key={benefitIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: (index * 0.2) + (benefitIndex * 0.1) }}
                      className="flex items-start space-x-3 text-luxury-silver"
                    >
                      <Star className="w-5 h-5 text-luxury-gold flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn-luxury text-center"
                >
                  Request to Book
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-luxury-gray rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Additional Services Available
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Paint Protection Film',
              'Ceramic Coating',
              'Headlight Restoration',
              'Engine Bay Cleaning',
              'Leather Conditioning',
              'Fabric Protection',
              'Wheel Restoration',
              'Paint Correction'
            ].map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1 + (index * 0.1) }}
                className="flex items-center space-x-3 text-luxury-silver hover:text-luxury-gold transition-colors duration-300"
              >
                <Sparkles className="w-5 h-5 text-luxury-gold" />
                <span>{service}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
