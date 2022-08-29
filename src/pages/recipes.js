import React from "react"
import Layout from "../components/Layout"
import AllRecipes from "../components/AllRecipes"
import SEO from "../components/SEO"

const Recipes = () => {
  return (
    <main className="page">
      <Layout>
        <SEO title="Recipes" />
        <AllRecipes />
      </Layout>
    </main>
  )
}

export default Recipes
