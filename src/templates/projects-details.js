import React from 'react';
import Layout from '../components/Layout';
import { htmlS, details, featured } from '../styles/projects-details.module.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';

export default function ProjectsDetails({ data }) {
	const featuredImage = getImage(data.markdownRemark.frontmatter.featuredImg.childImageSharp.gatsbyImageData);
	const { html } = data.markdownRemark;
	const { title, stack } = data.markdownRemark.frontmatter;
	const { link, github } = data.markdownRemark.frontmatter;
	return (
		<Layout>
			<div className={details}>
				<h2>{title}</h2>
				<h3>{stack}</h3>
				<a target="_blank" rel="noreferrer" href={link}>
					Link
				</a>
				<br />
				<a target="_blank" rel="noreferrer" href={github}>
					GitHub
				</a>
				<div className={featured}>
					<GatsbyImage image={featuredImage} alt="Banner" />
					{/* <Img fluid={}/> */}
				</div>
				<div className={htmlS} dangerouslySetInnerHTML={{ __html: html }} />
			</div>
		</Layout>
	);
}

export const query = graphql`
	query ProjectDetails($slug: String) {
		markdownRemark(frontmatter: { slug: { eq: $slug } }) {
			html
			frontmatter {
				stack
				title
				link
				github
				featuredImg {
					childImageSharp {
						gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, AVIF])
					}
				}
			}
		}
	}
`;
