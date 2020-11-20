import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card, CardBody, ListGroup, ListGroupItem } from "reactstrap"

const AboutPage = () => (
  <Layout>
    <SEO title="Om knut..." />
    <Card>
    <h1>Resyme</h1>
    <p> Størstedelen av arbeidslivet har jeg arbeidet innen IT. Jeg  er utdannet dataingeniør fra Høgskolen i Bergen og har i tillegg bla påbygninger fra UIO og NHH i prosjektledelse og prosjektrisiko, teknologiledelse mm. 
    Jeg har over 20 års erfaring innen bank sektor med ansvar for utvikling, drift og forvaltning av ulike IT løsninger. Han har i mange år arbeidet i grensesnittet mellom IT og forretning med å omdanne forretningskrav til IT løsninger. 
Bakgrunnen burde gjør meg til en god rådgiver innen utviklingsoppdrag, Business Intelligens, automatisering av arbeidsprosesser og digitalisering. 
Har også praktisk erfraing fra agile metodikker, Prince2, LEAN m.fl. 
Det er blidt sakt at jeg tilfører høy kunnskap, arbeidskapasitet, god samhandling og ikke minst meget godt humør. 
De siste årene har jeg arbeidet i et internasjonalt miljø med IT-leveranser fra mange ulike sourcing partnere (TCS, Accenture, Evry, Nets). 
</p>
<h2>Spisskompetanse</h2>
<ListGroup>
  <ListGroupItem>Bank erfaring. Erfaring med utvikg, drift og forvaltning av banker sine kjerneløsninger.</ListGroupItem>
   <ListGroupItem>Business Intelgence, Datavarehus  </ListGroupItem>
  <ListGroupItem>Prosjektledelse/Testledelse (Prince2 Sertifisert)</ListGroupItem>
  <ListGroupItem>Kravspesifisering (Forretning og IT-Teknisk)/ Prosess forbedringer </ListGroupItem>
  <ListGroupItem>Meget god kjennskap til prosjektstyringsverktøy verktøy som Jira, SharePoint, Confluence, Zephyr (test)</ListGroupItem>
  <ListGroupItem>IT-Forvaltning (ITIL –Sertifisert)</ListGroupItem>
  <ListGroupItem>Utvikler, BI, Oracle, Unix , Azure, SQL, C#, VB, Microsoft teknologi, SOA tjenester, GatsbyJS </ListGroupItem>
</ListGroup>

 </Card>
 </Layout>
)

export default AboutPage
