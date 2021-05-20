import { Link, graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import { header, btn, skills, margin } from '../styles/home.module.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import resume from '../resume/AnthonyResume.pdf';
import NewSkills from '../components/NewSkills';

export default function Home({ data }) {
	// console.log(data);
	// const { title, description } = data.site.siteMetadata;
	const image = getImage(data.file.childImageSharp.gatsbyImageData);
	return (
		<Layout>
			<section className={header}>
				<div>
					<div>
						<h2>Design</h2>
						<h3>Develop & Deploy</h3>
						<p>Software/Web/Jr. Developer based in Nashville, TN</p>
					</div>

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
						<p className={margin}>Future skills I'd like to learn:</p>
						<NewSkills className={skills} />
					</div>
				</div>

				<div>
					{/* <img src="/banner.png" alt="site banner" style={{ maxWidth: '100%' }} /> */}
					<GatsbyImage image={image} quality="100" alt="banner" />
					{/* <p>
					{title} - {description}
				</p> */}
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
