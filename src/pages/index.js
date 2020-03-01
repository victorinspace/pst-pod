import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"

const Section = styled.div`
  padding-top: 2.5em;
  padding-bottom: 3rem;
`
const BasicLink = styled.a`
  color: #e69d3d;
  text-decoration: none;
`

const IndexPage = () => (
  <div
    style={{
      backgroundColor: `#110700`
    }}
  >
    <Hero />
    <Layout>
      <SEO title="Home" />

      {/* Media Player */}
      <div
        style={{
          paddingTop: `1em`
        }}
      >
        <script
          async
          src="https://c6.patreon.com/becomePatronButton.bundle.js%22%3E"
        />
        <div>
          <iframe
            src="https://anchor.fm/public-space-travel/embed"
            width="100%"
            frameborder="0"
            scrolling="no"
            title="Public Space Travel Patreon"
            style={{
              marginBottom: `0`
            }}
          />
        </div>
      </div>

      {/* Patreon Link */}
      <div
        style={{
          padding: `0 0 1em`
        }}
      >
        <BasicLink
          href="https://www.patreon.com/bePatron?u=9546637"
          data-patreon-widget-type="become-patron-button"
          style={{
            fontWeight: `bold`,
            color: `#110700`,
            fontSize: `1.5rem`,
            padding: `10px`,
            borderRadius: `5px`,
            backgroundColor: `#e69d3d`
          }}
        >
          Buy us a coffee <span role="img" aria-label="coffee">☕</span>?
        </BasicLink>
      </div>

      <Section>
        <p>
        Public Space Travel is a leftist anti-capitalist podcast of disgruntled academics, video gamers, and friends. Our belief is that knowledge should be made more accessible, and be used for anti-oppression and non-hierarchical revolutionary ends.
        </p>
       <p>
         You can support what we do at our <BasicLink target="_blank" rel="noopener noreferrer" href="https://www.patreon.com/PublicSpaceTravel">Patreon</BasicLink>; and reach out to us at <BasicLink target="_blank" rel="noopener noreferrer" href="mailto:PublicSpaceTravel@gmail.com?bcc=rndmchaz@gmail.com&subject=PST%20Website%20Visitor">PublicSpaceTravel@gmail.com</BasicLink> or leave us a voicemail at <BasicLink href="tel:+12085021406">(208) 502-1406</BasicLink>.
        </p>
      </Section>
    </Layout>
  </div>
)

export default IndexPage
