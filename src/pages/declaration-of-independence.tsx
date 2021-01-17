import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import Img, { FluidObject } from 'gatsby-image'
import Layout from "../components/layout"
import SEO from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
  document: {
    childMarkdownRemark: {
      html: string
    }
  }
  image: {
    childImageSharp: {
      fluid: FluidObject 
    }
  }
}

const DeclarationOfIndependence: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <SEO title="The Declaration of Independence" />
    <Img fluid={data.image.childImageSharp.fluid} alt="The Signing of the Declaration of Independence" />
    <article className="prose" dangerouslySetInnerHTML={ {__html: data.document.childMarkdownRemark.html}} />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default DeclarationOfIndependence

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
    document: file(relativePath: {eq: "declaration-of-independence.md"}) {
      childMarkdownRemark {
        html
      }
    }
    image: file(relativePath: { eq: "Declaration_of_Independence_(1819),_by_John_Trumbull.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

