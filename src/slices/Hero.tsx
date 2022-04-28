import React, { useContext } from 'react';
import { PrismicRichText } from '@prismicio/react';
import { SliceProps } from '../models/types';
import Heading from '../components/UI/Heading';
import LinkButtonList from '../components/UI/LinkButtonList';
import ProfilePhoto from '../components/UI/ProfilePhoto';
import Section from '../components/UI/Section';
import SocialList from '../components/UI/SocialList';
import ToggleTheme from '../components/UI/ToggleTheme';
import UiContext from '../store/ui-context';

const Hero = ({ slice }: SliceProps) => {
  const uiCtx = useContext(UiContext);

  const {
    profile_image,
    title,
    sub_title,
    email_address,
    linkedin_link,
    github_link,
    description,
  } = slice.primary;

  const { theme } = uiCtx;

  const iconsAreWhite = theme === 'light' ? false : true;

  return (
    <Section isHero>
      <ToggleTheme />
      <ProfilePhoto image={profile_image.gatsbyImageData} />
      <Heading type="heroTitle" field={title.richText} />
      <Heading type="heroSubTitle" field={sub_title.richText} />
      <SocialList
        email={email_address}
        linkedIn={linkedin_link.url}
        gitHub={github_link.url}
        showEmail={false}
        isWhite={iconsAreWhite}
      />
      <PrismicRichText field={description.richText} />
      <LinkButtonList array={slice.items} />
    </Section>
  );
};

export default Hero;
