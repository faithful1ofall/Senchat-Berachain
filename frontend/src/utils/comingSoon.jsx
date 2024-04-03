import React from "react";

function comingSoon() {
  return (
    <div className="flex flex-col h-[100vh] justify-center items-center bg-slate-300">
      <div className="flex bg-white flex-col items-center justify-between p-5 rounded-lg shadow-xl mx-auto w-[87%] h-[23rem] md:w-[70%] md:h-[25rem]">
        <h1 className="text-2xl font-bold">This Page is Coming Soon!</h1>
        <p className="py-2 slate-100 text-base">Keep checking...</p>
      </div>
    </div>
  );
}

export default comingSoon;
