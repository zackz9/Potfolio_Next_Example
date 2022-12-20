import React from 'react'
import { DiFirebase, DiReact } from 'react-icons/di'
import { SiAdobeindesign } from 'react-icons/si'
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles'

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider></SectionDivider><br></br>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of techs in the web development, from back-end to
      front-end.
    </SectionText>
    <List>
      <ListItem>
        <DiFirebase size='3rem'></DiFirebase>
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experience with<br></br> NodeJs and MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size='3rem'></DiReact>
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experience with<br></br> ReactJS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiAdobeindesign size='3rem'></SiAdobeindesign>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with tools like<br></br> AdobeXD and Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
)

export default Technologies
