import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>I'm Dewey</h2>
      <p>
        Contact me by clicking <Link to="/contact">here</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
