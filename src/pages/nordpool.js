import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import{Container,Card,CardBody,CardTitle } from 'reactstrap'
import LineChartPris from "../components/nordpoolpris.js"
const NordpoolPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <Container>
    <Card bg="light"  border="success"  > 
        <CardBody>
        <CardTitle>Nordpool pris siste 30 dager </CardTitle>
           <LineChartPris/>
        </CardBody>
    </Card>
    
    </Container>
  </Layout>
)

export default NordpoolPage
