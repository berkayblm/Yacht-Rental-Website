import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      review: 'Amazing experience! The yacht was luxurious and the crew was very professional.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      review: 'Best vacation ever! Highly recommend this service.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      review: 'Best vacation ever! Highly recommend this service.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      review: 'Best vacation ever! Highly recommend this service.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      review: 'Best vacation ever! Highly recommend this service.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      review: 'Best vacation ever! Highly recommend this service.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      review: 'Best vacation ever! Highly recommend this service.',
    },
  ];

  return (
    <div className="container my-5">
      <h2>Testimonials</h2>
      <div className="row">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">{testimonial.review}</p>
                <p className="card-text"><strong>- {testimonial.name}</strong></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;