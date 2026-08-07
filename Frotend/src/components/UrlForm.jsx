import React from 'react';
import { useShortUrl } from '../Hooks/useShortUrl';
import { useState } from 'react';
export default function UrlForm() {
  const {error , createUrl } = useShortUrl()
  const [inputValue, setInputValue] = useState('');
  const handleChange = async ()=>{
    if(!inputValue.trim()) return 
    try{
      await createUrl({"original_url": inputValue})
      setInputValue('')
    }catch(error){
      console.log("The error is",error)
    }


  }

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 px-4 py-8 flex flex-col items-center">
      
      {/* Main Headline styled like the reference hero text */}
      <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight text-center mb-8">
        Create Your{' '}
        <span className="relative inline-block px-3 py-1 text-purple-950 font-black">
          {/* Highlight box behind 'Magic' inspired by 'Short Link' in screenshot */}
          <span className="absolute inset-0 bg-purple-200/80 -rotate-1 rounded-md -z-10"></span>
          Magic
        </span>
        {error && <p className="text-red-500 text-sm font-medium mb-4">{error}</p>}
      </h1>

      {/* Outer rounded container with soft purple backdrop */}
      <div className="w-full bg-purple-100/60 border border-purple-200/50 p-3 sm:p-4 rounded-3xl shadow-sm backdrop-blur-sm">
        
        {/* Inner input & button wrapper */}
        <div className="flex items-center gap-2 bg-white rounded-2xl border border-purple-100 p-2 shadow-sm focus-within:ring-2 focus-within:ring-purple-400 focus-within:border-transparent transition-all">
          
          {/* Link / Search Icon */}
          <div className="pl-3 text-purple-400 flex items-center justify-center">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
          </div>

          {/* Text Input */}
          <input
            value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)}
            placeholder="Paste your URL link ...."
            type="text"
            className="w-full bg-transparent px-2 py-3 text-sm sm:text-base text-gray-800 placeholder-purple-300 focus:outline-none font-medium"
          />

          {/* Action Button */}
          <div>
            <button 
            onClick={handleChange}
            className="bg-purple-900 hover:bg-purple-950 text-white font-semibold text-sm px-7 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center gap-2 whitespace-nowrap cursor-pointer">
              <span>Create</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}