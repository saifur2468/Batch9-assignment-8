import React from 'react';
import logo from '../assets/logo.png';
import { FaGithub } from 'react-icons/fa';
import { MdOutlineMenu } from "react-icons/md";
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="bg-white shadow-md px-4 py-2">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <img className="w-[60px] h-auto" src={logo} alt="Logo" />
                </div>

                {/* Menu items - hidden on small screens */}
                <ul className="hidden md:flex gap-6 items-center text-xl font-serif">
                  <Link to="/">  <li className="hover:text-blue-800 cursor-pointer">Home</li></Link>
                   <Link to="/AllApps"> <li className="hover:text-blue-800 cursor-pointer">App</li></Link>
                  <Link to="/Installation"> <li className="hover:text-blue-800 cursor-pointer">Installation</li></Link> 
                </ul>

                {/* Contribute button */}
                <button className="text-xl bg-[#632EE3] flex items-center gap-2 text-white rounded-xl border-2 px-4 py-2 hover:bg-purple-700">
                    <FaGithub /> Contribute
                </button>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button className="text-2xl"><MdOutlineMenu /></button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;