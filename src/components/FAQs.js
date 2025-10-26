// src/components/FAQs.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// 👇 YEH ARRAY AAPKE CODE MEIN MISSING HAI 👇
const faqData = [
  { 
    q: "What is SmartSync and how does it help in classrooms?", 
    a: "SmartSync is a smart classroom platform that connects teachers and students in real time. It helps teachers create quizzes, share notes, and analyze student performance — all in one place." 
  },
  { 
    q: "Is SmartSync free to use for teachers and students?", 
    a: "Yes, SmartSync offers a robust free plan for individual teachers and students. We also have premium plans for schools and institutions with advanced features." 
  },
  { 
    q: "How can I create a classroom on SmartSync?", 
    a: "After signing up, just go to your Dashboard and click the 'Create Classroom' button. It's a simple 2-step process!" 
  }
];
// ----------------------------------------

// Main FAQs component (for the homepage section)
const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0); 

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faqs"> {/* Use the styles from App.css */}
      <div className="container">
        <h2 className="section-title">FAQs</h2>
        
        <div className="faqs-container"> {/* Use the styles from App.css */}
          
          {faqData.map((faq, index) => { // Ab yeh 'faqData' ko dhoondh payega
            const isOpen = index === openIndex; 
            
            return (
              <div 
                className={`faq-item ${isOpen ? 'open' : ''}`} 
                key={index} 
                onClick={() => handleToggle(index)}
              >
                <div className="faq-question">
                  <h4>{faq.q}</h4>
                  <i className={`fas ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                </div>
                
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        <Link to="/faqs" className="btn btn-green faq-button">
          See all FAQs
          <i className="fas fa-arrow-up-right-from-square"></i>
        </Link>
      </div>
    </section>
  );
}

export default FAQs;