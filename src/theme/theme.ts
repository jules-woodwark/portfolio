export type ThemeType = typeof lightTheme;

export const lightTheme = {
  body: '#FFF',
  borderColor: '#666666',
  buttonBackground: '#2F4858',
  buttonBackgroundHover: '#FE9292',
  buttonBorder: '1px solid transparent',
  cardBackgroundColor: '#FEEBD6',
  cardBoxShadow:
    'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
  cardImageFilter: 'none',
  heroSubTitleBackground: 'linear-gradient(45deg, #005B8F, #FE9292)',
  iconBackgroundColor: '#2F4858',
  iconColor: '#FEFCD7',
  projectBackground: '#FFF',
  text: '#2F4858',
  uiBackground: '#2F4858',
};

export const darkTheme = {
  body: '#292929',
  borderColor: '#FAFAFA',
  buttonBackground: '#292929',
  buttonBackgroundHover: '#FFF',
  buttonBorder: '1px solid #FFF',
  cardBackgroundColor: 'none',
  cardBoxShadow: '0 0 10px 10px rgb(112 20 210 / 50%)',
  cardImageFilter: 'hue-rotate(45deg)',
  heroSubTitleBackground: 'linear-gradient(56deg,#9660f9,#40f384)',
  iconBackgroundColor: '#666666',
  iconColor: '#FFC676',
  projectBackground: '#666666',
  text: '#FFF',
  uiBackground: '#9660f9',
};

// set the lightTheme as default
const theme = lightTheme;

export default theme;

// const breakpoints = {
//   tablet: '(min-width: 600px)',
//   laptop: '(min-width: 900px)',
//   desktop: '(min-width: 1200px)',
// };

// const fontSizes = [];

// const space = [];
