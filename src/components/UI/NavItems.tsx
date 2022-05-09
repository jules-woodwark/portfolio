import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { NavItemObject, NavItemsProps } from '../../models/types';
import { device } from '../../theme/theme';
import styled from 'styled-components';
import NavAnchor from './NavAnchor';
import ResumeButton from '../ResumeButton';
import ToggleTheme from './ToggleTheme';

const StyledList = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  flex-align: end;
  flex-direction: column;
  height: 100%;

  @media (min-width: 501px) {
    flex-direction: row;
  }
`;

const StyledListItem = styled.li`
  margin: 0.75rem 0;

  @media ${device.mobileXL} {
    margin: 0 0.5em;
    color: #fff;
  }
`;

const NavItems = ({ contextType }: NavItemsProps) => {
  const data = useStaticQuery(graphql`
    {
      prismicNavigation {
        data {
          nav_items {
            nav_item_label
            nav_item_id
            nav_item_link {
              url
            }
          }
        }
      }
    }
  `);

  const navItemsArray = data.prismicNavigation.data.nav_items;

  const navItemMap = navItemsArray.map((navItem: NavItemObject) => (
    <StyledListItem key={navItem.nav_item_id}>
      <NavAnchor
        url={navItem.nav_item_link.url}
        text={navItem.nav_item_label}
      />
    </StyledListItem>
  ));

  return (
    <StyledList>
      {navItemMap}
      <StyledListItem>
        <ResumeButton contextType={contextType} />
      </StyledListItem>
      <StyledListItem>
        <ToggleTheme contextType={contextType} />
      </StyledListItem>
    </StyledList>
  );
};

export default NavItems;
