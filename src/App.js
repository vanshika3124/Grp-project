import React from 'react';
// Router imports
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// Global CSS
import './App.css';

// Layout Components (Har page par dikhenge)
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Components
import HomePageBefore from './pages/HomePageBefore'; // Login se pehle wala Home
import HomePageAfter from './pages/HomePageAfter';   // Login ke baad wala Home
import LoginPage from './pages/LoginPage';         // Login form
import SignupPage from './pages/SignupPage';       // Signup form
import FaqsPage from './pages/FaqsPage';           // FAQs page
import CreateQuizPage from './pages/CreateQuizPage'; // Quiz Create page

// --- DUMMY PAGES (Navbar links ke liye) ---
// Inki jagah aap asli component import kar lena
const DashboardPage = () => <div style={{ padding: '2rem', minHeight: '60vh' }}><h2>Dashboard Page (Protected)</h2></div>;
const ClassroomPage = () => <div style={{ padding: '2rem', minHeight: '60vh' }}><h2>Classroom Page (Protected)</h2></div>;
const QuizPage = () => <div style={{ padding: '2rem', minHeight: '60vh' }}><h2>Quiz Page (Protected)</h2></div>;
// ------------------------------------------


// Helper Component: Private Route
// Sirf logged-in user ke liye access allowed
const PrivateRoute = ({ children }) => {
  const isLoggedIn = !!localStorage.getItem('token');
  if (!isLoggedIn) {
    // Agar logged in nahi hai, toh 'before' wale homepage par bhejo
    return <Navigate to="/" replace />;
  }
  return children;
};

// Helper Component: Public Route
// Logged-in user ko login/signup pe jane se roke
const PublicRoute = ({ children }) => {
  const isLoggedIn = !!localStorage.getItem('token');
  // Agar logged in hai, toh 'after' wale homepage par bhejo
  return isLoggedIn ? <Navigate to="/" replace /> : children;
};

// ==================== MAIN APP ====================
function App() {
  // Login state ko yahan check karo
  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <BrowserRouter>
      <div className="App">
        {/* Navbar har page par dikhega */}
        <Navbar />

        {/* Page content (jo route ke hisaab se badlega) */}
        <main className="main-content">
          <Routes>

            {/* --- 1. YEH RAHA MAIN FIX --- */}
            {/* Ab yeh login state ke hisaab se page dikhayega */}
            <Route
              path="/"
              element={isLoggedIn ? <HomePageAfter /> : <HomePageBefore />}
            />

            {/* Login Page */}
            <Route
              path="/login"
              element={<PublicRoute><LoginPage /></PublicRoute>}
            />

            {/* Signup Page */}
            <Route
              path="/signup"
              element={<PublicRoute><SignupPage /></PublicRoute>}
            />

            {/* FAQs Page (Public) */}
            <Route
              path="/faqs"
              element={<FaqsPage />}
            />

            {/* --- 2. YEH RAHE NAYE ROUTES --- */}
            
            {/* Dashboard (Protected) */}
            <Route
              path="/dashboard"
              element={<PrivateRoute><DashboardPage /></PrivateRoute>}
            />

            {/* Classroom (Protected) */}
            <Route
              path="/classroom"
              element={<PrivateRoute><ClassroomPage /></PrivateRoute>}
            />

            {/* Quiz (Protected) */}
            <Route
              path="/quiz"
              element={<PrivateRoute><QuizPage /></PrivateRoute>}
            />

            {/* Create Quiz Page (Protected) */}
            <Route
              path="/createquiz"
              element={<PrivateRoute><CreateQuizPage /></PrivateRoute>}
            />
            
            {/* ------------------------------- */}

            {/* Fallback Route (invalid URL → HomePage) */}
            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
          </Routes>
        </main>

        {/* Footer har page par dikhega */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
