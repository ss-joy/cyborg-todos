import React from "react";

function MainHeader() {
  return (
    <header className="shadow-lg shadow-slate-200 flex items-center justify-between py-8 px-16">
      <div>
        <h1 className="text-emerald-500 font-bold text-4xl mb-2">
          Cyborg Checklist
        </h1>
        <p className="text-slate-500">Your A.I powered task handler</p>
      </div>
      <div>
        <p className="text-slate-600 font-bold">Powered by:</p>
        <p className="font-semibold animate-pulse">
          <span className="text-pink-400">re:</span>
          <span className="text-emerald-400">tune</span>
        </p>
      </div>
    </header>
  );
}

export default MainHeader;
