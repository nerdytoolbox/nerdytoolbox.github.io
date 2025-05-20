import React from 'react'
import { Button } from "nerdy-lib";
import './App.css'

const App = () => {
  return (
    <div className="main-app">
      <h1>Nerdy Toolbox</h1>
      <span>This page is a work in progress.</span>
      <Button onClick={() => window.location.href="/bg-play-next"}>Go to Boardgames: Play Next</Button>
      <Button onClick={() => window.location.href="/arcs-lars"}>Go to Arcs - Lars Bots</Button>
      <Button onClick={() => window.location.href="/witch-of-fern-island-map"}>Go to Witch of Fern Island - Resource Map</Button>
    </div>
  )
}

export default App
