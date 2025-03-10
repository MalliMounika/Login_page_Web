import React from "react"
import { SlSocialSpotify } from "react-icons/sl";
import axios from "axios"
import  { useState } from "react";




function App(){

  const [URL, setURL] = useState("") 

  const handleURL =(e) => {
    e.preventDefault()
    setURL(e.target.value)
  }
  console.log(URL)

 const downloadSong = async () => {

  const options = {
    method: 'GET',
    url: 'https://spotify-downloader9.p.rapidapi.com/downloadSong',
    params: {
      songId: '${URL}'
    },
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_API_KEY,
      'x-rapidapi-host': 'spotify-downloader9.p.rapidapi.com'
    }
  };


  try{
    const rspn = await axios.request(options)
    console.log(rspn.data.data)
  }
  catch(error){
    console.log(error)
  }

 }
 downloadSong() 





return(
    <div
      className="h-screen w-screen bg-gradient-to-b from-indigo-300 via-blue-300 to-fuchsia-400 flex items-center justify-center flex-col gap-y-5">
    
    <div className="flex items-center justify-center gap-x-2 text-xl font-bold">
    <SlSocialSpotify size={50}/>
    <p>Song Downloader</p> 
    </div>
    <div className="flex gap-x-2">
      <input type="url"  className="h-10 w-[450px] border-none outline-none px-5 rounded-lg bg-white" 
      onChange={handleURL}/>


      <button className="h-10 px-2 rounded-lg bg-white font-bold hover:bg-black hover:text-white">Download</button>
    </div> 
    </div>
  )
}
export default App 
