import React from 'react';

const Icon = () => ({ className, fillColor, path }) => {
    return(
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill={fillColor} d={path} />
    </svg>
  )
};

export default Icon;
