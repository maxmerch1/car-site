'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '(860) 399-6601',
      description: 'Speak directly with our team',
      action: 'tel:+18603996601',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'autodynamicsworld@gmail.com',
      description: 'Get a detailed quote',
      action: 'mailto:autodynamicsworld@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Suffield, CT',
      description: 'Serving the local area',
      action: '#',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Sat: 8AM-6PM',
      description: 'Flexible scheduling available',
      action: '#',
    },
  ]

  return (
    <section id="contact" className="py-20 bg-luxury-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-luxury-silver max-w-3xl mx-auto">
            Ready to transform your car? Contact us today for a free consultation 
            and let us show you what professional detailing can do.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Contact Information
            </h3>
            
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.action}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + (index * 0.1) }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-start space-x-4 p-6 luxury-card group cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-luxury-gold to-luxury-blue rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-luxury-black" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-luxury-gold transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-luxury-gold font-semibold text-lg mb-1">
                    {item.details}
                  </p>
                  <p className="text-luxury-silver">
                    {item.description}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Quick Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-r from-luxury-gold/20 to-luxury-blue/20 rounded-2xl p-8 text-center"
            >
              <MessageCircle className="w-12 h-12 text-luxury-gold mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">
                Need Immediate Assistance?
              </h4>
              <p className="text-luxury-silver mb-6">
                Our team is standing by to answer your questions and help you book your service.
              </p>
              <motion.a
                href="tel:+18603996601"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-luxury inline-block"
              >
                Call Now: (860) 399-6601
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Map and Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Map Placeholder */}
            <div className="bg-luxury-gray rounded-2xl p-8 text-center">
              <MapPin className="w-12 h-12 text-luxury-gold mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">
                Serving Suffield & Surrounding Areas
              </h4>
              <p className="text-luxury-silver mb-6">
                We come to you! Our mobile detailing service brings professional 
                car care right to your doorstep.
              </p>
              <div className="bg-luxury-black rounded-lg p-4">
                <p className="text-luxury-silver text-sm">
                  📍 Service Area: Suffield, Windsor, Enfield, Windsor Locks, and surrounding areas
                </p>
              </div>
            </div>

            {/* Service Areas */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="luxury-card"
            >
              <h4 className="text-xl font-bold text-white mb-6">
                Areas We Serve
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Suffield, CT',
                  'Windsor, CT',
                  'Enfield, CT',
                  'Windsor Locks, CT',
                  'East Windsor, CT',
                  'South Windsor, CT',
                  'Simsbury, CT',
                  'Granby, CT',
                ].map((area, index) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                    className="flex items-center space-x-2 text-luxury-silver"
                  >
                    <div className="w-2 h-2 bg-luxury-gold rounded-full" />
                    <span>{area}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Booking Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-r from-luxury-gold/10 to-luxury-blue/10 rounded-2xl p-6"
            >
              <h4 className="text-lg font-bold text-white mb-4">
                Ready to Book?
              </h4>
              <div className="space-y-3 text-luxury-silver">
                <p>• Free consultation and quote</p>
                <p>• Flexible scheduling</p>
                <p>• Premium products included</p>
                <p>• 100% satisfaction guarantee</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-luxury w-full mt-6"
              >
                Book Your Detail Today
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
