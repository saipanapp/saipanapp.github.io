import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>塞班软件</h1>
      <ul className='hidden md:flex'>
        <li className='whitespace-nowrap p-5'>
          <Link className="cursor-pointer"  activeClass="active" to="home" spy={true} smooth={true} duration={500}>封面</Link>
        </li>
        <li className='whitespace-nowrap p-5'>
          <Link className="cursor-pointer"  activeClass="active" to="services" spy={true} smooth={true} duration={500}>服务</Link>
        </li>
        <li className='whitespace-nowrap p-5'>
          <Link className="cursor-pointer"  activeClass="active" to="contact" spy={true} smooth={true} duration={500}>联系</Link>
        </li>
      </ul>

      {/* <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-50' : 'ease-in-out duration-500 fixed left-[-100%] z-50'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
          <li className='p-4 border-b border-gray-600'>
            <Link className="cursor-pointer"  activeClass="active" to="home" spy={true} smooth={true} duration={500}>封面</Link>
          </li>
          <li className='p-4 border-b border-gray-600'>
            <Link className="cursor-pointer"  activeClass="active" to="services" spy={true} smooth={true} duration={500}>服务</Link>
          </li>
          <li className='p-4 border-b border-gray-600'>
            <Link className="cursor-pointer"  activeClass="active" to="contact" spy={true} smooth={true} duration={500}>联系</Link>
          </li>
      </ul> */}
      <div className="relative md:hidden">
        <div
          onClick={handleNav}
          className="fixed top-4 right-0 m-5 z-50 text-[#00df9a]"
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-40"
              : "ease-in-out duration-500 fixed left-[-100%] z-40"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
            塞班软件
          </h1>
          <li className="p-4 border-b border-gray-600">
            <Link
              className="cursor-pointer"
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              封面
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link
              className="cursor-pointer"
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              duration={500}
            >
              服务
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link
              className="cursor-pointer"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              联系
            </Link>
          </li>
        </ul>
      </div>


    </div>
  );
};

export default Navbar;
