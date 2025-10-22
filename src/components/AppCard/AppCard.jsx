import './AppCard.scss'
import { FaDice } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { BOARDGAME, VIDEOGAME } from "../../util/constants.js";

const AppCard = ({
	title,
  thumbnail,
	link,
	type
}) => {

	const handleClick = (event, link) => {
		if (
			event.ctrlKey ||    // Windows/Linux Ctrl
			event.metaKey ||    // macOS Command
			event.shiftKey ||   // Shift (for new window/tab in some browsers)
			event.button === 1  // Middle click
		) {
			window.open(link, '_blank');
		} else {
			window.location.href = link;
		}
	}

	return (
		<div className="app-card-container">
			<div className="card"  onClick={(e) => handleClick(e, link)}>
				<img className="thumbnail" src={thumbnail} alt="Arcs thumbnail"/>
				<div className="icon">
					{type === BOARDGAME && <FaDice size={20} className="icon-img" />}
					{type === VIDEOGAME && <IoGameController size={20} className="icon-img" />}
				</div>
			</div>
			<div className="title">{title}</div>
		</div>
	)
}

export default AppCard