// import { useState } from 'react'
// import './App.css'
import Ayang from './assets/Ayang.jpg'

function App() {
  const dataInformation = [
    {
      index: "1",
      text: 'My LinkedIn 🌏',
      link: 'https://www.linkedin.com/in/dini-irma-659035176/',
      color: 'bg-red-300'
    },
    {
      index: "1a",
      text: 'My Facebook 💥',
      link: 'https://www.facebook.com/diniirmaa',
      color: 'bg-sky-300'
    }
  ]


  return (
    <>
      <div className='w-full h-screen bg-sun-flower flex justify-center items-center'>
        {/* Background */}
        <div className='max-w-2xl mx-auto flex flex-col gap-5'>
          <div className="h-48 w-40 mx-auto -my-9">
            <div className="aspect-h-1 aspect-w-1">
              <img
                src={Ayang}
                className="aspect-square rounded-full object-cover object-center overflow-hidden"
              />
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-extrabold pt-5 font-robot">Dini Irmawati</h1>
            <p className="text-lg mt-3 -mb-6 font-robot text-black-800 ">Lorem Ipsum Dolor Si Amet</p>
          </div>
          {/* List of dataInformation */}
          <div>
            {dataInformation.map(({ text, link, color }, index) => {
              return (
                <a href={link} key={index} target="_blank" rel="noreferrer">
                  <div className={`w-80 sm:w-96 mx-auto my-7 py-3 ${color} text-center text-xl font-bold font-robot border-2 border-black shadow-custom hover:shadow-none transition-all hover:translate-x-1 hover:translate-y-1`} >
                    {text}
                  </div>
                </a>
              );
            })}
          </div>
        <footer className='text-center justify-center font-normal font-robot flex flex-none'>
          <div className='mx-2 text-yellow-200'> @Dini Irmawati Apps</div> 
        </footer>
        </div>
      </div>
    </>
  )
}

export default App
