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
          content: 'Đâu là quốc gia lớn nhất thế giới dựa trên diện tích?',
          options: ['Nga', 'Hoa Kỳ', 'Trung Quốc', 'Ấn Độ'],
        },
        {
          content: 'Dãy núi nào là dãy núi cao nhất trên thế giới?',
          options: ['Dãy núi Rocky', 'Dãy núi Andes', 'Dãy núi Alps', 'Dãy núi Himalaya'],
        },
        // ...
      ],
    },
    {
      id: 2,
      testName: 'Bài kiểm tra 2',
      questions: [
        {
          content: 'Thủ đô của nước Nga là gì?',
          options: ['Saint Petersburg', 'Kazan', 'Moscow', 'Novosibirsk'],
        },
        {
          content: 'Sông nào dài nhất trên thế giới?',
          options: ['Sông Nile', 'Sông Amazon', 'Sông Mississippi', 'Sông Yangtze'],
        },
        {
          content: 'Quốc gia nào nằm ở cực Nam của thế giới?',
          options: ['Anh', 'Nam Cực', 'Argentina', 'Úc'],
        },
        
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
