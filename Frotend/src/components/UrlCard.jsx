import React from 'react';

export default function UrlCard() {
  return (
    <div className="w-full max-w-3xl mx-auto mt-4 px-4">
      {/* Main Card Container */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white border border-purple-100/80 p-3 rounded-[1.5rem] shadow-sm hover:shadow-md transition-shadow">
        
        {/* Input & Copy Button Wrapper */}
        <div className="flex w-full items-center justify-between bg-purple-50/50 rounded-xl border border-purple-100/50 p-1.5 flex-1 focus-within:ring-2 focus-within:ring-purple-400/30 transition-all">
          
          {/* ReadOnly Input */}
          <input 
            readOnly
            type="text"
            defaultValue="https://campusvault.com/res/math101" // Example placeholder
            className="w-full bg-transparent px-3 py-1 text-sm sm:text-base text-purple-900 font-medium focus:outline-none cursor-default truncate"
          />
          
          {/* Copy Button */}
          <button className="bg-white hover:bg-purple-100 text-purple-700 border border-purple-200/60 font-semibold text-xs px-4 py-2.5 rounded-lg transition-all shadow-sm active:scale-95 whitespace-nowrap cursor-pointer">
            Copy
          </button>
          
        </div>

        {/* BarCode / Statistics Block */}
        <div className="flex items-center justify-center gap-2 text-purple-600 bg-purple-50 hover:bg-purple-100 px-5 py-2.5 rounded-xl cursor-pointer transition-colors border border-purple-100/50 shadow-inner">
          {/* Subtle QR/Barcode Icon */}
          <svg className="w-5 h-5 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 3h6m-3-3v6" />
          </svg>
          <span className="text-sm font-bold tracking-wide">
            BarCode
          </span>
        </div>

      </div>
    </div>
  );
}