import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Navbar.module.css'

function Navbar() {
	const [open, setOpen] = useState(false)

	return (
		<div className={styles.container}>
			<Link href='/'>AVOCADO</Link>
			<ul className={styles.list}>
				<div className={styles.listItem}>
					<Link href='/products/design'>DESIGN</Link>
				</div>
				<div className={styles.listItem}>
					<Link href='/products/development'>DEVELOPMENT</Link>
				</div>
				<div className={styles.listItem}>
					<Link href='/products/production'>PRODUCTION</Link>
				</div>
				<div className={styles.listItem}>
					<Link href='/products/photography'>PHOTOGRAPHY</Link>
				</div>
				<div className={styles.listItem}>
					<Link href='/contact'>CONTACT</Link>
				</div>
			</ul>
			<div className={styles.hamburger} onClick={() => setOpen(!open)}>
				<div className={styles.line}></div>
				<div className={styles.line}></div>
				<div className={styles.line}></div>
			</div>
			<ul
				onClick={() => setOpen(false)}
				className={styles.menu}
				style={{ right: open ? '0px' : '-50vw' }}
			>
				<div className={styles.menuItem}>
					<div className={styles.menuItem}>
						<Link href='/products/design'>DESIGN</Link>
					</div>
					<div className={styles.menuItem}>
						<Link href='/products/development'>DEVELOPMENT</Link>
					</div>
					<div className={styles.menuItem}>
						<Link href='/products/production'>PRODUCTION</Link>
					</div>
					<div className={styles.menuItem}>
						<Link href='/products/photography'>PHOTOGRAPHY</Link>
					</div>
					<div className={styles.menuItem}>
						<Link href='/contact'>CONTACT</Link>
					</div>
				</div>
			</ul>
		</div>
	)
}

export default Navbar
