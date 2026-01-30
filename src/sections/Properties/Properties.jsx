import './Properties.scss'

import Section from '@/components/Section'
import Slider from '@/components/Slider'
import Button from '@/components/Button'
import HotelCard from '@/components/HotelCard'

export default () => {
	let hotelItems = [
		{
			imgSrc: '/src/assets/images/HotelCard/1.jpg',
			title: 'Seaside Serenity Villa',
			description: 'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi dignissimos exercitationem praesentium itaque accusantium omnis nesciunt, vel provident quos id magnam quam delectus amet facere sapiente, quaerat libero. Quas, pariatur?',
			tags: [
				{ icon: 'bedroom', label: '4-Bedroom' },
				{ icon: 'bathroom', label: '3-Bathroom' },
				{ icon: 'villa', label: 'Villa' },
			],
			price: '$550,000',
		},
		{
			imgSrc: '/src/assets/images/HotelCard/2.jpg',
			title: 'Metropolitan Haven',
			description: 'A chic and fully-furnished 2-bedroom apartment with panoramic city views. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi at, provident reprehenderit velit esse quaerat incidunt quia omnis quos cum praesentium hic libero sit optio consectetur enim neque eveniet quis?',
			tags: [
				{ icon: 'bedroom', label: '4-Bedroom' },
				{ icon: 'bathroom', label: '3-Bathroom' },
				{ icon: 'villa', label: 'Villa' },
			],
			price: '$550,000',
		},
		{
			imgSrc: '/src/assets/images/HotelCard/3.jpg',
			title: 'Rustic Retreat Cottage',
			description: 'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
			tags: [
				{ icon: 'bedroom', label: '4-Bedroom' },
				{ icon: 'bathroom', label: '3-Bathroom' },
				{ icon: 'villa', label: 'Villa' },
			],
			price: '$550,000',
		},
	]

	hotelItems = [...hotelItems, ...hotelItems, ...hotelItems]

	const actions = <Button label="View All Properties" />

	return (
		<Section
			title="Featured Properties"
			titleId="properties-title"
			description='Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.'
			actions={actions}
		>
			<Slider actions={actions}>
				{hotelItems.map((item, i) => (
					<HotelCard {...item} key={i} />
				))}
			</Slider>
		</Section>
	)
}