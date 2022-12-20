import React from 'react'

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br /> My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I’m a web developer baes in Morocco, I have developed many of front-ends
        projects using HTML, CSS, and JavaScript, and PHP.
      </SectionText>
      <Button onClick={() => (window.location = 'https://google.com')}>
        Learn more
      </Button>
    </LeftSection>
  </Section>
)

export default Hero
