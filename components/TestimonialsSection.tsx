'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote, User } from 'lucide-react'

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Suffield, CT',
      rating: 5,
      text: 'Auto Dynamics transformed my 2019 BMW into a showroom masterpiece. The attention to detail is incredible - they even cleaned the engine bay! My car looks better than the day I bought it.',
      service: 'Premium Inside & Out Detail',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'Michael Chen',
      location: 'Windsor, CT',
      rating: 5,
      text: 'I\'ve tried other detailing services, but none compare to Auto Dynamics. Their premium products and expert techniques made my Tesla look absolutely stunning. Worth every penny!',
      service: 'Premium Exterior Detail',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'Emily Rodriguez',
      location: 'Enfield, CT',
      rating: 5,
      text: 'The interior detail was amazing! They removed stains I thought were permanent and the leather conditioning made my seats feel brand new. I\'m definitely coming back.',
      service: 'Premium Interior Detail',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'David Thompson',
      location: 'Suffield, CT',
      rating: 5,
      text: 'Professional, reliable, and the results speak for themselves. My truck has never looked this good. The team is friendly and they really care about their work.',
      service: 'Premium Inside & Out Detail',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'Lisa Anderson',
      location: 'Windsor Locks, CT',
      rating: 5,
      text: 'I was skeptical about the price, but the quality is unmatched. My car looks like it just came off the showroom floor. Auto Dynamics exceeded all my expectations.',
      service: 'Premium Exterior Detail',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'Robert Wilson',
      location: 'Suffield, CT',
      rating: 5,
      text: 'Outstanding service! They were on time, professional, and the results were incredible. My car has never been this clean. I highly recommend Auto Dynamics to anyone.',
      service: 'Premium Interior Detail',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    },
  ]

  return (
    <section className="py-20 bg-luxury-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            What Our <span className="text-gradient-blue">Customers Say</span>
          </h2>
          <p className="text-xl text-luxury-silver max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about their Auto Dynamics experience.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="luxury-card group"
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="w-8 h-8 text-luxury-gold opacity-50" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-luxury-gold fill-current" />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-luxury-silver leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Service Badge */}
              <div className="inline-block bg-luxury-gold/20 text-luxury-gold px-3 py-1 rounded-full text-sm font-semibold mb-4">
                {testimonial.service}
              </div>

              {/* Customer Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-luxury-silver/20">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white group-hover:text-luxury-gold transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-luxury-silver text-sm">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-luxury-black rounded-2xl p-8 text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-luxury-gold mb-2">5.0</div>
              <div className="flex justify-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-luxury-gold fill-current" />
                ))}
              </div>
              <p className="text-luxury-silver">Average Rating</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-luxury-gold mb-2">500+</div>
              <p className="text-luxury-silver">Happy Customers</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-luxury-gold mb-2">100%</div>
              <p className="text-luxury-silver">Satisfaction Rate</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Join Our Satisfied Customers?
          </h3>
          <p className="text-luxury-silver mb-8 max-w-2xl mx-auto">
            Experience the Auto Dynamics difference for yourself. 
            Book your detail today and see why our customers love us.
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

export default TestimonialsSection
