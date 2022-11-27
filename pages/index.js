import Head from 'next/head'
import Intro from '../components/Intro'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import { data } from '../data'

export default function Home({ services }) {
	console.table('services', services)
	return (
		<div>
			<Head>
				<title>Thach Dev</title>
				<meta name='description' content='The best site pages' />
			</Head>
			<Intro />
			<Services services={services} />
			<Testimonials />
		</div>
	)
}

export const getStaticProps = async () => {
	const services = data
	return {
		props: { services },
	}
}
