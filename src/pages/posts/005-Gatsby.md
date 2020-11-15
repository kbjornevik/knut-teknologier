---
title: "Gatsby en statsik web server"
date: 2020-12-30 07:00:00
description: "Gatsby "
author: "Knut Bjørnevik"
image: "../../images/gatsbyjs.jpg"
tags:
  - Tekologi
  - Gatsby
  - Webserver
---

>## Gatsby verktøy for generering av statiske Web sider
Gatsby benyttes for å lage en Web løsning. Den statiske delen av dette betyr at det Gatsby vil produsere statiske HTML-filer som vi laster opp til en server.

Nå fungerer dette annerledes enn hvordan mange nettsteder fungerer der du besøker et web-server, og det må søkes i en database eller gjøre noen programmering på selve serveren for å kunne betjene websidene dine. En Gatsby site har allerede forhåndskonfigurert alle HTML sidene og det er kun for brukeren å åpne siden.

Et vanlig oppsette er å kjøre Gatsby lokalt på datamaskinen når man bygger et nettsted, og deretter genererer vi de endelige ferdige produktet som Gatsby vil spytte ut, som er et statisk Gatsby-nettsted. Gatsby vil generere HTML, CSS , JavaScript-bilder alle modluler vi trenger for at nettstedet vårt skal kjøre. Gatsby er et  verktøy som vil hjelpe oss med å bygge en web side.

For å generere statiske web sider vil Gatsby bruke Node JS. Node kjører i et utviklingsmiljø på selve datamaskinen. Når sidene er generert trenger du ikke  Node JS på selve WEB-serveren.


> ### Gatsby JS bruker GraphQL
Sentralt i generering av web sider er GraphQL-spørringsspråket. Dette kan benyttes for å hente data fra hvor som helst. [Introduksjon](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)

Det er mange alternativer for å laste inn data i React-komponenter. En av de mest populære og kraftige av disse er en teknologi som heter GraphQL. GraphQL ble oppfunnet av Facebook for å hjelpe utviklere med å hente nødvendige data i React-komponenter.
GraphQL er et spørrespråk (QL-delen av navnet). Hvis du er kjent med SQL, fungerer det på en veldig lignende måte. Ved hjelp av en spesiell syntaks beskriver du dataene du vil ha i komponenten din, og deretter blir disse dataene gitt til deg.
Gatsby bruker GraphQL for å aktivere side- og StaticQuery-komponenter for å erklære hvilke data de og deres underkomponenter trenger. Deretter gjør Gatsby disse dataene tilgjengelige i nettleseren når komponentene dine trenger det.


> ### Markdown
Markdown er et lett markeringsspråk med syntaks for formatering av ren tekst, opprettet i 2004 av John Gruber og Aaron Swartz. Markdown brukes ofte til formatering av readme-filer, til å skrive meldinger i online diskusjonsfora og til å lage rik tekst ved hjelp av en redigeringsprogramvare for ren tekst.

Siden den første beskrivelsen av Markdown inneholdt tvetydigheter og ubesvarte spørsmål, har implementeringene som dukket opp gjennom årene subtile forskjeller, og mange kommer med syntaksutvidelser.  [LINK](https://en.wikipedia.org/wiki/Markdown)  

En vil benytte en plugin gatsby-transformer-remark for å gjenkjenne filer som er Markdown og lese innholdet. Pluggen vil konvertere frontmatter-metadata-delen av Markdown-filene dine som "frontmatter" og innholdsdelen som HTML.

> #### Frontmatter for metadata i Markdown filer
Når en oppretter en Markdown-fil, kan en inkludere et sett med nøkkelverdipar som kan brukes til å gi tilleggsdata som er relevante for bestemte sider i GraphQL-datalaget. Disse dataene kalles frontmatter og er betegnet med de tre streker i begynnelsen og slutten av blokken. Denne blokken blir analysert av gatsby-transformator-bemerkning som frontmaterie. GraphQL API vil gi nøkkelverdiparene som data i React-komponentene dine.

<a target="_blank" rel="noopener noreferrer" href= "https://www.gatsbyjs.com/docs/adding-markdown-pages" > Link Markdown Pages</a>

>### MDX i Gatsby
Markdown standard syntaksen er rettet mot tekstbasert innhold. Dette endret seg ved introduksjon av MDX. MDX er et supersett av Markdown som lar oss legge inn JSX direkte i Markdown-filer.
<a target="_blank" rel="noopener noreferrer" href= "https://www.digitalocean.com/community/tutorials/gatsbyjs-mdx-in-gatsby" > Link artikkel om MDX </a>

src/markdown-pages/post-1.md
_ _ _
title: "Gatsby en statsik web server"
date: 2020-12-30 07:00:00
description: "Gatsby "

> ## Fordeler med et statisk nettsted
> 1. Bedre sikkerhet i forhold dynamiske nettsteder (dynamiske nettsteder har større risiko for nettangrep)
> 2. Forbedret ytelse for sluttbrukere sammenlignet med dynamiske nettsteder 
> 3. Færre eller ingen avhengigheter av systemer som databaser eller andre applikasjonsservere 
> 4. Kostnadsbesparelser ved bruk av skylagring, i motsetning til et vertsmiljø 


> ## Ulemper med et statisk nettsted
> 1. Dynamisk funksjonalitet må utføres på klientsiden
