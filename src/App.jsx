import React from 'react'
import { Button } from "nerdy-lib";
import './App.css'

const App = () => {
  return (
    <div className="main-app">
      <span>This page is a work in progress.</span>
      <Button onClick={() => window.location.href="/arcs-lars"}>Go to Arcs - Lars Bots</Button>
      <Button onClick={() => window.location.href="/witch-of-fern-island-map"}>Go to Witch of Fern Island - Resource Map</Button>
    </div>
  )
}

export default App
