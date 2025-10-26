// src/pages/CreateQuizPage.js
import React, { useState } from 'react';
import './CreateQuizPage.css'; // We'll create this CSS file next

// Initial structure for a single question
const initialQuestionState = {
  questionText: '',
  options: [{ text: '' }, { text: '' }, { text: '' }, { text: '' }],
  correctAnswerIndex: 0, // Index of the correct option (0-3)
  points: 10,
};

const CreateQuizPage = () => {
  const [quizTitle, setQuizTitle] = useState('');
  const [timeLimit, setTimeLimit] = useState(15); // Default time limit
  const [description, setDescription] = useState('');
  const [questions, setQuestions] = useState([initialQuestionState]); // Array of questions

  // Function to add a new question
  const addQuestion = () => {
    setQuestions([...questions, initialQuestionState]);
  };

  // Function to handle changes in a specific question's data
  const handleQuestionChange = (index, field, value) => {
    const newQuestions = [...questions];
    if (field === 'option') {
      // For options, value will be {optionIndex: value}
      const optionIndex = value.optionIndex;
      newQuestions[index].options[optionIndex].text = value.text;
    } else {
      newQuestions[index][field] = value;
    }
    setQuestions(newQuestions);
  };

  // Function to handle quiz submission
  const handleSubmitQuiz = (e) => {
    e.preventDefault();
    // Here you would typically send quizTitle, timeLimit, description, and questions
    // to your backend API.
    console.log('Quiz Submitted:', {
      quizTitle,
      timeLimit,
      description,
      questions,
    });
    alert('Quiz created successfully (check console for data)!');
    // You might want to clear the form or redirect after submission
    setQuizTitle('');
    setTimeLimit(15);
    setDescription('');
    setQuestions([initialQuestionState]);
  };

  return (
    <section className="create-quiz-page-wrapper">
      <div className="container">
        {/* Teachers Dashboard Header */}
        <div className="teachers-dashboard-header">
          <p className="welcome-message">Welcome back, Mrs. Anjali Singh</p>
        </div>

        {/* Create Quiz Section */}
        <div className="create-quiz-section">
          <h3>Create a Quiz</h3>
          <p>Build your quiz with custom questions and settings</p>

          <form onSubmit={handleSubmitQuiz}>
            <div className="quiz-details-grid">
              {/* Quiz Title */}
              <div className="form-group-quiz">
                <label htmlFor="quizTitle">Quiz Title</label>
                <input
                  type="text"
                  id="quizTitle"
                  placeholder="Enter quiz title...."
                  value={quizTitle}
                  onChange={(e) => setQuizTitle(e.target.value)}
                  required
                />
              </div>

              {/* Time Limit */}
              <div className="form-group-quiz">
                <label htmlFor="timeLimit">Time limit(in minutes)</label>
                <input
                  type="number"
                  id="timeLimit"
                  placeholder="15"
                  value={timeLimit}
                  onChange={(e) => setTimeLimit(e.target.value)}
                  min="1"
                  required
                />
              </div>
            </div>

            {/* Description */}
            <div className="form-group-quiz">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                placeholder="Describe what the quiz covers"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="3"
                required
              ></textarea>
            </div>

            {/* Questions Section */}
            <div className="questions-section">
              <div className="questions-header">
                <h3>Questions</h3>
                <button type="button" className="add-question-btn" onClick={addQuestion}>
                  + Add Questions
                </button>
              </div>

              {questions.map((question, qIndex) => (
                <div className="question-item" key={qIndex}>
                  <h4>Question {qIndex + 1}</h4>
                  
                  {/* Question Text */}
                  <div className="form-group-quiz">
                    <label htmlFor={`questionText${qIndex}`}>Question Text</label>
                    <input
                      type="text"
                      id={`questionText${qIndex}`}
                      placeholder="Enter your question"
                      value={question.questionText}
                      onChange={(e) =>
                        handleQuestionChange(qIndex, 'questionText', e.target.value)
                      }
                      required
                    />
                  </div>

                  {/* Options Grid */}
                  <div className="options-grid">
                    {question.options.map((option, optIndex) => (
                      <div className="form-group-quiz" key={optIndex}>
                        <label htmlFor={`option${qIndex}-${optIndex}`}>Option {optIndex + 1}</label>
                        <input
                          type="text"
                          id={`option${qIndex}-${optIndex}`}
                          placeholder={`Option ${optIndex + 1}...`}
                          value={option.text}
                          onChange={(e) =>
                            handleQuestionChange(qIndex, 'option', {
                              optionIndex: optIndex,
                              text: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                    ))}
                  </div>

                  {/* Correct Answer & Points */}
                  <div className="correct-answer-points-grid">
                    <div className="form-group-quiz">
                      <label htmlFor={`correctAnswer${qIndex}`}>Correct Answer</label>
                      <select
                        id={`correctAnswer${qIndex}`}
                        value={question.correctAnswerIndex}
                        onChange={(e) =>
                          handleQuestionChange(qIndex, 'correctAnswerIndex', parseInt(e.target.value))
                        }
                      >
                        {question.options.map((option, optIndex) => (
                          // Only show options if they have text
                          option.text && (
                            <option key={optIndex} value={optIndex}>
                              {`Option ${optIndex + 1}`} 
                            </option>
                          )
                        ))}
                      </select>
                    </div>

                    <div className="form-group-quiz">
                      <label htmlFor={`points${qIndex}`}>Points</label>
                      <input
                        type="number"
                        id={`points${qIndex}`}
                        placeholder="10"
                        value={question.points}
                        onChange={(e) =>
                          handleQuestionChange(qIndex, 'points', parseInt(e.target.value))
                        }
                        min="1"
                        required
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div> {/* End Questions Section */}

            {/* Submit Quiz Button */}
            <button type="submit" className="btn btn-green submit-quiz-btn">Create Quiz</button>
          </form>
        </div> {/* End Create Quiz Section */}
      </div>
    </section>
  );
};

export default CreateQuizPage;