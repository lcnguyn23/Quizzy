import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Navigate, Route } from "react-router-dom";
import Sidebar from './sidebar.jsx'
import Dashboard from './Dashboard.jsx'
import QuizBuilder from './QuizBuilder.jsx'
import CreateQuestion from './CreateQuestion';

const App = () => {
  return (
    <Router>
      <div>
        <Sidebar>
          <Navigate>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/quiz-builder" element={QuizBuilder} />
            <Route path="/create-question/:currentQuestionId" element={CreateQuestion} />
          </Navigate>
        </Sidebar>
      </div>
    </Router>
  );
}
export default App
