import React from 'react';

const Initials = ({ initials }) => {
    return (
        <a href="/" className="text-xl font-bold ml-2 text-gray-400 hover:text-indigo-400 hover:text-xl transition duration-300 transform hover:scale-110">
            {initials}
        </a>
    );
};

export default Initials;
