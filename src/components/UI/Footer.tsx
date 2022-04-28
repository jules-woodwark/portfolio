import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import SocialList from './SocialList';

const StyledFooter = styled.footer`
  align-items: center;
  background-color: ${(props) => props.theme.uiBackground};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      prismicHomepag {
        data {
          body {
            ... on PrismicHomepagDataBodyHero {
              id
              primary {
                github_link {
                  url
                }
                linkedin_link {
                  url
                }
                email_address
              }
            }
          }
        }
      }
    }
  `);

  const { email_address, github_link, linkedin_link } =
    data.prismicHomepag.data.body[0].primary;

  const socialDataObject = {
    email: email_address,
    gitHubUrl: github_link.url,
    linkedInUrl: linkedin_link.url,
  };

  const { email, gitHubUrl, linkedInUrl } = socialDataObject;

  return (
    <StyledFooter>
      <SocialList
        email={email}
        linkedIn={linkedInUrl}
        gitHub={gitHubUrl}
        showEmail
        isWhite
      />
    </StyledFooter>
  );
};

export default Footer;
