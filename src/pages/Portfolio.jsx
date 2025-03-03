import React from 'react';

const categories = [
  {
    name: "Weddings",
    images: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
      "https://images.unsplash.com/photo-1511895426328-dc8714191300",
      "https://images.unsplash.com/photo-1519741497674-611481863552"
    ]
  },
  {
    name: "Portraits",
    images: [
      "https://images.unsplash.com/photo-1504703395950-b89145a5425b",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    ]
  },
  {
    name: "Events",
    images: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
      "https://images.unsplash.com/photo-1464047736614-af63643285bf"
    ]
  }
];

export default function Portfolio() {
  return (
    <div className="pt-16">
      {categories.map((category, index) => (
        <section key={index} className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-serif text-center mb-12">{category.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.images.map((image, imageIndex) => (
                <div key={imageIndex} className="relative aspect-square overflow-hidden group">
                  <img
                    src={`${image}?auto=format&fit=crop&q=80`}
                    alt={`${category.name} ${imageIndex + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}