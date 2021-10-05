import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import { zoom, freecode, icon, udemy, certs, title } from '../styles/education.module.css';
import { educationPointer } from '../styles/pointer.module.css';
import Pointer from '../components/Pointer';
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
					Studied WGD(Web Graphic Design) at Devry University 2010-2012. I've since learned{' '}
					<strong>1000%</strong> times more on freeCodeCamp,YouTube and Udemy.
				</p>
				<p>
					Towards the end of 2019 I switched from studying my CCNA and began delving into Web Development(my
					original dream almost 10 years later). It wasn't easy re-learning the basics, while also still doing
					my network job, and helping the company start up a exercise equipment franchise.(not fun learning
					those many skills simultaneously ) Luckily when the pandemic happened I had a chance to study full
					time until January of 2021.
				</p>
				<p>Been a self taught developer since April 2020. </p>
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
				<h4>WebDev</h4>
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
			<div className={udemy}>
				<SiUdemy size="2em" />

				<h3>Udemy Certificates</h3>
				<h4>Network/Cloud</h4>
			</div>
			<div className={certs}>
				<StaticImage
					src="../images/certs/cert-MM-Network+.jpg"
					className={zoom}
					layout="constrained"
					placeholder="blurred"
					alt="Mike Meyers Cert"
				/>
			</div>
			<div className={educationPointer}>
				<Pointer />
			</div>
		</Layout>
	);
}
