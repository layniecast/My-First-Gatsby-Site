import * as React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"

const About = () => {
  return (
    <main>
      <h1> About Me</h1>
      <Link to="/">Back to Home!</Link>
      <p>
        A lil about me! I'm the proud creator of this site, which I built with
        Gatsby!
      </p>
      <Footer />
    </main>
  )
}

export const Head = () => (
  <>
    <title>About Me</title>
    <meta name="description" content="Your description" />
  </>
)

export default About
