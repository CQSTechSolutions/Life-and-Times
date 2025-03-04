import React from 'react';

export default function About() {
  return (
    <div className="pt-16">
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&q=80"
            alt="Studio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <h1 className="text-5xl md:text-6xl font-serif">About Us</h1>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif mb-8 text-center">Our Story</h2>
          <p className="text-gray-600 mb-6">
            With over a decade of experience in professional photography, we've had the privilege of 
            capturing countless precious moments for our clients. Our passion for photography goes 
            beyond just taking pictures – we strive to tell stories through our lens.
          </p>
          <p className="text-gray-600 mb-6">
            Every shoot is an opportunity to create something unique and meaningful. We believe in 
            building relationships with our clients to understand their vision and deliver results 
            that exceed expectations.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "John Doe",
                role: "Lead Photographer",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
              },
              {
                name: "Jane Smith",
                role: "Portrait Specialist",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
              },
              {
                name: "Mike Johnson",
                role: "Event Photographer",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-serif mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}