import React from 'react';
import heroimg from '../assets/hero.png'
import { FaGoogle } from 'react-icons/fa';

import { FaAppStore } from "react-icons/fa";
import StatsSection from './StatsSection';
const Hero = () => {
    return (
        <div>
            <section>
                <div >
                    <h1 className='text-center text-4xl font-serif '>We Build </h1>
                    <h1 className='text-center text-6xl font-serif text-blue-800'>Productive Apps</h1>
                    <p className='text-center text-xl font-serif mt-1'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br></br>Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                </div>
                <div className='flex justify-center'>
                    <div className='flex flex-col sm:flex-row justify-center items-center gap-4 mt-4'>
                        {/* Google Play Button */}
                        <button className='flex items-center justify-center gap-2 px-6 py-3 text-white bg-[#632EE3] rounded-xl border hover:bg-purple-700 transition'>
                            <FaGoogle /> Google Play
                        </button>

                        {/* App Store Button */}
                        <button className='flex items-center justify-center gap-2 px-6 py-3 text-white bg-[#632EE3] rounded-xl border hover:bg-purple-700 transition'>
                            <FaAppStore /> App Store
                        </button>
                    </div>
                </div>
                <div>
                    <img className='mx-auto mt-1  ' src={heroimg} alt="" srcSet="" />
                </div>
            </section>
            <StatsSection></StatsSection>
        </div>
    );
};

export default Hero;




