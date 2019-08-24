import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/Hero"

const IndexPage = () => (
  <div>
    <Hero />
    <Layout>
      <SEO title="Home" />

      <div>
        <script
          async
          src="https://c6.patreon.com/becomePatronButton.bundle.js%22%3E"
        />
        <iframe
          src="https://anchor.fm/public-space-travel/embed"
          height="102px"
          width="400px"
          frameborder="0"
          scrolling="no"
        />
      </div>
      <div>
        <a
          href="https://www.patreon.com/bePatron?u=9546637"
          data-patreon-widget-type="become-patron-button"
        >
          Become a Patron!
        </a>
      </div>

      <h2 style={{ paddingTop: `2rem` }}>What The—?</h2>
      <p>
        Public Space Travel is a podcast dedicated to intersectional
        social/political critique, cultural studies, comedy, and education.
      </p>
      <p>
        It originated from the ideas that: Knowledge ought to be more public as
        opposed to inaccessible due to academic paywalls and lack of resources;
        That democracy is an ongoing and necessary process for liberation; and
        that social justice requires an intersectional, decolonizing and
        anti-capitalist approach.{" "}
      </p>
      <p>We strive for that P R A X I S (Theory and Action).</p>
      <p>
        We talk about current events. Sometimes we play a continuing narrative
        RPG. Sometimes we drink too much coffee and talk about random
        interesting shit.
      </p>
      <p>
        But we always come come from an anti-hierarchy/oppression perspective,
        we aim for progressive/radical left solidarity with
        brothers/sisters/trans and non-binary folk of all stripes.
      </p>

      <h2 style={{ paddingTop: `2rem` }}>Who the—?</h2>
      <p>
        Lazarus Wolf (
        <a
          href="https://twitter.com/PSTLazarus"
          target="_blank"
          rel="noopener noreferrer"
        >
          @PSTLazarus
        </a>
        ): A PhD student and Anarchx-adjunct professor, trained in philosophy
        but agrees that "Philosophers have hitherto only interpreted the world
        in various ways; the point is to change it."
      </p>
      <p>
        Luci (
        <a
          href="https://twitter.com/PSTLuci"
          target="_blank"
          rel="noopener noreferrer"
        >
          @PSTLuci
        </a>
        ): An anarchist philosophically and a communist politically. Voted most
        likely to watch the world burn. Has a background in music and web
        development. Lurker 4 lyfe.
      </p>
      <p>
        Mar(x) aka Shadow Producer (
        <a
          href="https://twitter.com/PSTinTheShadows"
          target="_blank"
          rel="noopener noreferrer"
        >
          @PSTinTheShadows
        </a>
        ): A student of the 1s and 2s; a scholar of the wheels of steel.
        Combining leftist social and apolitical ideology and an interest in
        audio engineering to produce this pod.{" "}
      </p>
      <p>
        Hunty (
        <a
          href="https://twitter.com/PSTHunty"
          target="_blank"
          rel="noopener noreferrer"
        >
          @PSTHunty
        </a>
        ): An advocate for social justice, equity, and revolution as necessary.
      </p>

      <h2 style={{ paddingTop: `2rem` }}>How the—?</h2>
      <p>
        Listen on major podcast/music sites e.g. itunes, spotify, or{" "}
        <a
          href="https://anchor.fm/public-space-travel"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>
      <p>
        Write to us:
        <a href="PublicSpaceTravel@gmail.com">PublicSpaceTravel@gmail.com</a>
      </p>
      <p>
        Leave us a voicemail: <a href="tel:+12085021406">(208) 502-1406</a>
      </p>
    </Layout>
  </div>
)

export default IndexPage
