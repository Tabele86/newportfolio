import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';
import { portfolio, projectstyle } from '../../styles/projects.module.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function Clones({ data }) {
	console.log(data);
	const projects = data.projectsClones.nodes;
	// const contact = data.contact.siteMetadata.contact;
	// const imageP = getImage(project.frontmatter.thumb.childImageSharp.gatsbyImageData);
	return (
		<Layout>
			<div className={portfolio}>
				<h2>Portfolio</h2>
				<h3>Projects & Websites I've Created</h3>
				<div>
					<Link to={'/projectsClones'}>Clones</Link> <Link>Code-Along Projects</Link>
				</div>
				<div className={projectstyle}>
					{projects.map((project) => (
						<Link to={'/projectsClones/' + project.frontmatter.slug} key={project.id}>
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
	query ProjectsClone {
		projectsClones: allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
			nodes {
				frontmatter {
					slug
					title
					stack
					link
					github
					thumb
				}
				id
			}
		}
		allFile(filter: { relativeDirectory: { eq: "projectsClones" } }) {
			edges {
				node {
					id
				}
			}
		}
	}
`;
