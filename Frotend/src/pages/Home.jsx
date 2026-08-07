import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import UrlForm from '../components/UrlForm'
import UrlCard from '../components/UrlCard'
import { ShortProvider } from '../Hooks/useShortUrl';

export default function Home() {

  return (
    <div>
       
      <ShortProvider>
        <UrlForm/>
        <UrlCard/> 
      </ShortProvider>
        
        <Footer/>
    </div>
  )
}
