'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Gift, Clock, Star, CheckCircle } from 'lucide-react'

const SpecialOffer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 bg-luxury-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/10 via-luxury-blue/10 to-luxury-gold/10 rounded-3xl" />
          
          {/* Main Offer Card */}
          <div className="relative bg-gradient-to-br from-luxury-gray to-luxury-black border border-luxury-gold/30 rounded-3xl p-8 lg:p-12 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-luxury-gold/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-luxury-blue/20 to-transparent rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-luxury-gold to-luxury-blue text-luxury-black px-6 py-3 rounded-full font-bold text-lg mb-6"
                >
                  <Gift className="w-6 h-6" />
                  <span>LIMITED TIME OFFER</span>
                </motion.div>
                
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-4xl lg:text-6xl font-bold text-white mb-4"
                >
                  $20 OFF
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-2xl text-luxury-silver mb-2"
                >
                  Your First Detail
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-luxury-gold font-semibold"
                >
                  Discount Already Applied - No Code Needed!
                </motion.p>
              </div>

              {/* Benefits List */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
              >
                {[
                  'Premium products included',
                  'Expert technicians',
                  '100% satisfaction guarantee',
                  'Showroom-ready results',
                  'Flexible scheduling',
                  'Free consultation'
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 1.2 + (index * 0.1) }}
                    className="flex items-center space-x-3 text-luxury-silver"
                  >
                    <CheckCircle className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="text-center"
              >
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.4)' }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-luxury text-xl px-12 py-4 font-bold"
                  >
                    Claim Your $20 Discount
                  </motion.button>
                  
                  <motion.a
                    href="tel:+18603996601"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-luxury-silver hover:text-luxury-gold transition-colors duration-300 text-lg font-semibold"
                  >
                    <span>Call (860) 399-6601</span>
                  </motion.a>
                </div>

                {/* Urgency Elements */}
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-luxury-silver">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-luxury-gold" />
                    <span>Limited time offer</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-luxury-gold" />
                    <span>New customers only</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Additional Offers */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {[
              {
                title: 'Refer a Friend',
                description: 'Get $25 off your next detail',
                icon: '👥',
              },
              {
                title: 'Monthly Service',
                description: 'Save 15% on recurring bookings',
                icon: '📅',
              },
              {
                title: 'Fleet Discount',
                description: 'Special rates for 3+ vehicles',
                icon: '🚗',
              },
            ].map((offer, index) => (
              <motion.div
                key={offer.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.8 + (index * 0.2) }}
                whileHover={{ y: -5 }}
                className="luxury-card text-center group"
              >
                <div className="text-4xl mb-4">{offer.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-luxury-gold transition-colors duration-300">
                  {offer.title}
                </h3>
                <p className="text-luxury-silver">{offer.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default SpecialOffer
