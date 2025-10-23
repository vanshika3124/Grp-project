// src/components/FAQs.js
import React from 'react';

const FaqItem = ({ question, answer }) => {
    return (
        <div className="faq-item">
            <h4>{question}</h4>
            <p>{answer}</p>
        </div>
    );
}

const FAQs = () => {
  return (
    <section className="faqs">
        <div className="container">
            <h2 className="section-title">FAQs</h2>
            <div className="faqs-container">
                <FaqItem 
                    question="What is SmartSync and how does it help in classrooms?"
                    answer="SmartSync is a digital learning platform that helps teachers create engaging quizzes, manage classrooms, and track student performance in real-time."
                />
                <FaqItem 
                    question="Is SmartSync free to use for teachers and students?"
                    answer="SmartSync offers a free basic plan with essential features. We also have premium plans with advanced tools for schools and institutions."
                />
                <FaqItem 
                    question="How can I create a classroom on SmartSync?"
                    answer="Once you sign in, just navigate to your Dashboard and click on 'Create Classroom'. It's a simple 2-step process!"
                />
            </div>
        </div>
    </section>
  )
}

export default FAQs;