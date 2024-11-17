import React from 'react';
import HomeSelectCard from '../HomeSelectCard/HomeSelectCard';
import HomeBanner from '../Homebanner/HomeBanner';
import SineCard from "../SineCard/SineCard";

const SelectCard = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center lg:p-16 p-10">
            <div className="grid lg:grid-cols-2 gap-10 items-center lg:px-16">
                <HomeBanner/>
                <HomeSelectCard/>
            </div>
            {/*<footer className="w-full flex gap-2 lg:gap-10 flex-col lg:flex-row justify-between items-center mt-20 lg:mt-40 lg:px-10">*/}
            {/*    <SineCard className="animate__animated animate__backInDown animation-delay-1000" title="Speech Understanding"/>*/}
            {/*    <SineCard className="animate__animated animate__backInDown animation-delay-1200" title="Judgment Reasoning"/>*/}
            {/*    <SineCard className="animate__animated animate__backInDown animation-delay-1400" title="Information Analysis"/>*/}
            {/*    <SineCard className="animate__animated animate__backInDown animation-delay-1600" title="Quantitative Relation"/>*/}
            {/*    <SineCard className="animate__animated animate__backInDown animation-delay-1800" title="Expository Essay"/>*/}
            {/*</footer>*/}
        </div>
    );
};

export default SelectCard;
