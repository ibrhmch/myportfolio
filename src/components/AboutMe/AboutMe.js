import React from 'react';
import AboutDetails from './AboutDetails';
import ProfilePicture from './ProfilePicture';

const AboutMe = () => {
    return (
        <div className='flex justify-between'>
            <AboutDetails />
            <ProfilePicture />
        </div>
    );
};

export default AboutMe;