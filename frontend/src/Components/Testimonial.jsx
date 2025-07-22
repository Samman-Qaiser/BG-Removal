import React from 'react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Photographer',
    feedback:
      'Absolutely love this tool! Saved me hours of manual background removal. Super fast and accurate!',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'David Lee',
    role: 'eCommerce Store Owner',
    feedback:
      'The results are professional-grade. Perfect for product photos. Highly recommend it!',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
  {
    name: 'Ayesha Khan',
    role: 'Freelance Designer',
    feedback:
      'I use this for all my client work now. Clean cutouts in seconds with zero effort.',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
];

const Testimonials = () => {
  return (
    <section className="w-full py-20 bg-white px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          What People Are Saying
        </h2>
        <p className="text-gray-600 mb-12 text-lg">
          Hear from users who’ve transformed their workflow using our AI tool.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm italic">"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
