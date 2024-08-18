'use client'

import axios from "axios";
import { useState } from "react";

export default function Home() {

  const[ videoLink, setVideoLink] = useState("");

  const [finalLink, setFinalLink] = useState()

  const [showDownload, setShowDownload] = useState(false)


  const handleDownload = async ()=>{
    try{
      const res = await axios.get(`/api/downloader?url=${videoLink}`)
      setFinalLink(res.data.format.url)
      setShowDownload(true)
    }catch(err){
      console.error(err)
    }
  }

  return (
    <main className="bg-secondary">
      {/* ------------ navbar-------------- */}
      <header className="">
      <div className="container mx-auto navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl text-white">MistyUi</a>
  </div>
  <div className="navbar-center hidden lg:flex text-white">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end ">
    <a className="btn text-white">Button</a>
  </div>
</div>
      </header>
      {/* ----------------body---------------- */}
      <section className="">
        <div className="flex bg-indigo-600 text-white flex-col items-center justify-center min-h-[450px]">
          <h1>Youtube Video downloader</h1>
          <div className="w-full p-4 flex justify-center">
            <input 
            type="text" 
            value={videoLink} 
            onChange={(e)=> setVideoLink(e.target.value)}
            className="p-3 w-[60%] mr-2 bg-transparent border rounded-lg outline-none text-black" 
            placeholder="Video Link" />
            <button onClick={handleDownload} className="border rounded-lg p-1 font-semibold px-5">Convert</button>

           
          </div>
        </div>
        {
              showDownload && (
                <div className="mt-4">
                  <video src={finalLink} controls></video>
                </div>
              )
            }
      </section>
    </main>
  );
}

// https://www.youtube.com/live/Lq9ZMwqqr9U?si=1oYfT-bWqbg0pNeR
