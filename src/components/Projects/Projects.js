import React from 'react'

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from './ProjectsStyles'
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents'
import { projects } from '../../constants/constants'

const Projects = () => (
  <Section nopadding id='projects'>
    <SectionDivider></SectionDivider>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(
        ({ id, image, title, description, tags, source, visit }) => (
          <BlogCard key={id}>
            <Img src={image}></Img>
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr></Hr>
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TitleContent>Tech Stack</TitleContent>
              <TagList>
                {tags.map((tag, id) => (
                  <Tag key={id}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
                <ExternalLinks href={visit}>Code</ExternalLinks>
                <ExternalLinks href={source}>Source</ExternalLinks>
            </UtilityList>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
)

export default Projects
