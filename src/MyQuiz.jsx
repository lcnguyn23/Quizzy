import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MyQuiz = () => {
  // Tạo danh sách các bài kiểm tra (thay bằng dữ liệu thực tế từ cơ sở dữ liệu)
  const [quizzes, setQuizzes] = useState([
    {
      id: 1,
      testName: 'Bài kiểm tra số 1',
      numQuestions: 5,
      createdAt: '2023-09-11',
    },
    {
      id: 2,
      testName: 'Bài kiểm tra số 2',
      numQuestions: 5,
      createdAt: '2023-09-12',
    },
  ]);

  return (
    <div className="m-8">
      <h1 className="text-3xl font-semibold mb-4">My Quiz - Bài kiểm tra của tôi</h1>
      <hr className="my-4" />
      
      <ul className="list-disc pl-4">
        {quizzes.map((quiz) => (
          <li key={quiz.id} className="mb-4">
            <Link to={`/Quizzy/my-quiz/quiz-detail/${quiz.id}`} className="text-textdark hover:underline">
              <span className="font-semibold">{quiz.testName}</span> ({quiz.numQuestions} câu hỏi) - Ngày tạo: {quiz.createdAt}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyQuiz;
