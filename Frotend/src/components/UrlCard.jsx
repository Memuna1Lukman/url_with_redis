import React, { useState } from 'react';
import { useShortUrl } from '../Hooks/useShortUrl';

export default function UrlCard() {
  const {url, loading } = useShortUrl()
  const [copied,setCopied] = useState(false)
  // The API returns one object for POST and an array for GET. Display the
  // newest item in either shape instead of treating the array as a URL.
  const currentUrl = Array.isArray(url) ? url[url.length -1] : url
  const shortUrlString = typeof currentUrl === 'object' && currentUrl != null
    ? currentUrl.short_url
    : currentUrl

  const handleCopy = async () => {
    if (!shortUrlString) return;
    await navigator.clipboard.writeText(shortUrlString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };  
  if (!shortUrlString &&!loading)  return null
  return (
    <div className="w-full max-w-3xl mx-auto mt-4 px-4">
      {/* Main Card Container */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white border border-purple-100/80 p-3 rounded-3xl  shadow-sm hover:shadow-md transition-shadow">
        
        {/* Input & Copy Button Wrapper */}
        <div className="flex w-full items-center justify-between bg-purple-50/50 rounded-xl border border-purple-100/50 p-1.5 flex-1 focus-within:ring-2 focus-within:ring-purple-400/30 transition-all">
          
          {/* ReadOnly Input */}
          <input 
            value={shortUrlString}
            defaultValue="https://campusvault.com/res/math101"
            readOnly
            type="text"
            className="w-full bg-transparent px-3 py-1 text-sm sm:text-base text-purple-900 font-medium focus:outline-none cursor-default truncate"
          />
          
          {/* Copy Button */}
          <button 
          onClick={handleCopy}
          className="bg-white hover:bg-purple-100 text-purple-700 border border-purple-200/60 font-semibold text-xs px-4 py-2.5 rounded-lg transition-all shadow-sm active:scale-95 whitespace-nowrap cursor-pointer">
            {copied ? "copied":"copy"}
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
