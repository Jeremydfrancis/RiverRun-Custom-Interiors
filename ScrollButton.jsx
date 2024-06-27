import React from 'react';

const ScrollButton = () => {
  const scrollToNextDiv = () => {
    const nextDiv = document.getElementById('nextDiv');
    nextDiv.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <img src="/mouse-cursor.png" alt="Scroll Down" className="  relative   top-[3rem]
      rounded-3xl max-w-42 self-auto hover:bg-backgroundSecondary   px-3 items-center py-2  cursor-pointer" onClick={scrollToNextDiv} />
     
    
  );
};

export default ScrollButton;