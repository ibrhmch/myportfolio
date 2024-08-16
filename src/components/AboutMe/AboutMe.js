import React from 'react';
import AboutDetails from './AboutDetails';
import ProfilePicture from './ProfilePicture';

const AboutMe = () => {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start p-4">
            <AboutDetails />
            <ProfilePicture />
        </div>
    );
};

export default AboutMe;
