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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Sidebar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/quiz-builder",
        element: <QuizBuilder />,
      },
      {
        path: "/quiz-builder/create-question/:currentQuestionId",
        element: <CreateQuestion />,
      },
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
