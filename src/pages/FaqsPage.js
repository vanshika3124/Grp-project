// src/pages/FaqsPage.js
import React, { useState } from 'react';
import './FaqsPage.css'; // Apni CSS file import karo

// 👇 YEH HAI POORA DATA (17 QUESTIONS) 👇
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
    q: "How do students join my classroom or quiz session?", 
    a: "Students can join using a unique classroom code or a direct link shared by the teacher. No complex setup needed!" 
  },
  { 
    q: "What kind of analytics does SmartSync provide to teachers?", 
    a: "SmartSync offers detailed analytics on quiz performance, student participation, topic understanding, and overall class progress." 
  },
  { 
    q: "Can I conduct live quizzes and track results in real time?", 
    a: "Absolutely! Our live quiz feature allows you to see student responses and results instantly as they participate." 
  },
  { 
    q: "How can I create a classroom on SmartSync?", 
    a: "After signing up, just go to your Dashboard and click the 'Create Classroom' button. It's a simple 2-step process!" 
  },
  { 
    q: "Can I upload and share notes or study materials with my students?", 
    a: "Yes, you can easily upload PDFs, documents, presentations, and links directly to your classroom for students to access." 
  },
  // Yeh question screenshot mein repeat tha, maine variation add kiya
  { 
    q: "What are the core features of the free plan?", 
    a: "The free plan includes classroom creation, basic quiz features, note sharing, and standard analytics." 
  }, 
  { 
    q: "Is SmartSync compatible with mobile devices and tablets?", 
    a: "Yes, SmartSync is fully responsive and works seamlessly on desktops, laptops, tablets, and smartphones." 
  },
  { 
    q: "How do I create or customize a quiz?", 
    a: "Our quiz builder allows you to create various question types (MCQs, True/False, Short Answer), set timers, add images, and customize scoring." 
  },
  { 
    q: "Can multiple teachers collaborate in the same classroom?", 
    a: "Yes, our premium plans offer co-teaching features allowing multiple teachers to manage and contribute to a single classroom." 
  },
  { 
    q: "How secure is my data and student information on SmartSync?", 
    a: "We prioritize data security and privacy. All data is encrypted, and we comply with standard educational privacy regulations." 
  },
  { 
    q: "Do I need an internet connection to use SmartSync features?", 
    a: "Yes, SmartSync is a web-based platform and requires an active internet connection for both teachers and students." 
  },
  { 
    q: "How can I reset my password or recover my account?", 
    a: "You can use the 'Forgot Password?' link on the login page to reset your password via email." 
  },
  { 
    q: "Who can I contact for technical support or feedback?", 
    a: "You can reach our support team via email at support@smartsync.help or through the contact form on our website." 
  },
  { 
    q: "What makes SmartSync different from other classroom management apps?", 
    a: "SmartSync focuses on seamless real-time interaction, intuitive design, and powerful analytics specifically tailored for engaging quizzes and performance tracking." 
  },
    // Yeh question bhi repeat tha, maine variation add kiya
  { 
    q: "How can students access shared notes or quiz results?", 
    a: "Students can log in to their SmartSync account to view all materials shared by their teacher and see their performance on past quizzes." 
  },
];
// ----------------------------------------

// Main FAQs Page Component
const FaqsPage = () => {
  const [openIndex, setOpenIndex] = useState(-1); // Initially koi bhi open nahi hai

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faqs-page-wrapper"> 
      <div className="container">
        <h2 className="section-title">FAQs</h2>
        
        <div className="faqs-container">
          
          {faqData.map((faq, index) => { // Ab yahaan 17 items hain
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
      </div>
    </section>
  );
}

export default FaqsPage;