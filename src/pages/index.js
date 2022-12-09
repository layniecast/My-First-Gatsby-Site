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
        <p>
          Welcome to my Gatsby Site! My little corner of the web where I
          practice Gatsby, a ReactJS framework. To make this site, I followed
          the Youtube video:
          <a href="https://www.youtube.com/watch?v=C8YxdGGjvOg">
            LiveStream Megan's Coding Corner
          </a>
          .
          <p>
            Gatsby promises to "deliver dynamic web experiences with performance
            and security that scales. It is also used to "collaborate, build and
            deploy 1000x faster with Gatsby".
          </p>{" "}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
          facere culpa recusandae repudiandae! Assumenda expedita commodi
          architecto consequuntur iste, debitis unde exercitationem asperiores
          mollitia velit voluptas doloribus incidunt minima illo delectus natus?
          Similique dicta suscipit veniam, iste voluptates dolor corrupti earum
          atque fuga, magni modi aliquam mollitia officiis quae aspernatur
          blanditiis culpa maiores vitae animi? Sunt, aliquid debitis tempora
          similique quae pariatur ipsa facere ex, error sequi accusantium,
          corporis architecto doloremque consequuntur dolor nesciunt quo
          voluptatum. Ad voluptatum distinctio, odit explicabo fuga accusamus
          ipsa cumque nemo autem corporis reiciendis itaque, qui quo officiis
          laboriosam consequuntur impedit dolor. Rem, dolor necessitatibus.
        </p>
        <StaticImage
          src="../images/example.png"
          alt="web pc image"
          width={200}
          height={200}
          loading="eager"
        />
        <br></br>
        <br></br>
        <br></br>
        <StaticImage
          src="../images/gatsby-icon.png"
          alt="Gatsby icon logo"
          width={200}
          height={200}
          loading="eager"
          placeholder="blurred"
          // layout="fixed"
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
