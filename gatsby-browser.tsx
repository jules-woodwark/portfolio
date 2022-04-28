import * as React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { UiContextProvider } from './src/store/ui-context';
import type { GatsbyBrowser } from 'gatsby';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
  props,
}) => {
  return (
    <UiContextProvider>
      <ParallaxProvider>{element}</ParallaxProvider>
    </UiContextProvider>
  );
};
