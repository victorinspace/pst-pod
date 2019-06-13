import React from "react"
import LazyHero from "react-lazy-hero"

const Hero = () => (
  <div>
    <LazyHero
      imageSrc="https://images.unsplash.com/photo-1485304018316-1ff471aa1369?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
      color="#000"
      opacity="0.2"
      parallaxOffset="100"
      minHeight="75vh"
    >
      <h1 style={{ fontSize: `9em`, color: `#eee` }}>Public Space Travel</h1>
    </LazyHero>
  </div>
)

export default Hero
