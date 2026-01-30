import './Links.scss'
import Icon from '../Icon'

export default ({
	items = [],
}) => {
	return (
		<div className="links">
			<ul className="links__list">
				{items.map(({ label, iconId, href }, i) => (
					<li className="links__item" key={i}>
						<a href={href} className="links__link" title={label} aria-label={label}>
							<Icon className="links__image" name={iconId} />
							<span className="links__label">{label}</span>
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}