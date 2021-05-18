import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import { zoom, freecode, icon, udemy, certs, title } from '../styles/education.module.css';
import { FaFreeCodeCamp } from '@react-icons/all-files/fa/FaFreeCodeCamp';
import { SiUdemy } from '@react-icons/all-files/si/SiUdemy';

export default function Education({ data }) {
	const freeCodeLink = 'https://www.freecodecamp.org/tabele';
	return (
		<Layout>
			<div className={title}>
				<h1>Education Page</h1>
			</div>
			<div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo rerum mollitia labore, deleniti
					asperiores ab! Accusamus dolore at similique blanditiis mollitia dolores nostrum, voluptatum
					quaerat, aliquid, ullam placeat ipsum illum.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo rerum mollitia labore, deleniti
					asperiores ab! Accusamus dolore at similique blanditiis mollitia dolores nostrum, voluptatum
					quaerat, aliquid, ullam placeat ipsum illum.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo rerum mollitia labore, deleniti
					asperiores ab! Accusamus dolore at similique blanditiis mollitia dolores nostrum, voluptatum
					quaerat, aliquid, ullam placeat ipsum illum.
				</p>
			</div>
			<div className={freecode}>
				<a target="_blank" rel="noreferrer" href={freeCodeLink} className={freecode}>
					<FaFreeCodeCamp size="2em" className={icon} />
				</a>

				<h3>FreeCodeCamp</h3>
			</div>

			<div className={udemy}>
				<SiUdemy size="2em" />

				<h3>Udemy Certificates</h3>
			</div>

			<div className={certs}>
				<StaticImage
					src="../images/certs/cert-AngYu-1.jpg"
					className={zoom}
					layout="constrained"
					placeholder="blurred"
					alt="Angel Yu Cert"
				/>
				<StaticImage
					src="../images/certs/cert-ZTM-1.jpg"
					className={zoom}
					layout="constrained"
					placeholder="blurred"
					alt="ZTM Cert"
				/>
				<StaticImage
					src="../images/certs/cert-ColtSteeleWDB.jpg"
					className={zoom}
					layout="constrained"
					placeholder="blurred"
					alt="Colt Steele Cert"
				/>
			</div>
		</Layout>
	);
}
