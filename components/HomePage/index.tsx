import React from 'react';
import HomeSelectCard from '../HomeSelectCard/HomeSelectCard';
import HomeBanner from '../Homebanner/HomeBanner';

const SelectCard = () => {
    return (
        <div className="w-full flex items-center justify-center lg:p-16 p-10">
            <div className="grid lg:grid-cols-2 gap-10 items-center lg:px-16">
                <HomeBanner/>
                <HomeSelectCard/>
            </div>
        </div>
    );
};

export default SelectCard;
