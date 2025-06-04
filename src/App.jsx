import React from 'react'
import './App.css'
import { Hub } from "nerdy-lib";
import { arcsThumbnail, witchOfFernIslandThumbnail, bggThumbnail } from 'nerdy-lib'
import AppCard from "./components/AppCard.jsx";
import { BOARDGAME, VIDEOGAME } from "./util/constants.js";

const App = () => {
  const getFooter = () => {
    return (
      <div className="footer">
        <a href="https://github.com/nerdytoolbox/nerdytoolbox.github.io/issues/new?template=ISSUE_TEMPLATE.md">Report issues / Request a new feature or app</a>
      </div>
    )
  }

  return (
    <Hub title="Nerdy Toolbox" footer={getFooter()}>
      <div className="align-horizontal wrap">
        <AppCard title="Boardgames - What to play next?" thumbnail={bggThumbnail} link="/bg-play-next" type={BOARDGAME} />
        <AppCard title="Arcs - Lars bots" thumbnail={arcsThumbnail} link="/arcs-lars" type={BOARDGAME} />
        <AppCard title="Witch of Fern Island Resource Map" thumbnail={witchOfFernIslandThumbnail} link="/witch-of-fern-island-map" type={VIDEOGAME} />
      </div>
    </Hub>
  )
}

export default App
