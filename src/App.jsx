import Navbar from "./components/Navbar"
import React from "react"

function App() {

  return (
    <>
      <Navbar/>
      <div className="container mx-auto">
        <div className="text-center mx-36  my-5 p-5 bg-slate-400 rounded-xl">
          <h1>Your To do list</h1>
        </div>
      </div>
    </>
  )
}

export default App
