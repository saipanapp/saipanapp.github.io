import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>
          电子与计算机工程
        </p>
        <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['高效', '质量', '安全']}
            typeSpeed={120}
            backSpeed={140}
            loop
        />
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          专注软件开发
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            【需求-设计-开发-售后-维护】
          </p>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>MHS编程俱乐部, 曾获奖2020,2021,2022国会软件开发CNMI第一名</p>
        <Link
          to="services"
          smooth={true}
          duration={500}
          className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black cursor-pointer'
        >
          查看服务
        </Link>
      </div>
    </div>
  );
};

export default Home;
