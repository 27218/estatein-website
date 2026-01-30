import './ReadMore.scss'

export default ({
	text,
	lines,
}) => {
	return (
		<div className="read-more" data-js-read-more="" style={{
			'--_lines': lines,
		}}>
			<p className="read-more__text" data-js-read-more-text="">{text}</p>
			<button className="read-more__button" type="button" data-js-read-more-button="">Read More</button>
		</div>
	)
}