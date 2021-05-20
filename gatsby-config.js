/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */
	plugins: [
		`gatsby-transformer-remark`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-image`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `projectsMain`,
				path: `${__dirname}/src/projects/projectsMain/`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `projectsClones`,
				path: `${__dirname}/src/projects/projectsClones/`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `projectsCode`,
				path: `${__dirname}/src/projects/projectsCode/`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images/`
			}
		}
	],
	siteMetadata: {
		title: 'Tony Abele',
		description: 'web dev portfolio',
		copyright: 'This website is copyright 2021 Tony Abele',
		contact: 'tabele86@gmail.com'
	}
};
