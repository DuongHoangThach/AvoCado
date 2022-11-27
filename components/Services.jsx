import Image from 'next/legacy/image'
import Link from 'next/link'
import styles from '../styles/Service.module.css'

const Service = ({ services }) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>What We Can Do?</h1>
			<h1 className={styles.subtitle}>Service we can help you with</h1>
			<div className={styles.services}>
				{services.map((service) => (
					<Link passHref key={service.id} href={`/products/${service.name}`}>
						<div className={styles.service}>
							<div className={styles.desc}>{service.desc}</div>
							<span className={styles.cat}>{service.title}</span>
							<div className={styles.media}>
								{service.video ? (
									<video
										src={`/img/${service.video}`}
										autoPlay
										muted
										loop
										className={styles.video}
									></video>
								) : (
									<Image
										src={`/img/${service.photo}`}
										width={100}
										height={100}
										layout='responsive'
										objectFit='cover'
										alt=''
									/>
								)}
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default Service
