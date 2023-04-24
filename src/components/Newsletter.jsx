import React from 'react';

const Contact = () => {
  return (
    <div className='w-full py-14 text-white px-4 ml-3'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            联系我们！
          </h1>
          <p>微信号：AseCantCodeLol</p>
          <p>邮箱：<a target="_blank" href="mailto:spyxles123@gmail.com">spyxles123@gmail.com</a> </p>
        </div>


        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <span className='text-[#00df9a]'>微信二维码</span>
          </div>
        
        </div>

        {/* <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black'
              type='email'
              placeholder='Enter Email'
            />
            <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Notify Me
            </button>
          </div>
          <p>
            We care bout the protection of your data. Read our{' '}
            <span className='text-[#00df9a]'>Privacy Policy.</span>
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
