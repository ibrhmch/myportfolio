import React from 'react';
import Initials from './Initials';
import ContactButton from './ContactButton';

const NavigationBar = () => {
    return (
        <nav className="flex justify-center p-1 w-full border-b border-gray-300 shadow-md fixed top-0 left-0 bg-white z-50">
            <div className="flex justify-between items-center w-screen md:max-w-screen-md">
                <div className="flex items-center align-middle justify-end">
                    <Initials initials={"iBi & CMI"} />
                </div>
                <div className="space-x-4">
                    <ContactButton />
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;
