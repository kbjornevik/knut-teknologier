import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
        <SEO title="Home" />
       <iframe width="800" height="573.5" src="https://app.powerbi.com/view?r=eyJrIjoiN2Q5M2M0ZTctNzMzZS00ZjliLWJlM2YtZmU5NDk5N2U1ZGFkIiwidCI6ImNiMjQwMDExLTg5MTYtNGFjNi05ZTU5LWU1NGMwY2IxNGRkZCIsImMiOjh9&pageName=ReportSection1a134217d3b62c57a41c" frameborder="0" allowFullScreen="true">
        </iframe>
  
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
