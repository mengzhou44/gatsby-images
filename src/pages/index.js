import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image" 
import { StaticImage } from "gatsby-plugin-image"

function Home({data}) {
  const projects = data.projects.nodes

  return (
    <div>
      <StaticImage
        src="../../images/dogs.webp"
        alt="dogs"
        width={1000}
        placeholder="blurred"
        transformOptions={{ grayscale: true }}
      ></StaticImage>
 
      <div>
        <div>
          {projects.map(project => (
            <Link to={`/projects/${project.frontmatter.slug}`} key={project.id}>
              <div>
                <GatsbyImage
                  image={project.frontmatter.thumb.childImageSharp.gatsbyImageData}
                />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
 
    </div>
  )
}

//export page query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
        id
      }
    }
  }
`

export default Home 