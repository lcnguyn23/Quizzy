// CreateQuestion.js
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useParams } from 'react-router';

const CreateQuestion = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);

  const { currentQuestionId } = useParams();

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
      <h1 className="text-3xl font-semibold mb-4">Tạo câu hỏi</h1>
      <hr className="my-4" />
      <div className="m-8">
        <h1 className="text-3xl font-semibold mb-4">Câu hỏi {currentQuestionId}</h1>
      
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Nội dung câu hỏi</label>
            <ReactQuill
              value={question}
              onChange={setQuestion}
              className="border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Lựa chọn</label>
            {options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="text"
                  value={option}
                  onChange={(e) => handleOptionChange(e, index)}
                  className="flex-1 border rounded-md"
                />
                {options.length > 2 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveOption(index)}
                    className="bg-red-500 text-white px-2 py-1 rounded-md"
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
                className="mt-2 bg-blue-500 text-white px-2 py-1 rounded-md"
              >
                Thêm lựa chọn
              </button>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Lưu câu hỏi
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateQuestion;
