import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const QuizDetail = () => {
  const { quizId } = useParams();
  console.log(quizId);
  // Tạo danh sách các bài kiểm tra (thay bằng dữ liệu thực tế từ cơ sở dữ liệu)
  const quizzes = [
    {
      id: 1,
      testName: 'Bài kiểm tra 1',
      questions: [
        {
          content: 'Nội dung câu hỏi 1',
          options: ['Lựa chọn 1', 'Lựa chọn 2', 'Lựa chọn 3', 'Lựa chọn 4'],
        },
        {
          content: 'Nội dung câu hỏi 2',
          options: ['Lựa chọn 1', 'Lựa chọn 2', 'Lựa chọn 3', 'Lựa chọn 4'],
        },
        // ...
      ],
    },
    {
      id: 2,
      testName: 'Bài kiểm tra 2',
      questions: [
        {
          content: 'Nội dung câu hỏi 1',
          options: ['Lựa chọn 1', 'Lựa chọn 2', 'Lựa chọn 3', 'Lựa chọn 4'],
        },
        {
          content: 'Nội dung câu hỏi 2',
          options: ['Lựa chọn 1', 'Lựa chọn 2', 'Lựa chọn 3', 'Lựa chọn 4'],
        },
        // ...
      ],
    },
    // Thêm các bài kiểm tra khác tại đây
  ];

  // Tìm bài kiểm tra dựa trên quizId
  const quizDetail = quizzes.find((quiz) => quiz.id === parseInt(quizId));

  if (!quizDetail) {
    return <div>Bài kiểm tra không tồn tại</div>;
  }

  return (
    <div className="m-8">
      <h1 className="text-3xl font-semibold mb-4">Chi tiết bài kiểm tra: {quizDetail.testName}</h1>
      <ul>
        {quizDetail.questions.map((question, index) => (
          <li key={index} className="mb-4">
            <div className="border rounded-md p-4">
              <h2 className="text-xl font-semibold">Câu hỏi {index + 1}</h2>
              <p className="text-gray-700">{question.content}</p>
            </div>
            <ul className="list-decimal list-inside mt-2">
              {question.options.map((option, optionIndex) => (
                <li key={optionIndex} className="font-semibold">
                  {option}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizDetail;
