import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { slugify } from "../util/utilityFunctions"

import { Badge, Button } from "reactstrap"

const tagsPage = ({ pageContext }) => {
  const { tags, tagPostCounts } = pageContext
  return (
    <Layout pageTitle="All Tema">
      <SEO title="All tema" keywords={["tags", "topics"]} />
      <ul>
        {tags.map(tag => (
          <li key={tag} style={{ marginBottom: "10px" }}>
            <Button color="primary" href={`/tag/${slugify(tag)}`}>
              {tag} <Badge color="light">{tagPostCounts[tag]}</Badge>
            </Button>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default tagsPage
