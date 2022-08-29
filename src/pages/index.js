import React from "react"
import Layout from "../components/Layout"
import AllRecipes from "../components/AllRecipes"

import { StaticImage } from "gatsby-plugin-image"
import SEO from "../components/SEO"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" description="wooow " />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="photo"
            layout="fullWidth"
            placeholder="blurred"
            className="hero-img"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>simply recipes</h1>
              <h4>No Fluff, Just Recipes</h4>
            </div>
          </div>
        </header>
        <AllRecipes />
      </main>
    </Layout>
  )
}
