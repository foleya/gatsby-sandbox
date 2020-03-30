import React from "react"
import { Link } from "gatsby"

import Styles from "./header.module.scss"

const Header = () => {
  console.log(Styles)
  return (
    <header>
      <h1>Dewey Foley</h1>
      <nav>
        <ul>
          <li>
            <Link className={Styles.Link} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={Styles.Link} to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className={Styles.Link} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className={Styles.Link} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
