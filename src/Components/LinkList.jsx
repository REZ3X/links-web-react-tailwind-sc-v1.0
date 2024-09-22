import React from 'react';
import LinkButtonItem from './LinkButtonItem';
import linkData from '../Utils/link';

const LinkList = () => {
  const links = linkData();

  return (
    <div className="space-y-3 flex flex-col">
      {links.map((link, index) => (
        <LinkButtonItem
          key={index}
          title={link.title}
          url={link.url}
        />
      ))}
    </div>
  );
};

export default LinkList;