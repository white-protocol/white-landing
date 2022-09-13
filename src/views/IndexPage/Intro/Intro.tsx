import React from 'react'

import { Section } from '@/components/layout'

function Intro() {
  return (
    <Section className="intro">
      {/*<div className="form-wrapper">*/}
      {/*  <a className="form-link" href="https://router.via.exchange" target="_blank" rel="noreferrer">*/}
      {/*    <img src="/images/backgrounds/bg-form.svg" />*/}
      {/*  </a>*/}
      {/*</div>*/}
      <h1>
          Unite and transfer crypto cheaper
      </h1>
      <a data-button="large" href="#" target="_blank" rel="noreferrer">Explore what we do</a>
    </Section>
  )
}

export { Intro }
