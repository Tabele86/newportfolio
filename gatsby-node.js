const path = require('path');

const getFileNode = (options) => (source, _, context, info) => {
	const { fieldName } = info;
	const partialPath = source[fieldName];

	if (!partialPath) {
		return null;
	}

	const filePath = path.join(__dirname, options.path, partialPath);

	const fileNode = context.nodeModel.runQuery({
		firstOnly: true,
		type: 'File',
		query: {
			filter: {
				absolutePath: {
					eq: filePath
				}
			}
		}
	});

	if (!fileNode) {
		return null;
	}

	return fileNode;
};
exports.createPages = async ({ graphql, actions }) => {
	const { data } = await graphql(`
      query Articles {
        allMarkdownRemark {
          nodes {
            frontmatter {
              slug
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

	createFieldExtension({
		name: 'fileByAbsolutePath',
		args: {
			path: {
				type: 'String!',
				defaultValue: ''
			}
		},
		extend: (options) => ({
			resolve: getFileNode(options)
		})
	});

	createTypes(`
  type LocalContentCities implements Node {
    image: File @fileByAbsolutePath(path: "src/images")
  }
`);
};
