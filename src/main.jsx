import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Sidebar from './sidebar';
import ErrorPage from './error-page';
import QuizBuilder from './QuizBuilder';
import CreateQuestion from './CreateQuestion';
import './index.css';
import MyQuiz from './MyQuiz';
import QuizDetail from './QuizDetail';
import Home from './Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Sidebar />,
    errorElement: <ErrorPage />,
    redirect: <Home />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/quiz-builder",
        element: <QuizBuilder />,
      },
      {
        path: "/quiz-builder/create-question",
        element: <CreateQuestion />,
      },
      {
        path: "/my-quiz",
        element: <MyQuiz/>
      },
      {
        path: "/my-quiz/quiz-detail/:quizId",
        element: <QuizDetail/>
      }
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
