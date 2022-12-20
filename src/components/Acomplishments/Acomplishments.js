import React from 'react'

import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents'
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles'

const data = [
  { number: 90, text: 'Open Source Projects' },
  { number: 30, text: 'Dynamic websites created' },
  { number: '3M', text: 'Lines of code' },
]

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
)

export default Acomplishments
