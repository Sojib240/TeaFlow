import React from 'react'

const CursorFollower = ({cursor}) => {

    return (
        <div ref={cursor} className="border w-6 h-6 fixed top-0 left-0 z-[999999] rounded-[0.4vw] pointer-events-none hidden lg:block" />
    );
};

export default CursorFollower;
