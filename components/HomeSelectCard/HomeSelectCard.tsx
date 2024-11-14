import React from 'react';
import {normalizeImagePath} from "rspress/runtime";

const HomeSelectCard = () => {
  return (
    // <div className="bg-blue-primary rounded-tl-2xl rounded-tb-2xl">
    <div className="">
      <img className="animate__animated animate__backInRight" src={normalizeImagePath('/test-icon.png')} alt="test-icon" />
    </div>
  );
};

export default HomeSelectCard;
