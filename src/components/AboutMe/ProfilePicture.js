import React from 'react';

const ProfilePicture = () => {
    return (
        <div className="flex-1 p-4">
            <img
                src={require('./profilepicture.jpg')}
                alt="Profile"
                className="rounded-full w-48 h-48 object-cover mx-auto md:mx-0 border-2 border-indigo-400"
            />
        </div>
    );
};

export default ProfilePicture;
