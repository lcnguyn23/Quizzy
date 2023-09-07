import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import {Outlet, Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
    <div className="flex">
      <div className="bg-sidebarcolor text-white w-1/5 min-h-screen">
        <div className="p-4">
          {/* Logo hoặc tên trang */}
          <h1 className="px-5 py-1 text-3xl text-textlight font-bold mb-10">Quizzy</h1>
          
          {/* Danh sách các trang */}
          <ul className="space-y-2">
            <li className="px-5 py-2 text-textlight hover:bg-gray-700 hover:rounded-md transition duration-300">
              <Link to="/src/Dashboard.jsx">Trang chủ</Link>
            </li>
            <li className="px-5 py-2 text-textlight hover:bg-gray-700 hover:rounded-md transition duration-300">
              <Link to="/quiz-builder">Trình tạo bài kiểm tra</Link>
            </li>
            <li className="px-5 py-2 text-textlight hover:bg-gray-700 hover:rounded-md transition duration-300">
              <Link to="/exams">Bài kiểm tra</Link>
            </li>
            <li className="px-5 py-2 text-textlight hover:bg-gray-700 hover:rounded-md transition duration-300">
              <Link to="/students">Danh sách học sinh</Link>
            </li>
          </ul>
        </div>
        <div className='flex justify-center'>
          <hr className="mt-72 w-4/5 border-gray-600" />
        </div>
        <div className="bottom-0 left-0 p-4">
          <p className="px-5 py-1 mb-4 text-textlight">Jame Smith</p>
        </div>
      </div>
      <div className="flex-1">
        <Outlet/>
      </div>
    </div>
    </>
  );
}

export default Sidebar;
