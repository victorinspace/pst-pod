import React from "react"
import LazyHero from "react-lazy-hero"
import bg from "../images/pst-bg.jpg"

const Hero = () => (
  <div>
    <LazyHero
      imageSrc={bg}
      color="#000"
      opacity="0.3"
      parallaxOffset="100"
      minHeight="55vh"
    >
      <h1
        style={{
          fontSize: `6.88em`,
          fontStyle: `italic`,
          color: `#eee`,
          fontFamily: `Prata`,
          padding: `5rem 0`,
          lineHeight: `1.25`,
        }}
      >
        Public Space Travel
      </h1>
    </LazyHero>
  </div>
)

export default Hero
