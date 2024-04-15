import React, { useEffect } from 'react';

const Extra = () => {
    useEffect(()=>{
        document.title='Extra'
    },[])
    return (
        <div>
            <h1>This is extra Route</h1>
        </div>
    );
};

export default Extra;