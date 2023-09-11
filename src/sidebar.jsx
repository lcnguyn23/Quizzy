import React from 'react';
import {HiOutlineHome, HiOutlineChartBarSquare, HiOutlineSquare3Stack3D, HiArrowRightOnRectangle} from 'react-icons/hi2';
import {Outlet, NavLink} from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
    <div className="flex">
      <div className="bg-sidebarcolor text-white w-1/5 min-h-screen flex flex-col">
        <div className="p-4">
          {/* Logo - tên trang */}
          <h1 className="px-5 py-1 text-3xl text-textlight font-bold mb-10 flex items-center">
            <img src="/src/assets/quiz-white.png" className="w-10 h-10 pr-2"></img>
            Quizzy
          </h1>
          
          {/* Danh sách các trang */}
          <ul className="space-y-2">
            <li>
              <NavLink to="/" className={({isActive}) =>
                isActive ? "bg-tabhover text-textlight rounded-md px-5 py-2 block flex items-center" : "px-5 py-2 text-textlight hover:bg-tabhover hover:rounded-md transition duration-300 block flex items-center"
            }><HiOutlineHome className="pr-2 w-7 h-7"/>Home</NavLink>
            </li>
            <li>
              <NavLink to="/quiz-builder" className={({isActive}) =>
                isActive ? "bg-tabhover text-textlight rounded-md px-5 py-2 block flex items-center" : "px-5 py-2 text-textlight hover:bg-tabhover hover:rounded-md transition duration-300 block flex items-center"
            }><HiOutlineChartBarSquare className="pr-2 w-7 h-7"/>Quiz Builder</NavLink>
            </li>
            <li>
              <NavLink to="/my-quiz" className={({isActive}) =>
                isActive ? "bg-tabhover text-textlight rounded-md px-5 py-2 block flex items-center" : "px-5 py-2 text-textlight hover:bg-tabhover hover:rounded-md transition duration-300 block flex items-center"
            }><HiOutlineSquare3Stack3D className="pr-2 w-7 h-7"/>My Quiz</NavLink>
            </li>
            
          </ul>
        </div>
        <div className="flex-1"></div>
        <div className="account">
          <div className='flex justify-center'>
            <hr className="mt-72 w-4/5 border-gray-600" />
          </div>
          <div className="bottom-0 left-0 p-4 flex items-center">
            <p className="px-5 py-1 mb-4 text-textlight">Jame Smith</p>
            <HiArrowRightOnRectangle style={{marginBottom: "15px"}}/>
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
