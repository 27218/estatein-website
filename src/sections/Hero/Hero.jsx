import './Hero.scss'
import { Image } from 'minista'

import Button from '@/components/Button'
import Metrics from '@/components/Metrics'
import Links from '@/components/Links'

export default () => {
	const titleId = 'hero-title'
	const linkTitle = 'Discover Your Dream Property'

	return (
		<section className="hero" aria-labelledby={titleId}>
			<div className="hero__main">
				<div className="hero__body">
					<div className="hero__info">
						<h1 className="hero__title" id={titleId}>Discover Your Dream Property with Estatein</h1>
						<p className="hero__description">Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
					</div>

					<div className="hero__actions">
						<Button href="/" label="Learn More" mode="transparent" />
						<Button href="/" label="Browse Properties" mode="accent" />
					</div>

					<Metrics items={[
						{ title: 'Happy Customers', description: '200+' },
						{ title: 'Properties For Clients', description: '10k+' },
						{ title: 'Years of Experience', description: '16+' },
					]} />
				</div>

				
				<div className="hero__image-wrapper">
					<Image className="hero__image" src="/src/assets/images/Hero/bg.jpg" />
					<a href="/" className='hero__link' aria-label={linkTitle} title={linkTitle}></a>
				</div>
			</div>

			<Links items={[
				{ label: 'Find Your Dream Home', iconId: 'home', href: '/' },
				{ label: 'Unlock Property Value', iconId: 'money', href: '/' },
				{ label: 'Effortless Property Management', iconId: 'buildings', href: '/' },
				{ label: 'Smart Investments, Informed Decisions', iconId: 'sun', href: '/' },
			]} />
		</section>
	)
}