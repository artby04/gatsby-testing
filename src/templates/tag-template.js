import React from "react"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const TagTemplate = ({ data, pageContext }) => {
  const recipes = data.allContentfulRecipe.nodes
  const pageTitle =
    pageContext.tag.charAt(0).toUpperCase() + pageContext.tag.slice(1)
  return (
    <div>
      <Layout>
        <SEO title={pageTitle} />
        <main className="page">
          <h2>{pageContext.tag}</h2>
          <div className="tag-recipes">
            <RecipesList recipes={recipes}></RecipesList>
          </div>
        </main>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query GetRecipeByTag($tag: String) {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        title
        id
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default TagTemplate
