import React from 'react';

function HomeCard() {
  return (
    <div className="home0card-container h-40 w-60 bg-red-300">
      <div className="top-container flex justify-center w-60">
        <div className="startcourse-container  text-3xl font-bold ">
          Data Mining{' '}
        </div>
      </div>
      <div className="bottom-container flex justify-center items-center">
        <div className="startcourse-container bg-blue-600  py-1 text-white px-2">
          Start-course
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
