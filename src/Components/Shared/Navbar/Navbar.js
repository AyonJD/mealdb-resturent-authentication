import React from 'react';
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='primary'>
            <div className="top flex justify-between items-center h-12 container mx-auto">
                <div className="left text-white text-md">
                    <p>Get Free Shipping – Free 30 Day Money Back Guarantee</p>
                </div>
                <div className="right-icon flex text-white">
                    <Link to="https://www.facebook.com/ayon.jodder.75/"><BsFacebook className='ml-8 text-xl'></BsFacebook></Link>
                    <Link to="https://github.com/AyonJD"><BsTwitter className='ml-8 text-xl'></BsTwitter></Link>
                    <Link to="https://github.com/AyonJD"><BsInstagram className='ml-8 text-xl'></BsInstagram></Link>
                </div>
            </div>
            <div className="bottom"></div>
        </div>
    );
};

export default Navbar;