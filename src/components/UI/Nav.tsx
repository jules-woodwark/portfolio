import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { NavItemObject } from '../../models/types';
import styled from 'styled-components';
import NavItem from './NavItem';

const StyledList = styled.ul`
  display: flex;
  list-style: none;
`;

const Nav = () => {
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
    <NavItem
      key={navItem.nav_item_id}
      url={navItem.nav_item_link.url}
      text={navItem.nav_item_label}
    />
  ));

  return (
    <nav>
      <StyledList>{navItemMap}</StyledList>
    </nav>
  );
};

export default Nav;
