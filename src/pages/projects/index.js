import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';
import { portfolio, projectstyle } from '../../styles/projects.module.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function Projects({ data }) {
	console.log(data);
	const projects = data.projects.nodes;
	// const contact = data.contact.siteMetadata.contact;
	// const imageP = getImage(project.frontmatter.thumb.childImageSharp.gatsbyImageData);
	return (
		<Layout>
			<div className={portfolio}>
				<h2>Portfolio</h2>
				<h3>Projects & Websites I've Created</h3>
				<div className={projectstyle}>
					{projects.map((project) => (
						<Link to={'/projects/' + project.frontmatter.slug} key={project.id}>
							<div>
								<GatsbyImage
									image={getImage(project.frontmatter.thumb.childImageSharp.gatsbyImageData)}
									alt="featured"
								/>
								<h3>{project.frontmatter.title}</h3>
								<p>{project.frontmatter.stack}</p>
							</div>
						</Link>
					))}
				</div>
				{/* <p className={bold}>
					Like what you see? Email me at{' '}
					<a className={underline} href="mailto:tabele86@gmail.com">
						{contact}
					</a>
				</p> */}
			</div>
		</Layout>
	);
}

//export page query
export const query = graphql`
	query ProjectsPage {
		projects: allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
			nodes {
				frontmatter {
					slug
					title
					stack
					link
					github
					thumb {
						childImageSharp {
							gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
						}
					}
				}
				id
			}
		}
	}
`;
