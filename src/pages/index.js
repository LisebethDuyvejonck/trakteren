import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Vuist from "../components/vuist"
import SEO from "../components/seo"
import style from "./index.module.css"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <Vuist />
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
