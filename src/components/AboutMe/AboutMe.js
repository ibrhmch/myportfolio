import React from 'react';
import AboutDetails from './AboutDetails';
import ProfilePicture from './ProfilePicture';

const AboutMe = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center px-8">
            <AboutDetails />
            <ProfilePicture />
        </div>
    );
};

export default AboutMe;