import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Project = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter

  return (
    <div>
      <h2>{title}</h2>
      <h3>{stack}</h3>
      <div>
        <GatsbyImage
          image={featuredImg.childImageSharp.gatsbyImageData}
          alt="alt"
        />
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export default Project

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`
