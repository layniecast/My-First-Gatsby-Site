import * as React from "react"

const Footer = () => {
  return (
    <>
      © {new Date().getFullYear()} &middot; Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a> by Laynie with 💖 to the
      world!
    </>
  )
}

export default Footer
