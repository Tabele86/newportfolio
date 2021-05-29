import { Link, graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import { top, header, btn, section, skills, future } from '../styles/home.module.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import resume from '../resume/AnthonyResume.pdf';
import NewSkills from '../components/NewSkills';

export default function Home({ data }) {
	const image = getImage(data.file.childImageSharp.gatsbyImageData);
	return (
		<Layout>
			<section className={section}>
				<div className={top}>
					<div className={header}>
						<h2>Design</h2>
						<h3>Develop & Deploy</h3>
						<p> Jr. Software/Web Developer based in Nashville, TN</p>
					</div>
					{/* Buttons */}
					<div>
						<div>
							<Link className={btn} to="/projects">
								My Portfolio Projects
							</Link>
						</div>
						<div>
							<a href={resume} className={btn} download>
								Download Resume
							</a>
						</div>
					</div>
					<div>
						<p className={future}>Future skills I'd like to learn:</p>
						<div className={skills}>
							<NewSkills />
						</div>
					</div>
				</div>
				<div>
					<GatsbyImage image={image} quality="100" alt="banner" />
				</div>
			</section>
		</Layout>
	);
}

export const query = graphql`
	query Banner {
		file(relativePath: { eq: "banner.jpeg" }) {
			childImageSharp {
				gatsbyImageData(layout: CONSTRAINED)
			}
		}
	}
`;
