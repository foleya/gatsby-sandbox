import React from "react"

import Header from "../header"
import Footer from "../footer"

import Styles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={Styles.Container}>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
