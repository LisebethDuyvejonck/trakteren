import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./index.module.css"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <ul>
      {data.allContentfulTreat.edges.map(({ node }) => (
        <li>
          <Link to={node.id}>{node.id}</Link>
        </li>
      ))}
    </ul>
    <Link to="/create" className={style.button}>
      Deel een traktatie uit
    </Link>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allContentfulTreat {
      edges {
        node {
          id: contentful_id
        }
      }
    }
  }
`
