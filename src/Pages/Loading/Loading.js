import React from 'react';

const Loading = () => {
    return (
        <div>
            <div className='flex justify-center items-center my-60'>
                <progress className="progress w-56"></progress>
            </div>
        </div>
    );
};

export default Loading;