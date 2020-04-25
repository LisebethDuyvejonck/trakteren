import React from "react"

import Layout from "../components/layout"
import Form from "../components/form"
import Traktatie from "../components/traktatie"
import SEO from "../components/seo"

const CreatePage = () => (
  <Layout>
    <SEO title="Home" />
    <Form/>
    <Traktatie height={15}/>
  </Layout>
)

export default CreatePage