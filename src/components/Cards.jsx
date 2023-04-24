import React from 'react';
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Services = () => {
  return (
    <div className='w-full py-[5rem] px-4 bg-white'>
        <div className='w-full px-4 bg-white flex justify-center'>
            <h2 className='md:text-6xl sm:text-6xl text-4xl font-bold md:py-6'>
                服务内容
            </h2>
        </div>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                {/* <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" /> */}
                <h2 className='text-4xl font-bold text-center py-8'>前端网站开发</h2>
                <p className='text-center text-4xl font-bold'>$100</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>免费提供随机域名</p>
                    <p className='py-2 border-b mx-8'>免费部署上线网站</p>
                    <p className='py-2 border-b mx-8'>网站永久运行</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                {/* <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" /> */}
                <h2 className='text-4xl font-bold text-center py-8'>前后端网站开发</h2>
                <p className='text-center text-4xl font-bold'>独立报价</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>帮助和推荐云服务器租赁</p>
                    <p className='py-2 border-b mx-8'>免费部署上线</p>
                    <p className='py-2 border-b mx-8'>免费提供随机域名</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                {/* <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" /> */}
                <h2 className='text-4xl font-bold text-center py-8'>桌面软件开发</h2>
                <p className='text-center text-4xl font-bold'>独立报价</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>帮助和推荐云服务器租赁</p>
                    <p className='py-2 border-b mx-8'>免费打包应用程序</p>
                    <p className='py-2 border-b mx-8'>支持MacOS, Window操作系统</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                {/* <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" /> */}
                <h2 className='text-4xl font-bold text-center py-8'>手机应用开发</h2>
                <p className='text-center text-4xl font-bold'>独立报价</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>帮助和推荐云服务器租赁</p>
                    <p className='py-2 border-b mx-8'>免费打包应用程序</p>
                    <p className='py-2 border-b mx-8'>支持安卓和苹果手机系统</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                {/* <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" /> */}
                <h2 className='text-4xl font-bold text-center py-8'>微信小程序开发</h2>
                <p className='text-center text-4xl font-bold'>独立报价</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>帮助和推荐云服务器租赁</p>
                    <p className='py-2 border-b mx-8'>免费桌面应用打包</p>
                    <p className='py-2 border-b mx-8'>支持安卓,IOS操作系统</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
            </div>
        </div>
    </div>
  );
};

export default Services;
