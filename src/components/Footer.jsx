import React from 'react';
import wechatqrcode from '../assets/wechatqrcode.jpg';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto pt-10 px-4 grid lg:grid-cols-2 gap-8 text-gray-300 mb-20 lg:justify-items-end	'>

      <div className='space-y-20'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            联系我们！
          </h1>
          <p>微信号：AseCantCodeLol</p>
          <p>邮箱：<a target="_blank" href="mailto:spyxles123@gmail.com">spyxles123@gmail.com</a> </p>
        </div>
        <div>
          <h1 className='w-full text-3xl font-bold text-[#00df9a]'>塞班软件</h1>
          <p className='py-4'>资深软件开发团队 - MHS编程俱乐部 2020,2021,2022 国会软件开发CNMI第一名 </p>
        </div>

      </div>

      {/* <div style="border-left:1px solid #000;height:500px"></div> */}


      {/* <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'> */}

      <div className='align-top justify-item-end'>
        <span className='text-[#00df9a] text-2xl font-bold'>微信二维码</span>
        <div className=''>
          <img src={wechatqrcode} alt="Logo" width={180} height={60} className='' />
        </div>
      </div>

    </div>



    // </div>
  );
};

export default Footer;
