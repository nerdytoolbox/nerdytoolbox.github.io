import './AppCard.scss'
import { FaDice } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";


const AppCard = ({
	title,
  thumbnail,
	link,
	type
}) => {
	return (
		<div className="app-card-container">
			<div className="card"  onClick={() => window.location.href=link}>
				<img className="thumbnail" src={thumbnail} alt="Arcs thumbnail"/>
				<div className="icon">
					{type === 'boardgame' && <FaDice size={20} className="icon-img" />}
					{type === 'videogame' && <IoGameController size={20} className="icon-img" />}
				</div>
			</div>
			<div className="title">{title}</div>
		</div>
	)
}

export default AppCard