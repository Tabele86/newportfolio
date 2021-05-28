const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
	const { data } = await graphql(`
  query Articles {
    allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          thumb{
            childImageSharp {
              id
            }
          }
          featuredImg {
            childImageSharp{
              id
            }
          }
        }
      }
    }
  }
  
    `);

	data.allMarkdownRemark.nodes.forEach((node) => {
		actions.createPage({
			path: `/projects/` + node.frontmatter.slug,
			component: path.resolve('./src/templates/projects-details.js'),
			context: { slug: node.frontmatter.slug }
		});
	});
};
