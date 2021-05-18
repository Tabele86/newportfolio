import { Link, graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import { header, btn } from '../styles/home.module.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function Home({ data }) {
	// console.log(data);
	// const { title, description } = data.site.siteMetadata;
	const image = getImage(data.file.childImageSharp.gatsbyImageData);
	return (
		<Layout>
			<section className={header}>
				<div>
					<h2>Design</h2>
					<h3>Develop & Deploy</h3>
					<p>Software/web developer based in Nashville TN</p>
					<Link className={btn} to="/projects">
						My Portfolio Projects
					</Link>
				</div>
				{/* <img src="/banner.png" alt="site banner" style={{ maxWidth: '100%' }} /> */}
				<GatsbyImage image={image} quality="100" alt="banner" />
				{/* <p>
					{title} - {description}
				</p> */}
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
