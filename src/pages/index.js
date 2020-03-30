import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import Styles from "../styles/Index.module.scss"

const IndexPage = () => {
  return (
    <Layout>
      <h1 className={Styles.Something}>Hello</h1>
      <h2>I'm Dewey</h2>
      <p>
        Contact me by clicking <Link to="/contact">here</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
