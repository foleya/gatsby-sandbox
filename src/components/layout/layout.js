import React from "react"

import Header from "../header/header"
import Footer from "../footer/footer"

import Styles from "./layout.module.scss"

import "./global.css"

const Layout = props => {
  return (
    <div className={Styles.Container}>
      <div className={Styles.Content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
