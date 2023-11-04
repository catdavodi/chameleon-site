import React from 'react';
const TabButton = ({ active, selectTab, children}) => {
    const buttonClasses = active ? 'text-white border-b' : 'text-[#FFFFFF] border-b '
    return (
        <button onClick={selectTab}>
            <p className='mr-3 font-semibold hover:text-green-500 text-[#FFFFFF] border-b border-pink-500 ${buttonClasses}'>
            {children}
            </p>
        </button>    
    )
}

export default TabButton
