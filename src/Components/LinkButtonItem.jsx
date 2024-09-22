import React from 'react';

const LinkButtonItem = ({ title, url }) => {
  return (
    <a className='w-60 text-white border border-slate-400 py-2 px-5 rounded-lg bg-[#2f252c] relative z-10 hover:bg-[#b496aa] hover:text-[#2f252c]'
      href={url ? url : '#'}
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </a>
  );
};

export default LinkButtonItem;