import React from 'react';
import CountDownBar from '../CountDownBar/CountDownBar';

const HomeBanner = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="w-full">
        <h1 className="animate__animated animate__backInDown text-4xl md:text-5xl font-bold text-blue-primary text-center lg:text-left">
          SINE
          <span className="text-green-primary">-</span>
          <span className="relative inline-block">
            EXERCISE
            <span className="animate__animated animate__backInDown animate__delay-1s absolute -bottom-2 left-0 w-full h-1 bg-green-primary"></span>
          </span>
        </h1>
        <p className="animate__animated animate__backInLeft lg:pr-20 mt-10 text-center lg:text-left text-gray-400 text-2xl">
          Here you can easily and happily review knowledge points and brush questions
        </p>
      </div>

      <div className="w-full flex flex-col justify-center items-center lg:items-start gap-4">
        {/*<LocationCard*/}
        {/*  title="Location" locationText={'Sleman,Yogyakarta'}*/}
        {/*  icon={<BarChartOutlined className="text-xl text-green-primary" />}*/}
        {/*/>*/}
        <div className="animate__animated animate__backInUp">
            <CountDownBar />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
