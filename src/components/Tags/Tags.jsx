import Icon from '../Icon'
import './Tags.scss'

export default ({
	items,
}) => {
	return (
		<div className="tags">
			<ul className="tags__list">
				{items.map(({ icon, label }, i) => (
					<li className="tags__item" key={i}>
						<Icon name={icon} hasFill />
						<span>{label}</span>
					</li>
				))}
			</ul>
		</div>
	)
}