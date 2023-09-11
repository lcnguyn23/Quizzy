// CreateTest.js
import React, { useState } from 'react';
import { Outlet} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';
import './index.css'

const QuizBuilder = ({setActivePage}) => {
  const navigate = useNavigate();
  const [testInfo, setTestInfo] = useState({
    testName: '',
    testDuration: '',
    numQuestions: 0,
  });
  const [questions, setQuestions] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTestInfo({ ...testInfo, [name]: value });
  };

  const handleCreateTest = () => {
    // Submit test info to server or perform other actions
    console.log('Test Info:', testInfo);
    console.log('Questions:', questions);

    // Redirect to the question creation page
    
    
    navigate(`./create-question/`, {state: { testName: testInfo.testName, numQuestions: testInfo.numQuestions}});
  };

  const handleReset = () => {
    setTestInfo({ testName: '', testDuration: '', numQuestions: 0 });
  };

  return (
    <div className="m-8">
      <h1 className="text-3xl font-semibold mb-4">Quiz Builder - Tạo bài kiểm tra</h1>
      <hr className="my-4" />
      
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Tên bài kiểm tra
          </label>
          <input
            type="text"
            name="testName"
            value={testInfo.testName}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Thời gian làm bài (phút)
          </label>
          <input
            type="number"
            name="testDuration"
            value={testInfo.testDuration}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Số lượng câu hỏi
          </label>
          <input
            type="number"
            name="numQuestions"
            value={testInfo.numQuestions}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        
        <div className="mb-4">
          <button
            type="button"
            onClick={handleCreateTest}
            className="bg-sidebarcolor text-white px-4 py-2 rounded-md mr-2 hover:bg-gray-500"
          >
            Tạo
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="bg-white text-textdark px-3.5 py-1.5 rounded-md border-2 border-textdark hover:bg-gray-500"
          >
            Xóa
          </button>
        </div>
      </form>
      <Outlet/>
    </div>
  );
};

export default QuizBuilder;
