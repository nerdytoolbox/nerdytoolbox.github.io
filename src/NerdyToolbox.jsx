import React from 'react'
import './NerdyToolbox.scss'
import { Hub, CookieModal, useAnalyticsConsent } from 'nerdy-lib'
import AppCard from "./components/AppCard/AppCard.jsx";
import { BOARDGAME, OTHER, VIDEOGAME } from "./util/constants.js";

const NerdyToolbox = () => {
	useAnalyticsConsent()

  const getFooter = () => {
    return (
      <a href="https://github.com/nerdytoolbox/nerdytoolbox.github.io/issues/new?template=ISSUE_TEMPLATE.md">Report issues / Request a new feature or app</a>
    )
  }

  return (
    <Hub footer={getFooter()}>
      <div className="align-horizontal card-container">
        <AppCard title="Boardgames - What to play next?" thumbnail="bggThumbnail.png" link="/bg-play-next" type={BOARDGAME} />
        <AppCard title="Arcs - Lars bots" thumbnail="arcsThumbnail.png" link="/arcs-lars" type={BOARDGAME} />
        <AppCard title="Witch of Fern Island Resource Map" thumbnail="witchOfFernIslandThumbnail.png" link="/witch-of-fern-island-map" type={VIDEOGAME} />
        <AppCard title="Nibble" thumbnail="nibbleThumbnail.png" link="/nibble" type={OTHER} />
      </div>
			<CookieModal />
    </Hub>
  )
}

export default NerdyToolbox
