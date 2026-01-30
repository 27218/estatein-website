import './FAQ.scss'

import Section from '@/components/Section'
import Button from '@/components/Button'
import Slider from '@/components/Slider'
import FAQCard from '@/components/FAQCard'

export default () => {
	let items = [
		{
			title: 'How do I search for properties on Estatein?',
			description: 'Learn how to use our user-friendly search tools to find properties that match your criteria.',
			href: '/',
		},
		{
			title: 'What documents do I need to sell my property through Estatein?',
			description: 'Find out about the necessary documentation for listing your property with us.',
			href: '/',
		},
		{
			title: 'How can I contact an Estatein agent?',
			description: 'Discover the different ways you can get in touch with our experienced agents.',
			href: '/',
		},
	]

	items = [...items, ...items, ...items]

	const actions = <Button label="View All FAQ’s" href="/" />

	return (
		<Section
			title="Frequently Asked Questions"
			titleId="faq-title"
			description="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
			actions={actions}
		>
			<Slider actions={actions}>
				{items.map((item, i) => (
					<FAQCard {...item} />
				))}
			</Slider>
		</Section>
	)
}