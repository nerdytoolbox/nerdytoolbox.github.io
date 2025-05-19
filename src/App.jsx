import React from 'react'
import { Button } from "nerdy-lib";

const App = () => {
  return (
    <div className="main-app">
      <span>This page is a work in progress.</span>
      <Button onClick={() => window.location.href="/arcs-lars"}>Go to Arcs - Lars Bots</Button>
    </div>
  )
}

export default App
