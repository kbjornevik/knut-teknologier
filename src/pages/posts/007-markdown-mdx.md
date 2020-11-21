---
title: "Bruk av Markdown og MDX i GatsbyJS"
date: 2020-11-11 07:00:00
description: "Denne siten benytter Markdown og MDX "
author: "Knut Bjørnevik"
image: "../../images/kystvakten.jpg"
slug: "test"
tags:
  - Tekologi
  - Gatsby
  - test
---

># Markdown
Markdown er et lett markeringsspråk med syntaks for formatering av ren 
tekst, opprettet i 2004 av John Gruber og Aaron Swartz. Markdown brukes
ofte til formatering av readme-filer, til å skrive meldinger i online 
diskusjonsfora og til å lage rik tekst ved hjelp av en 
redigeringsprogramvare for ren tekst.
![Chinese Salty Egg](../../images/salty_egg.jpg)
> ## Frontmatter for metadata i Markdown filer
Når en oppretter en Markdown-fil, kan en inkludere et sett med nøkkelverdipar som kan brukes til å gi tilleggsdata som er relevante for bestemte sider i GraphQL-datalaget. Disse dataene kalles frontmatter og er betegnet med de tre streker i begynnelsen og slutten av blokken. Denne blokken blir analysert av gatsby-transformator-bemerkning som frontmaterie. GraphQL API vil gi nøkkelverdiparene som data i React-komponentene dine.

<a target="_blank" rel="noopener noreferrer" 
href= "https://www.gatsbyjs.com/docs/adding-markdown-pages" > Link Gatsby Markdown Pages</a>


>## MDX i Gatsby
Standard Markdon har sine begrensinger og jeg har derfor oppgradert siten til å benytte MDX. MDX er et supersett av Markdown som lar oss legge inn JSX direkte i Markdown-filer.
<a target="_blank" rel="noopener noreferrer" href= "https://www.digitalocean.com/community/tutorials/gatsbyjs-mdx-in-gatsby" > Link artikkel om MDX </a>

npm install gatsby-remark-images gatsby-plugin-sharp
src/markdown-pages/post-1.md
