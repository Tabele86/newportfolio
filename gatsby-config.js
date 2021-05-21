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
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `projects`,
				path: `${__dirname}/src/projects/`
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
