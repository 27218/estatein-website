import './Author.scss'

import { Image } from 'minista'

export default ({
	name,
	location,
	imgSrc,
}) => {
	return (
		// Or you could use figure + figcaption
		<div className="author">
			<Image className="author__image" src={imgSrc} />
			<p className="author__name h4">{name}</p>
			<p className="author__location">{location}</p>
		</div>
	)
}