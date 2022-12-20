import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

import { SocialIcons } from '../Header/HeaderStyles'
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles'

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:digitalecoach@gmail.com'>
            digitalecoach@gmail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:212607200505'>060-720-0505</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Just keep it reel !</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com'>
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://instagram.com'>
            <AiFillInstagram size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://linkedin.com'>
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  )
}

export default Footer
