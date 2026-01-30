import Hero from "@/sections/Hero"
import Properties from "@/sections/Properties"
import Reviews from "@/sections/Reviews"
import FAQ from "@/sections/FAQ"

export const metadata = {
	title: 'Home',
}

export default () => (
	<>
		<Hero />
		<Properties />
		<Reviews />
		<FAQ />
	</>
)