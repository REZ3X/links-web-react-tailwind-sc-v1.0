import React from 'react';

function Footer() {
    return (
        <div className=' footer text-white text-sm p-5'>
            <p className='flex flex-row gap-2'>Made with <img className='w-5' src='/react.svg'/><img className='w-5' src='/vite.svg'/> <img className='w-5' src='/tailwind.svg'/></p>
            <p>&copy; 2024 Xi4N & REZ3X. All Rights Reserved.</p>
        </div>
    );
}

export default Footer;