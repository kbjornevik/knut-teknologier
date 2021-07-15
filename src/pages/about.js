import React from "react"

import Layout from "../components/layout"


const AboutPage = () => (
 
    <Layout>
          <h1>Formål</h1>
           <p> Alle bør ha en liten hobby og jeg har alltid likt å skrive små kodefnutter(snippets). 
             Denne bloggen startet noe tilfeldig. Jeg skulle bare lage en liten presentasjon av en Power BI rapport jeg hadde laget ved hjelp av iFrame for å kunne presentere den på en Mobil. 
            Jeg er egentlig en windows og Backend utvikler i C#, Azure  og Sql server teknologi 
            

            Da kom jeg over verktøyet GatsbyJS som genererer statiske Web sider. Gatsby er basert på React Javascript. 
            Etter at jeg hadde laget en presentasjon av Power BI rapporten ballet det litt på seg kan man si. 
            <h2>Gatsby</h2> 
            Gatsby rammeverket innehold et verktøy for å publisere tekst og bilder (MDX).
            Alle bildene som legges inn kan settes opp responsive slik at man får den oppløsningen som best passer til skjermen 
            du sitter på .
            Som sagt så er Gatsby basert på React så jeg har i samme slengen blidt ganske så dreven i React. En del av koden er skrevet i React.
            
            <h2>Netlife</h2>
            Som dere ser er denne siten publisert på netlife.com. La den først ut på Gatsby.com men fikk problemer med Google sin søkemotor som automatisk ble sperret ute hvis man ikke setter opp sin egen domene adresse. 
            Koden blir publiser til Netlife via GitHub.
            
            <h2>Nordpool priser</h2>
            Når de gjelder Nordpool/DayaHead så genereres den daglig ca kl 14:00 av en Azure Service som skriver den til GitHUB. 
            Deretter laster Netlife den inn på siten . 
            
            <h2>Blog</h2>
            Slik at denne siten ser nå ut til å bli mere en Blog.</p>
           
      </Layout>
      )
    
    
    
    
export default AboutPage
