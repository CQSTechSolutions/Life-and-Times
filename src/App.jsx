import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Camera, Heart, Menu, X, Award, Clock, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed z-50 w-full bg-white/90 backdrop-blur-sm">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Camera className="w-8 h-8 text-rose-500" />
            <span className="ml-2 text-2xl font-semibold">Eternal Moments</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-rose-500">Home</a>
              <a href="#experience" className="text-gray-700 hover:text-rose-500">Experience</a>
              <a href="#portfolio" className="text-gray-700 hover:text-rose-500">Portfolio</a>
              <a href="#services" className="text-gray-700 hover:text-rose-500">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-rose-500">Contact</a>
              <button className="px-6 py-2 text-white transition rounded-full bg-rose-500 hover:bg-rose-600">
                Book Now
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg sm:px-3">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-rose-500">Home</a>
              <a href="#experience" className="block px-3 py-2 text-gray-700 hover:text-rose-500">Experience</a>
              <a href="#portfolio" className="block px-3 py-2 text-gray-700 hover:text-rose-500">Portfolio</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-rose-500">Services</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-rose-500">Contact</a>
              <button className="w-full px-6 py-2 text-white transition rounded-full bg-rose-500 hover:bg-rose-600">
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative flex items-center justify-center h-full text-center">
        <div className="max-w-4xl px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-5xl font-bold text-white md:text-6xl"
          >
            Capturing Your Perfect Moments
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 text-xl text-white/90"
          >
            Professional wedding photography that tells your unique love story
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="px-8 py-3 text-lg text-white transition rounded-full bg-rose-500 hover:bg-rose-600"
          >
            View Portfolio
          </motion.button>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const stats = [
    { icon: Award, value: "500+", label: "Weddings Captured" },
    { icon: Clock, value: "10+", label: "Years Experience" },
    { icon: Users, value: "1000+", label: "Happy Couples" }
  ];

  const testimonials = [
    {
      quote: "They captured our special day perfectly. Every emotion, every moment was beautifully preserved.",
      couple: "Sarah & James",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      quote: "Professional, creative, and incredibly talented. Our wedding album is absolutely stunning!",
      couple: "Emily & Michael",
      image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      quote: "They have an amazing eye for detail. Every shot tells a story. We couldn't be happier!",
      couple: "Jessica & David",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">Our Experience</h2>
          <p className="text-lg text-gray-600">A decade of capturing love stories</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-8 mb-20 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 text-center rounded-lg shadow-sm bg-gray-50"
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-rose-500" />
              <h3 className="mb-2 text-4xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Featured Weddings */}
        <div className="mb-20">
          <h3 className="mb-12 text-3xl font-bold text-center">Featured Weddings</h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="overflow-hidden bg-white rounded-lg shadow-lg"
              >
                <div className="relative h-64">
                  <img
                    src={testimonial.image}
                    alt={testimonial.couple}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <p className="mb-4 italic text-gray-600">"{testimonial.quote}"</p>
                  <p className="font-semibold text-rose-500">{testimonial.couple}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievement Timeline */}
        <div className="relative">
          <h3 className="mb-12 text-3xl font-bold text-center">Our Journey</h3>
          <div className="ml-4 border-l-4 border-rose-500 md:ml-1/2">
            {[
              { year: "2015", title: "Started Our Journey", description: "Founded with a passion for capturing love stories" },
              { year: "2018", title: "100th Wedding", description: "Milestone achievement in wedding photography" },
              { year: "2020", title: "Best Wedding Photographer Award", description: "Recognized for excellence in wedding photography" },
              { year: "2023", title: "International Recognition", description: "Featured in top wedding magazines" }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pb-8 pl-8"
              >
                <div className="absolute w-6 h-6 mt-2 rounded-full -left-3 bg-rose-500" />
                <div className="p-6 rounded-lg shadow-sm bg-gray-50">
                  <h4 className="mb-2 text-xl font-bold text-rose-500">{milestone.year}</h4>
                  <h5 className="mb-2 text-lg font-semibold">{milestone.title}</h5>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const images = [
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">Our Portfolio</h2>
          <p className="text-lg text-gray-600">A glimpse into the beautiful moments we've captured</p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <img 
                src={image} 
                alt={`Wedding photo ${index + 1}`}
                className="object-cover w-full h-64 transition duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-black/50 group-hover:opacity-100">
                <button className="px-6 py-2 text-gray-900 transition bg-white rounded-full hover:bg-rose-500 hover:text-white">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      title: "Wedding Day Coverage",
      description: "Full-day photography coverage of your special day, from preparation to reception",
      icon: Heart
    },
    {
      title: "Engagement Sessions",
      description: "Pre-wedding photo sessions to capture your love story",
      icon: Camera
    },
    {
      title: "Digital Gallery",
      description: "Online gallery with high-resolution images for easy sharing and downloading",
      icon: Heart
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">Our Services</h2>
          <p className="text-lg text-gray-600">Comprehensive photography packages for your special day</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 text-center bg-white rounded-lg shadow-lg"
            >
              <service.icon className="w-12 h-12 mx-auto mb-6 text-rose-500" />
              <h3 className="mb-4 text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">Contact Us</h2>
          <p className="text-lg text-gray-600">Let's discuss your special day</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Wedding Date</label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 text-lg text-white transition rounded-full bg-rose-500 hover:bg-rose-600"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Experience />
        <Portfolio />
        <Services />
        <Contact />
      </div>
    </Router>
  );
}

export default App;