import React from 'react';

const ProfilePicture = () => {
    return (
        <div className=''>
            <img
                src={require('./profilepicture.jpg')}
                alt="Profile"
                className="rounded-full w-48 h-48 object-cover mx-auto md:mx-0 border-2 border-gray-500"
            />

        </div>
    );
};

export default ProfilePicture;
