import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const backgroundImages = [
  "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80"
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section with Scrolling Background */}
      <section className="relative h-screen">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <div className="max-w-3xl px-4">
            <h1 className="text-5xl md:text-6xl font-serif mb-6">Capturing Life's Beautiful Moments</h1>
            <p className="text-xl mb-8">Professional photography services for all your special occasions</p>
            <Link
              to="/contact"
              className="inline-block bg-white text-gray-900 px-8 py-3 uppercase tracking-widest text-sm hover:bg-gray-100 transition-colors"
            >
              Book a Session
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-12">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "https://images.unsplash.com/photo-1511895426328-dc8714191300",
              "https://images.unsplash.com/photo-1519741497674-611481863552",
              "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
              "https://images.unsplash.com/photo-1518895949257-7621c3c786d7",
              "https://images.unsplash.com/photo-1509610973147-232dfea52a97",
              "https://images.unsplash.com/photo-1516483638261-f4dbaf036963"
            ].map((image, index) => (
              <div key={index} className="relative aspect-square overflow-hidden group">
                <img
                  src={`${image}?auto=format&fit=crop&q=80`}
                  alt={`Featured ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Weddings",
                image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80",
                description: "Capturing your special day with elegance and style"
              },
              {
                title: "Portraits",
                image: "https://images.unsplash.com/photo-1504703395950-b89145a5425b?auto=format&fit=crop&q=80",
                description: "Professional portraits that tell your story"
              },
              {
                title: "Events",
                image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80",
                description: "Documenting your memorable moments"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}