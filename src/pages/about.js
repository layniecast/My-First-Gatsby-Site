import * as React from "react"
import Layout from "../components/layout"
// import { Link } from "gatsby"
// import Footer from "../components/footer"

const About = () => {
  return (
    <>
      <Layout pageTitle="About" pageHeading="my about">
        <p>I am Laynie! How are you today? Thanks for stopping by!</p>
      </Layout>
      {/* <div className="footer">
        <Footer />
      </div> */}
    </>
  )
}

export const Head = () => (
  <>
    <title>About</title>
    <meta name="description" content="Your description" />
  </>
)

export default About
