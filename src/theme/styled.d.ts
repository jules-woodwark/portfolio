//STYLED COMPONENTS DECLARATION FILE

// import original module declarations
import 'styled-components';

// import theme from theme.ts
import { ThemeType } from './theme';

// extend global DefaultTheme with custom ThemeType
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}