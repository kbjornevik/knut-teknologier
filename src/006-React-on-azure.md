---
title: "Installere React på Azure"
date: 2020-10-01 07:00:00
description: "React installasjon på Azue plattform "
author: "Knut Bjørnevik"
slug: "knut test"
image: "../../images/react-appservice.jpg"
tags:
  - tekologi
  - react
  - azure
---

>## Hvordan får man seg en React server

Selskapet jeg arbeider for Ulriken Consulting har vært partner med 
Microsoft gjennom mange år og jeg har derfor fri tilgang til hele Azure stacken av applicationer og tjenester. 

Azure App Service er en PaaS(Platform som tjeneste) for web-løsninger, mobilapper, web-API-er og logiske apper. Du kan lage en løsning basert på .NET, .NET Core, Node.js, Java, Python eller PHP i beholdere eller kjørt på Windows eller LinuxDenne. 

Jeg hadde laget meg en liten react applicasjon og hadde allerede installert npm og VS-Code på min laptop.
Her er oppskriften for å sette opp og deploye løsningen.

 Etter at du har installer Node.JS og yarn opprett et prosjekt 
 >>npx create-react-app my-app

>>   cd my-app
>>   yarn start     Og du tester om appen din fungerer

Opprett  web.config  i folder public med følgende innhold.

https://www.npmjs.com/package/gatsby-plugin-mdx

 artikkelen forklarer hvordan du skal være vert for din reageringsapp på azure app-tjenester. Forutsatt at du har npm og VS-kode installert på maskinen din, følger du trinnene nedenfor.

https://medium.com/javascript-in-plain-english/hosting-a-react-app-on-azure-app-service-ccc5b3291b86