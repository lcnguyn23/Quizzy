import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 mx-4 sm:w-2/3 md:w-1/2 lg:w-1/3">
        <h1 className="text-3xl font-semibold mb-4">Chào mừng đến với Website tạo bài kiểm tra!</h1>
        <p className="text-gray-700 mb-4">
          Chúng tôi cung cấp cho bạn công cụ để tạo và quản lý các bài kiểm tra một cách dễ dàng.
        </p>
        <p className="text-gray-700">
          Hãy bắt đầu ngay hôm nay và tạo các bài kiểm tra tuyệt vời của riêng bạn.
        </p>
      </div>
    </div>
  );
};

export default Home;
