// src/components/Reviews.js
import React from 'react';

const ReviewCard = ({ text, name, stars }) => {
    return (
        <div className="review-card">
            <p>"{text}"</p>
            <h4>{name}</h4>
            <span>{stars}</span>
        </div>
    );
}

const Reviews = () => {
  return (
    <section className="reviews">
        <div className="container">
            <h2 className="section-title">Reviews from our members</h2>
            <div className="reviews-container">
                <ReviewCard 
                    text="This is a great platform for learning and teaching. My students love the quiz feature!"
                    name="R. K. Sharma"
                    stars="⭐⭐⭐⭐⭐"
                />
                <ReviewCard 
                    text="SmartSync has made managing my classroom so much easier. Highly recommended for all educators."
                    name="Megha Jain"
                    stars="⭐⭐⭐⭐⭐"
                />
                <ReviewCard 
                    text="The live sessions are seamless and the analysis is very helpful. A fantastic tool."
                    name="Priya Singh"
                    stars="⭐⭐⭐⭐⭐"
                />
            </div>
            {/* You can add slider controls here later */}
        </div>
    </section>
  )
}

export default Reviews;