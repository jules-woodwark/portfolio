import React, { useContext } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import UiContext from '../store/ui-context';
import LinkButton from './UI/LinkButton';
import CloseButton from './UI/CloseButton';
import Modal from './UI/Modal';
import Section from './UI/Section';
import Heading from './UI/Heading';

const StyledIframe = styled.iframe`
  border-radius: 10px;
  margin: 2rem 0;
  min-height: 50vh;

  @media (max-height: 830px) {
    font-size: 2.5em;
    margin: 0.5rem 0;
  }
`;

const Resume = () => {
  const uiCtx = useContext(UiContext);

  const queryData = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "documents/jules-woodwark-cv.pdf" }) {
        publicURL
        name
      }
      prismicModal {
        data {
          modal_title {
            richText
          }
          body {
            ... on PrismicModalDataBodyCv {
              primary {
                button_label {
                  text
                }
                iframe_title {
                  text
                }
                pdf_link
              }
              id
            }
          }
        }
      }
    }
  `);

  const { toggleResume, resumeIsShown } = uiCtx;
  const { publicURL } = queryData.file;
  const { body, modal_title } = queryData.prismicModal.data;
  const data = body[0].primary;

  return (
    <Modal
      onClose={toggleResume}
      modalIsOpen={resumeIsShown}
      ariaLabel="CV_label"
    >
      <Section isResume>
        <Heading type="modalTitle" field={modal_title.richText} />
        <LinkButton href={publicURL} download>
          {data.button_label.text}
        </LinkButton>
        <StyledIframe
          src={data.pdf_link}
          width="100%"
          height="100%"
          allow="autoplay"
          title={data.iframe_title.text}
        ></StyledIframe>
        <CloseButton closeType="modal" onClick={toggleResume} />
      </Section>
    </Modal>
  );
};
export default Resume;
