// Step 1: Import react
import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
// import { Link } from "gatsby"
// import Footer from "../components/footer"

// Step 2: Define your component

const IndexPage = () => {
  return (
    <>
      <Layout pageTitle="Home" pageHeading="Laynie's">
        Welcome to my Gatsby Site! My little corner of the web where I practice
        Gatsby, a ReactJS framework. To make this site, I followed the
        LiveStream Megan's Coding Corner on Youtube.
        <br></br>
        <br></br>
        <br></br>
        <StaticImage
          src="../images/gatsby-icon.png"
          alt="Gatsby icon logo"
          width="200"
          height="200"
        />
        <br></br>
        <br></br>
        <br></br>
      </Layout>
    </>
  )
}

// You'll learn this in the next task
export const Head = () => <title>Laynie's Page</title>

// Step 3: Export your component
export default IndexPage
