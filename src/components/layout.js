import * as React from "react"
import { Link } from "gatsby"
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  footer,
} from "./layout.module.css"
import Footer from "./footer.js"

// console.log("container: ", container)

const Layout = ({ pageTitle, pageHeading, children }) => {
  return (
    <main className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/">
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/about">
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className={navLinkText} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <h1 className={heading}>Welcome to {pageHeading} page!</h1>
      {children}
      <div className={footer}>
        <Footer />
      </div>
    </main>
  )
}

export default Layout
