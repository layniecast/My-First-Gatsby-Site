// Step 1: Import react
import * as React from "react"
import Layout from "../components/layout"
// import { Link } from "gatsby"
// import Footer from "../components/footer"

// Step 2: Define your component

const IndexPage = () => {
  return (
    <>
      <Layout pageTitle="Home" pageHeading="Laynie's">
        Welcome to my Gatsby Site!
      </Layout>
    </>
  )
}

// You'll learn this in the next task
export const Head = () => <title>Laynie's Page</title>

// Step 3: Export your component
export default IndexPage
