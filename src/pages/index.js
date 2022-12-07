// Step 1: Import react
import * as React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"

// Step 2: Define your component

const IndexPage = () => {
  return (
    <>
      <main>
        <h1>Welcome to my Gatsby site!</h1>
        <Link to="/about">About Me!</Link>
        <p>I'm making this by following the Gatsby tutorial.</p>
      </main>
      <Footer />
    </>
  )
}

// You'll learn this in the next task
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage
