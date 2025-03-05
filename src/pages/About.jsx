import React, { useState, useEffect } from 'react';

const backgroundImages = [
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80", // Wedding couple
  "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80", // Wedding ceremony
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80", // Wedding details
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80"  // Wedding celebration
];

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="fixed inset-0 z-0">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentImageIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Studio ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          ))}
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-white z-10">
          <div className="max-w-4xl px-4">
            <h1 className="text-6xl md:text-7xl font-serif mb-6">About Us</h1>
            <p className="text-xl md:text-2xl opacity-90">Capturing moments that last forever.<br/>At Life & Times Wedding Photography, we believe that every love story deserves to be captured in its purest and most beautiful form. With a passion for storytelling and an eye for detail, we specialize in preserving the emotions, laughter, and cherished moments of your big day.</p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative min-h-screen z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551516594-56cb78394645?auto=format&fit=crop&q=80"
              alt="Philosophy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center bg-gray-50">
            <div className="px-8 py-24 md:px-16 lg:px-24">
              <h2 className="text-4xl font-serif mb-8">Our Philosophy</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We believe that great photography is about more than just technical 
                skill – it's about connection, trust, and understanding. Every client 
                brings their unique story, and we're here to capture it authentically.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our commitment to excellence drives us to continuously evolve and 
                innovate, ensuring that we deliver photographs that exceed expectations 
                while preserving the genuine emotions of each moment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative min-h-screen text-white bg-transparent z-10">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1494192785370-066bc4cd1796?auto=format&fit=crop&q=80"
            alt="Camera"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif mb-12 text-center">Our Story</h2>
            <div className="prose prose-lg mx-auto text-white">
              <p className="text-lg md:text-xl mb-8 leading-relaxed">
                For over a decade, we've been dedicated to the art of photography, 
                transforming fleeting moments into timeless memories. Our journey 
                began with a simple belief: every moment deserves to be captured 
                with authenticity and artistry.
              </p>
              <p className="text-lg md:text-xl mb-8 leading-relaxed">
                We understand that each click of the shutter captures more than just 
                an image – it captures emotions, relationships, and stories that deserve 
                to be told. Our approach combines technical excellence with artistic 
                vision, ensuring that every photograph we create is both beautiful 
                and meaningful.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Values Section */}
      <section className="relative min-h-screen z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
          <div className="flex items-center bg-gray-900 text-white order-2 md:order-1">
            <div className="px-8 py-24 md:px-16 lg:px-24">
              <h2 className="text-4xl font-serif mb-8">Our Values</h2>
              <div className="space-y-8">
                {[
                  {
                    title: "Authenticity",
                    description: "We believe in capturing genuine moments and real emotions."
                  },
                  {
                    title: "Excellence",
                    description: "Every image we create meets our highest standards of quality."
                  },
                  {
                    title: "Connection",
                    description: "Building meaningful relationships with our clients is at our core."
                  }
                ].map((value, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-serif mb-2">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&q=80"
              alt="Values"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative min-h-screen bg-transparent z-10 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-white font-serif mb-16 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: "Sarah Anderson",
                role: "Lead Photographer",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
                bio: "With over 15 years of experience, Sarah specializes in wedding and portrait photography."
              },
              {
                name: "Michael Chen",
                role: "Creative Director",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
                bio: "Michael brings his fine art background and creative vision to every shoot."
              },
              {
                name: "Emma Thompson",
                role: "Event Specialist",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
                bio: "Emma excels at capturing the spontaneous moments that make events special."
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl text-white font-serif mb-2">{member.name}</h3>
                <p className="text-white mb-4">{member.role}</p>
                <p className="text-white">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}