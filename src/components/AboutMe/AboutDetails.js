import React from 'react';
import IconBar from './IconBar';

const AboutDetails = () => {
    return (
        <div className="flex flex-col w-4/6 justify-center p-3">
            <div className='flex flex-col py-2'>
                <span className="text-4xl font-bold">Ch Mohammad Ibrahim</span>
                <span className="text-gray-600">MS CS @ University of Colorado Boulder</span>
            </div>
            <p>
                {/* Your details here */}
                I am Ch Mohammad Ibrahim, a passionate software developer with experience in building responsive web applications. I enjoy solving complex problems and constantly learning new technologies.
            </p>
            <IconBar />
        </div>
    );
};

export default AboutDetails;
