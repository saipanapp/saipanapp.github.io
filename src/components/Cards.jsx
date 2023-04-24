import React from 'react';
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Services = () => {
  return (
    <div className='w-full py-[3rem] px-4 bg-white'>
        <div className='w-full px-4 bg-white flex justify-center'>
            <h2 className='md:text-6xl sm:text-6xl text-4xl font-bold md:py-2'>
                服务内容
            </h2>
        </div>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                {/* <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" /> */}
                <h2 className='text-3xl font-bold text-center py-8'>前端网站开发</h2>
                <p className='text-center text-4xl font-bold'>$100</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>免费提供随机域名</p>
                    <p className='py-2 border-b mx-8'>免费部署上线网站</p>
                    <p className='py-2 border-b mx-8'>提供源码</p>
                </div>
                <div className='font-medium px-6 py-3'>
                    <p>
                        适用于：旅游页面，公司页面，个人页面，餐厅页面，作品集，广告页面，公寓介绍等。
                    </p>
                </div>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                {/* <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" /> */}
                <h2 className='text-3xl font-bold text-center py-8'>前后端网站开发</h2>
                <p className='text-center text-4xl font-bold'>独立报价</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>帮助和推荐云服务器租赁</p>
                    <p className='py-2 border-b mx-8'>免费部署上线</p>
                    <p className='py-2 border-b mx-8'>提供源码</p>
                </div>
                <div className='font-medium px-6 py-3'>
                    <p>
                        适用于: 论坛网站，购物网站，视频网站，在线交易等服务。
                    </p>
                </div>            
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                {/* <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" /> */}
                <h2 className='text-3xl font-bold text-center py-8'>桌面软件开发</h2>
                <p className='text-center text-4xl font-bold'>独立报价</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>帮助和推荐云服务器租赁</p>
                    <p className='py-2 border-b mx-8'>提供源码</p>
                    <p className='py-2 border-b mx-8'>支持MacOS, Window操作系统</p>
                </div>
                <div className='font-medium px-6 py-3'>
                    <p>
                        适用于: 发票生成软件，数据管理软件，视频剪辑等
                    </p>
                </div>  
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                {/* <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" /> */}
                <h2 className='text-3xl font-bold text-center py-8'>手机应用开发</h2>
                <p className='text-center text-4xl font-bold'>独立报价</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>帮助和推荐云服务器租赁</p>
                    <p className='py-2 border-b mx-8'>提供源码</p>
                    <p className='py-2 border-b mx-8'>支持安卓和苹果手机系统</p>
                </div>
                <div className='font-medium px-6 py-3'>
                    <p>
                        适用于: 旅游APP, 论坛APP, 餐厅APP，租房APP等
                    </p>
                </div>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                {/* <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" /> */}
                <h2 className='text-3xl font-bold text-center py-8'>微信小程序开发</h2>
                <p className='text-center text-4xl font-bold'>独立报价</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>帮助和推荐云服务器租赁</p>
                    <p className='py-2 border-b mx-8'>免费小程序应用打包</p>
                    <p className='py-2 border-b mx-8'>提供源码</p>
                </div>
                <div className='font-medium px-6 py-3'>
                    <p>
                        适用于: 旅游小程序, 论坛小程序, 餐厅小程序，租房小程序，商场小程序等
                    </p>
                </div>            
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                {/* <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" /> */}
                <h2 className='text-3xl font-bold text-center py-8'>寻求软件开发实习</h2>
                <p className='text-center text-4xl font-bold'>时薪</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>具备前后端开发技能</p>
                    <p className='py-2 border-b mx-8'>熟悉数据库方面知识</p>
                    <p className='py-2 border-b mx-8'>熟悉计算机底层原理</p>
                </div>
                <div className='font-medium px-6 py-3'>
                    <p>
                        编程语言: Python, Javascript, C/C++, Java, SQL, HTML/CSS, C#
                    </p>
                </div>            
            </div>
        </div>
    </div>
  );
};

export default Services;
