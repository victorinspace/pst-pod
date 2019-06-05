import React from "react"
import LazyHero from "react-lazy-hero"

const Hero = () => (
  <div>
    <LazyHero imageSrc="https://unsplash.it/2000/1000">
      <h1 style={{ fontSize: `4em` }}>Public Space Travel</h1>
    </LazyHero>
  </div>
)

export default Hero
