import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import {HiOutlineHome} from 'react-icons/hi2';
import {Outlet, NavLink} from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
    <div className="flex">
      <div className="bg-sidebarcolor text-white w-1/5 min-h-screen flex flex-col">
        <div className="p-4">
          {/* Logo - tên trang */}
          <h1 className="px-5 py-1 text-3xl text-textlight font-bold mb-10">Quizzy</h1>
          
          {/* Danh sách các trang */}
          <ul className="space-y-2">
            <li>
              <NavLink to="/dashboard" className={({isActive}) =>
                isActive ? "bg-tabhover text-textlight rounded-md px-5 py-2 block" : "px-5 py-2 text-textlight hover:bg-tabhover hover:rounded-md transition duration-300 block"
            }>Trang chủ</NavLink>
            </li>
            <li>
              <NavLink to="/quiz-builder" className={({isActive}) =>
                isActive ? "bg-tabhover text-textlight rounded-md px-5 py-2 block" : "px-5 py-2 text-textlight hover:bg-tabhover hover:rounded-md transition duration-300 block"
            }>Tạo bài kiểm tra</NavLink>
            </li>
            <li>
              <NavLink to="/exams" className={({isActive}) =>
                isActive ? "bg-tabhover text-textlight rounded-md px-5 py-2 block" : "px-5 py-2 text-textlight hover:bg-tabhover hover:rounded-md transition duration-300 block"
            }>Bài kiểm tra</NavLink>
            </li>
            
          </ul>
        </div>
        <div className="flex-1"></div>
        <div className="account">
          <div className='flex justify-center'>
            <hr className="mt-72 w-4/5 border-gray-600" />
          </div>
          <div className="bottom-0 left-0 p-4">
            <p className="px-5 py-1 mb-4 text-textlight">Jame Smith</p>
          </div>
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
