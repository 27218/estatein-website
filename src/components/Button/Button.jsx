import './Button.scss'
import clsx from 'clsx'

import Icon from '../Icon'

export default ({
	className,
	type = 'button',
	href,
	target,

	label,
	icon,

	mode, // '' | 'transparent' | 'accent'
}) => {
	const isLink = href !== undefined
	const Component = isLink ? 'a' : 'button'

	const linkProps = { href, target }
	const buttonProps = { type }

	const props = isLink ? linkProps : buttonProps

	return (
		<Component
			className={clsx(className, 'button', mode && `button--${mode}`)}
			{...props}
			title={label}
			aria-label={label}
		>
			{icon && <Icon name={icon} />}
			<span className="button__label">{label}</span>
		</Component>
	)
}