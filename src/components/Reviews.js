// src/components/Reviews.js
import React, { useState } from 'react';
import './Reviews.css'; // Iski CSS file next step mein banayenge

// Review data array (screenshot se extracted)
const reviewData = [
  {
    id: 1,
    name: 'Ms. A. Kumar',
    title: 'Mathematics Teacher',
    rating: 5,
    text: 'SmartSync has truly revolutionised the way I run my classroom. I can roll out a quiz in seconds, track student responses live, and instantly recognise who needs help. The analytics dashboard is a godsend — no more guessing which topic needs revisiting',
    time: '3 months ago',
    avatar: '/images/avatar-1.png', // Add actual avatar paths
  },
  {
    id: 2,
    name: 'Mr. Sunil Rao',
    title: 'Senior Secondary School',
    rating: 4,
    text: 'As a senior educator, I value tools that just work. SmartSync impressed me with how intuitive it was to set up, how quickly my students picked it up, and how it seamlessly fits in both online and in-class use. Highly recommended!',
    time: '2 weeks ago',
    avatar: '/images/avatar-3.png',
  },
  {
    id: 3,
    name: 'Ms. Priya Shah',
    title: 'English Department',
    rating: 5,
    text: 'My students actually look forward to using SmartSync now — the quizzes are engaging, the feedback is instantaneous, and I love how I can upload my own notes and course material in one place. It\'s made teaching more efficient and interactive.',
    time: '1 month ago',
    avatar: '/images/avatar-2.png',
  },
  {
    id: 4,
    name: 'Mr. Rohan Desai',
    title: 'Computer Science',
    rating: 4,
    text: 'SmartSync has helped me streamline my class management. The ability to create quick quizzes and instantly see results is a huge time-saver. Students find it easy to use, and I find the performance tracking incredibly useful.',
    time: '2 months ago',
    avatar: '/images/avatar-2.png',
  },
  // Add more reviews if needed to make it scrollable
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Current starting index for visible reviews
  const reviewsPerPage = 3; // Kitne reviews ek baar mein dikhenge

  const nextReviews = () => {
    setCurrentIndex((prevIndex) => {
      // Check if we are at the end of the reviews (considering the reviewsPerPage)
      if (prevIndex + reviewsPerPage < reviewData.length) {
        return prevIndex + 1; // Move to the next review
      }
      return 0; // Loop back to the start
    });
  };

  const prevReviews = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1; // Move to the previous review
      }
      // If at the beginning, loop to the end (or as close as reviewsPerPage allows)
      return reviewData.length - reviewsPerPage >= 0 ? reviewData.length - reviewsPerPage : 0;
    });
  };

  // Jo reviews current slide mein dikhane hain
  const visibleReviews = reviewData.slice(currentIndex, currentIndex + reviewsPerPage);

  return (
    <section className="reviews-section">
      <div className="container">
        <div className="girl-illustration">
          <img src="/images/teacher-illustration.png" alt="Girl holding book" />
        </div>

        <div className="reviews-content">
          <h2 className="section-title-reviews">Reviews from our members</h2>
          <div className="reviews-carousel-container">
            
            {/* Previous Button */}
            <button className="carousel-arrow prev" onClick={prevReviews}>
              <i className="fas fa-chevron-left"></i>
            </button>

            {/* Reviews Grid */}
            <div className="reviews-grid">
              {visibleReviews.map((review) => (
                <div className="review-card" key={review.id}>
                  <div className="review-header">
                    <img src={review.avatar} alt={review.name} className="review-avatar" />
                    <div className="reviewer-info">
                      <p className="reviewer-name">{review.name}</p>
                      <p className="reviewer-title">{review.title}</p>
                      <div className="stars">
                        {Array(review.rating).fill().map((_, i) => (
                          <i key={i} className="fas fa-star"></i>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="review-text">{review.text}</p>
                  <p className="review-time">{review.time}</p>
                </div>
              ))}
            </div>

            {/* Next Button */}
            <button className="carousel-arrow next" onClick={nextReviews}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;