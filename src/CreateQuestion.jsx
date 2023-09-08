// CreateQuestion.js
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useLocation, useParams } from 'react-router';

const CreateQuestion = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);

  const { currentQuestionId} = useParams();
  const location = useLocation();
  
  

  const handleOptionChange = (e, index) => {
    const newOptions = [...options];
    newOptions[index] = e.target.value;
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    if (options.length < 4) {
      setOptions([...options, '']);
    }
  };

  const handleRemoveOption = (index) => {
    if (options.length > 2) {
      const newOptions = [...options];
      newOptions.splice(index, 1);
      setOptions(newOptions);
    }
  };

  return (
    <div className="m-8">
      <h1 className="text-3xl font-semibold mb-4">Tạo bài kiểm tra</h1>
      <h2 className="text-xl font-semibold mb-4">{location.state.testName}</h2>
      <hr className="my-4" />
      <div className="m-8">
        <h1 className="text-3xl font-semibold mb-4">Câu hỏi {currentQuestionId}</h1>
      
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Nội dung câu hỏi</label>
            <ReactQuill
              value={question}
              onChange={setQuestion}
              className="border rounded-md border-textdark"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Lựa chọn</label>
            {options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2 my-2">
                <input
                  type="text"
                  value={option}
                  onChange={(e) => handleOptionChange(e, index)}
                  className="flex-1 border border-textdark rounded-md"
                />
                {options.length > 2 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveOption(index)}
                    className="bg-white text-textdark px-2 py-1 rounded-md border border-textdark hover:bg-gray-500"
                  >
                    Xóa
                  </button>
                )}
              </div>
            ))}
            {options.length < 4 && (
              <button
                type="button"
                onClick={handleAddOption}
                className="mt-2 bg-textdark text-white px-2 py-1 rounded-md hover:bg-gray-500"
              >
                Thêm lựa chọn
              </button>
            )}
          </div>

          <button
            type="submit"
            className="bg-textdark text-white px-4 py-2 rounded-md hover:bg-gray-500"
          >
            Lưu câu hỏi
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateQuestion;
