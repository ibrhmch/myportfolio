import React from 'react';

const IconBar = () => {
    return (
        <div className="flex justify-start items-center py-2 mt-2">
            <div className="flex space-x-4">
                <a target='_blank' href="https://www.linkedin.com/in/ibrhmch/" rel="noopener noreferrer" className="hover:text-gray-600 transition duration-200">
                    <i className="fa-brands fa-linkedin fa-2x"></i>
                </a>
                <a target='_blank' href="https://github.com/ibrhmch" rel="noopener noreferrer" className="hover:text-gray-600 transition duration-200">
                    <i className="fa-brands fa-github fa-2x"></i>
                </a>
                <a target='_blank' href="https://apps.apple.com/us/developer/ch-mohammad-ibrahim/id1735822563" className="hover:text-gray-600 transition duration-200">
                    <i className="fa-brands fa-apple fa-2x"></i>
                </a>
            </div>
            <div className='space-x-4 mx-6'>
                <button className="py-2 px-4 border-b border-gray-200 hover:border-black transition duration-300">
                    <a target='_blank' href="https://drive.google.com/file/d/1zZM1a8itsVGW0WdVMZsvHREGqEi3lEKP/view?usp=sharing">
                        Resume
                    </a>
                </button>
            </div>
        </div >
    );
};

export default IconBar;
