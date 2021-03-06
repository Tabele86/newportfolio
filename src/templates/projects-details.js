import React from 'react';
import Layout from '../components/Layout';
import { htmlS, details, featured, linkSpace, linkBlock, logo } from '../styles/projects-details.module.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import { BsLink45Deg } from '@react-icons/all-files/bs/BsLink45Deg';
import { AiFillGithub } from '@react-icons/all-files/ai/AiFillGithub';
import { FaArrowLeft } from '@react-icons/all-files/fa/FaArrowLeft';

export default function ProjectsDetails({ data }) {
	const featuredImage = getImage(data.markdownRemark.frontmatter.featuredImg.childImageSharp.gatsbyImageData);
	const { html } = data.markdownRemark;
	const { title, stack, link, github } = data.markdownRemark.frontmatter;

	return (
		<Layout>
			<div className={details}>
				<h2>{title}</h2>
				<h3>{stack}</h3>
				<div className={linkBlock}>
					<div className={logo}>
						<BsLink45Deg />
					</div>
					<a className={linkSpace} target="_blank" rel="noreferrer" href={link}>
						Link
					</a>
				</div>
				<br />
				<div className={linkBlock}>
					<div className={logo}>
						<AiFillGithub />
					</div>

					<a className={linkSpace} target="_blank" rel="noreferrer" href={github}>
						GitHub
					</a>
				</div>

				<div className={featured}>
					<GatsbyImage image={featuredImage} alt="Banner" />
				</div>
				<div className={linkBlock}>
					<a href="/projects">
						<div className={logo}>
							<FaArrowLeft />
						</div>
					</a>
				</div>
				{/* <Img fluid={}/> */}
			</div>
			<div className={htmlS} dangerouslySetInnerHTML={{ __html: html }} />
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
						gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
					}
				}
			}
		}
	}
`;
