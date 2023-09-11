import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useLocation } from 'react-router-dom';

const CreateQuestion = () => {
  const location = useLocation();
  const numQuestions = location.state?.numQuestions || 0;
  const testName = location.state?.testName || '';

  return (
    <div className="m-8">
      <h1 className="text-3xl font-semibold mb-4">Quiz Builder: Tạo bài kiểm tra</h1>
      <h2 className="text-2xl font-semibold mb-4">{testName}</h2>
      <hr className="my-4" />

      {Array.from({ length: numQuestions }).map((_, questionIndex) => (
        <div key={questionIndex} className="m-8 question">
          <form>
            <h1 className="text-3xl font-semibold mb-4">Câu hỏi {questionIndex + 1}</h1>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Nội dung câu hỏi
              </label>
              <ReactQuill
                className="border rounded-md border-textdark"
              />
            </div>
            <div className="mb-4">
              
                <div className="flex items-center space-x-2 my-2">
                  <span className="text-lg font-semibold">1.</span>
                  <input
                    type="text"
                    className="flex-1 border border-textdark rounded-md px-2"
                  />
                  
                </div>

                <div className="flex items-center space-x-2 my-2">
                  <span className="text-lg font-semibold">2.</span>
                  <input
                    type="text"
                    className="flex-1 border border-textdark rounded-md px-2"
                  />
                  
                </div>

                <div className="flex items-center space-x-2 my-2">
                  <span className="text-lg font-semibold">3.</span>
                  <input
                    type="text"
                    className="flex-1 border border-textdark rounded-md px-2"
                  />
                  
                </div>
                <div className="flex items-center space-x-2 my-2">
                  <span className="text-lg font-semibold">4.</span>
                  <input
                    type="text"
                    className="flex-1 border border-textdark rounded-md px-2"
                  />
                  
                </div>
              
            </div>
          </form>
        </div>
      ))}

      <button
        type="submit"
        className="bg-textdark text-white px-4 py-2 rounded-md hover:bg-gray-500"
      >
        Lưu câu hỏi
      </button>
    </div>
  );
};

export default CreateQuestion;
