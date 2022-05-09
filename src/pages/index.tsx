import * as React from 'react';
import { graphql } from 'gatsby';
import { SliceZone } from '@prismicio/react';
import { components } from '../slices';
import { PrismicDocumentProps } from '../models/types';
import Layout from '../components/UI/Layout';

const IndexPage = ({ data }: PrismicDocumentProps) => {
  return (
    <Layout>
      <SliceZone
        slices={data.prismicHomepag.data.body}
        components={components}
      />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  {
    prismicHomepag {
      data {
        body {
          ... on PrismicHomepagDataBodyHero {
            id
            slice_type
            items {
              button_link {
                url
              }
              button_label
            }
            primary {
              description {
                text
              }
              email_address
              github_link {
                url
              }
              linkedin_link {
                url
              }
              profile_image {
                gatsbyImageData
              }
              sub_title {
                richText
              }
              title {
                richText
              }
            }
          }
          ... on PrismicHomepagDataBodyAbout {
            id
            slice_type
            primary {
              about_description {
                richText
              }
              about_title {
                richText
              }
            }
          }
          ... on PrismicHomepagDataBodyProjects {
            id
            slice_type
            items {
              project_description {
                richText
              }
              project_image {
                gatsbyImageData
              }
              project_link {
                url
              }
              project_label
              project_title {
                richText
                text
              }
            }
            primary {
              projects_title {
                richText
              }
            }
          }
          ... on PrismicHomepagDataBodyContact {
            id
            slice_type
            items {
              input_placeholder
              input_type
              is_required
              input_name
            }
            primary {
              contact_title {
                richText
              }
              form_endpoint
            }
          }
        }
      }
    }
  }
`;
