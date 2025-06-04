import React from 'react'
import './App.css'
import { Hub } from "nerdy-lib";
import { arcsThumbnail, witchOfFernIslandThumbnail, bggThumbnail } from 'nerdy-lib'
import AppCard from "./components/AppCard.jsx";

const App = () => {
  return (
    <Hub title="Nerdy Toolbox">
      <div className="align-horizontal wrap">
        <AppCard title="Boardgames - What to play next?" thumbnail={bggThumbnail} link="/play-next" type="boardgame" />
        <AppCard title="Arcs - Lars bots" thumbnail={arcsThumbnail} link="/arcs-lars" type="boardgame" />
        <AppCard title="Witch of Fern Island Resource Map" thumbnail={witchOfFernIslandThumbnail} link="/witch-of-fern-island-map" type="videogame" />
      </div>
    </Hub>
  )
}

export default App
