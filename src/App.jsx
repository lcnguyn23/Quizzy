import './App.css';
import {HiOutlineHome} from 'react-icons/hi2';
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
            <Route path="/dashboard" component={Dashboard}></Route>
            <Route path="/quiz-builder" component={QuizBuilder}></Route>
            <Route path="/create-question/:currentQuestionId" component={CreateQuestion}></Route>
          </Navigate>
        </Sidebar>
      </div>
      <div>

      </div>
    </Router>
  );
}
export default App
