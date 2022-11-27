import Image from 'next/legacy/image'
import Link from 'next/link'
import styles from '../styles/Footer.module.css'

const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.cardL}>
				<h1 className={styles.title}>AVOCADO CREATIVE.</h1>
				<h1 className={styles.linkTitle}>
					<Link href='/contact' passHref>
						<span className={styles.linkText}>WORK WITH US</span>
						<Image src='/img/link.png' width={40} height={40} alt='' />
					</Link>
				</h1>
			</div>
			<div className={styles.cardS}>
				<div className={styles.cardItem}>
					12 ADAM STREET NY <br /> USA
				</div>
				<div className={styles.cardItem}>
					CONTACT@THACH.DEV <br /> 213 1243 12312
				</div>
			</div>
			<div className={styles.cardS}>
				<div className={styles.cardItem}>
					FOLLOW US: <br /> __FB__IN__BE__TW
				</div>
				<div className={styles.cardItem}>
					© 2022 LAMA INTERACTIVE,
					<br /> ALL RIGHTS RESERVED
				</div>
			</div>
		</div>
	)
}

export default Footer
