import React, { useEffect, useState } from 'react'
import { useShortUrl } from '../Hooks/useShortUrl'


export default function viewAllCards() {
  const {url,getTheUrl,loading,error} = useShortUrl()
 
  useEffect(()=>{
    getTheUrl()
  },[])

  if (loading) return <p>Loading your shortened URLs...</p>;
  if (error) return <p>Something went wrong loading dashboard data.</p>;
  const urlList = Array.isArray(url) ? url : []
  if(urlList.length === 0){
    return(
      <div className="w-full max-w-3xl mx-auto mt-8 px-4">
        <div className="bg-purple-50/50 border border-dashed border-purple-200 text-purple-600 p-8 rounded-3xl text-center">
          <p className="font-semibold text-lg">No short URLs generated yet.</p>
          <p className="text-sm text-purple-400 mt-1">Create your first shortened link on the home page!</p>
        </div>
      </div>
    )
  }
  return (
    <div className="w-full max-w-3xl mx-auto mt-8 px-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-purple-950">Your Dashboard</h2>
        <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full">
          {urlList.length} Total Links
        </span>
      </div>
      
      <div className="flex flex-col gap-4">
        {urlList.map((service)=>(
          <div key={service.id} className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-white border border-purple-100/80 p-4 rounded-3xl shadow-sm hover:shadow-md transition-all duration-200">
              <div className="flex-1 min-w-0 w-full">
                <div className="text-base font-semibold text-purple-900 truncate">
                  {service.short_url}
                </div>
                <div className="text-sm text-purple-400 font-medium truncate mt-0.5">
                  Original: <span className="hover:text-purple-600 transition-colors">{service.original_url}</span>
                </div>
              </div>
              <div className="flex items-center justify-between md:justify-end gap-3 w-full md:w-auto border-t md:border-t-0 pt-3 md:pt-0 border-purple-50">
                <span className="text-xs font-medium text-purple-400 bg-purple-50/50 px-3 py-1.5 rounded-xl border border-purple-100/30">
                  {service.created_at ? new Date(service.created_at).toLocaleDateString() : 'Recent'}
                </span>
                <div className="flex items-center gap-1.5 text-purple-600 bg-purple-50 hover:bg-purple-100 px-4 py-2 rounded-xl cursor-pointer transition-colors border border-purple-100/50 shadow-inner">
                  <svg className="w-4 h-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2" />
                  </svg>
                  <span className="text-xs font-bold tracking-wide">Stats</span>
                </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}
