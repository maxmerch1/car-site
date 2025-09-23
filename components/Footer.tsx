'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Instagram, Facebook, Star } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      'Premium Inside & Out Detail',
      'Premium Interior Detail',
      'Premium Exterior Detail',
      'Paint Protection',
      'Ceramic Coating',
    ],
    company: [
      'About Us',
      'Why Choose Us',
      'Our Process',
      'Testimonials',
      'Contact',
    ],
    support: [
      'FAQ',
      'Booking Policy',
      'Service Areas',
      'Customer Support',
      'Satisfaction Guarantee',
    ],
  }

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
  ]

  return (
    <footer className="bg-luxury-black border-t border-luxury-silver/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-luxury-gold to-luxury-blue rounded-lg flex items-center justify-center">
                  <span className="text-luxury-black font-bold text-xl">AD</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Auto Dynamics</h3>
                  <p className="text-luxury-silver text-sm">Luxury Car Detailing</p>
                </div>
              </div>
              
              <p className="text-luxury-silver mb-6 leading-relaxed">
                Professional car detailing services in Suffield, CT. 
                We transform your vehicle into a pristine masterpiece with 
                premium products and expert techniques.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-luxury-silver">
                  <Phone className="w-4 h-4 text-luxury-gold" />
                  <span>(860) 399-6601</span>
                </div>
                <div className="flex items-center space-x-3 text-luxury-silver">
                  <Mail className="w-4 h-4 text-luxury-gold" />
                  <span>autodynamicsworld@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-luxury-silver">
                  <MapPin className="w-4 h-4 text-luxury-gold" />
                  <span>Suffield, CT</span>
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h4 className="text-lg font-bold text-white mb-6">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  >
                    <a
                      href="#"
                      className="text-luxury-silver hover:text-luxury-gold transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="text-lg font-bold text-white mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  >
                    <a
                      href="#"
                      className="text-luxury-silver hover:text-luxury-gold transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Support & Social */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h4 className="text-lg font-bold text-white mb-6">Support</h4>
              <ul className="space-y-3 mb-8">
                {footerLinks.support.map((link, index) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                  >
                    <a
                      href="#"
                      className="text-luxury-silver hover:text-luxury-gold transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Social Links */}
              <div>
                <h5 className="text-white font-semibold mb-4">Follow Us</h5>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-10 h-10 bg-luxury-gray hover:bg-luxury-gold rounded-lg flex items-center justify-center transition-colors duration-300"
                    >
                      <social.icon className="w-5 h-5 text-luxury-silver hover:text-luxury-black transition-colors duration-300" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-luxury-silver/20 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center space-x-2 text-luxury-silver"
            >
              <span>© {currentYear} Auto Dynamics. All rights reserved.</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center space-x-6 text-sm text-luxury-silver"
            >
              <a href="#" className="hover:text-luxury-gold transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-luxury-gold transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-luxury-gold transition-colors duration-300">
                Cookie Policy
              </a>
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 pt-8 border-t border-luxury-silver/20 text-center"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-luxury-silver">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-luxury-gold fill-current" />
                <span className="font-semibold">5.0 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold">500+ Happy Customers</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold">10+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold">100% Satisfaction Guarantee</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
