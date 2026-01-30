import './Section.scss'
import clsx from 'clsx'

export default ({
	title,
	titleId,
	description,

	className,
	children,
	actions,

	isHorizontal,

	// 'About Us' page
	TitleTag = 'h2',
	isActionsVisible,
	isEven,
	isSwap,

	// 'Details' page
	isAlignTop,
}) => {
	return (
		<section
			className={clsx(className, 'section container', {
				'section--horizontal': isHorizontal,
				'section--even': isEven,
				'section--align-top': isAlignTop,
				'section--swap': isSwap,
			})}
			aria-labelledby={titleId}
		>
			<header className="section__header">
				<div className="section__info">
					<TitleTag className='section__title h2' id={titleId}>{title}</TitleTag>
					<p className="section__description">{description}</p>
				</div>

				{actions && <div className={clsx("section__actions", {
					'hidden-mobile': !isActionsVisible,
				})}>{actions}</div>}
			</header>
			
			<div className="section__body">
				{children}
			</div>
		</section>
	)
}