'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Award, Clock, Users, Sparkles, Heart } from 'lucide-react'

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: Shield,
      title: 'Trusted by Locals',
      description: '500+ satisfied customers in Suffield and surrounding areas',
      color: 'text-blue-400',
    },
    {
      icon: Award,
      title: 'Premium Products',
      description: 'Only the finest detailing products and equipment',
      color: 'text-white',
    },
    {
      icon: Clock,
      title: 'Attention to Detail',
      description: 'Every inch meticulously cleaned and protected',
      color: 'text-green-400',
    },
    {
      icon: Users,
      title: 'Expert Technicians',
      description: '10+ years of professional detailing experience',
      color: 'text-purple-400',
    },
    {
      icon: Sparkles,
      title: 'Showroom Ready',
      description: 'Your car will look better than the day you bought it',
      color: 'text-pink-400',
    },
    {
      icon: Heart,
      title: '100% Satisfaction',
      description: 'We guarantee your complete satisfaction or we make it right',
      color: 'text-red-400',
    },
  ]

  return (
    <section id="about" className="py-20 bg-luxury-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-gradient-blue">Auto Dynamics</span>?
          </h2>
          <p className="text-xl text-luxury-silver max-w-3xl mx-auto">
            We don't just clean your car – we restore it to showroom condition with 
            premium products, expert techniques, and unmatched attention to detail.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="luxury-card text-center group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-white/20 to-luxury-blue/20 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-white/20 transition-all duration-300`}
              >
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </motion.div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-luxury-silver leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 bg-luxury-black rounded-2xl p-8 lg:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-luxury-silver">Cars Detailed</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">10+</div>
              <div className="text-luxury-silver">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">100%</div>
              <div className="text-luxury-silver">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-luxury-silver">Customer Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
