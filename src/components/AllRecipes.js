import React from "react"
import TagsList from "../components/TagsList"
import RecipesList from "../components/RecipesList"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  query {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllRecipes = () => {
  const data = useStaticQuery(query)
  const recipes = data.allContentfulRecipe.nodes

  return (
    <section className="recipes-container">
      <TagsList recipes={recipes}></TagsList>
      <RecipesList recipes={recipes}></RecipesList>
    </section>
  )
}

export default AllRecipes
