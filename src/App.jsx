import './App.css';
import { BrowserRouter as Router, Navigate, Route } from "react-router-dom";
import Sidebar from './sidebar.jsx'
import QuizBuilder from './QuizBuilder.jsx'
import CreateQuestion from './CreateQuestion';
import MyQuiz from './MyQuiz';
import QuizDetail from './QuizDetail';
import Home from './Home';

const App = () => {
  return (
    <Router>
      <div>
        <Sidebar>
          <Navigate>
            <Route path="/" element={Home } />
            <Route path="/home" element={Home} />
            <Route path="/quiz-builder" element={QuizBuilder} />
            <Route path="/create-question" element={CreateQuestion} />
            <Route path="/my-quiz" element={MyQuiz} />
            <Route path="/my-quiz/quiz-detail/:quizId" element={QuizDetail} />
            <Route
                path="*"
                element={<Navigate to="/home" replace />}
            />
          </Navigate>
        </Sidebar>
      </div>
    </Router>
  );
}
export default App
