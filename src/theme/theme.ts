export type ThemeType = typeof lightTheme;

export const lightTheme = {
  alertErrorColor: '#FE9292',
  alertSuccessColor: '#00AC75',
  alertWarningColor: '#FEE4AB',
  body: '#FFF',
  borderColor: '#666666',
  buttonBackground: '#2F4858',
  buttonBackgroundHover: '#FE9292',
  buttonBorder: '1px solid transparent',
  cardBackgroundColor: '#FEEBD6',
  cardBoxShadow:
    'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
  cardImageFilter: 'none',
  fontWeight: '400',
  formBackground: 'rgba(255, 255, 255, 0.5)',
  heroSubTitleBackground: 'linear-gradient(56deg, #B577C9, #005B8F)',
  iconBackgroundColor: '#2F4858',
  iconColor: '#FEFCD7',
  linkBackgroundHover: '#FE9292',
  mainMarginBottom: '300px',
  mainMarginTop: '185.552px',
  modalBackgroundColor: '#FFF',
  modalTitleColor: '#2F4858',
  projectBackground: '#FFF',
  sideDrawerBackground: '#FFF',
  text: '#2F4858',
  tooltipBackground: '#2F4858',
  tooltipText: 'FFF',
  uiBackground: '#2F4858',
};

export const darkTheme = {
  alertErrorColor: '#FF4D5A',
  alertSuccessColor: '#40F384',
  alertWarningColor: '#00AEFF',
  body: '#292929',
  borderColor: '#FAFAFA',
  buttonBackground: '#292929',
  buttonBackgroundHover: '#FFF',
  buttonBorder: '1px solid #FFF',
  cardBackgroundColor: 'none',
  cardBoxShadow: '0 0 10px 10px rgb(112 20 210 / 50%)',
  cardImageFilter: 'hue-rotate(45deg)',
  fontWeight: '400',
  formBackground: '#666666',
  heroSubTitleBackground: 'linear-gradient(56deg,#9660f9,#40f384)',
  iconBackgroundColor: '#5A656C',
  iconColor: '#FDB768',
  linkBackgroundHover: '#292929',
  mainMarginBottom: '300px',
  mainMarginTop: '185.552px',
  modalBackgroundColor: '#666666',
  modalTitleColor: '#FFF',
  projectBackground: '#666666',
  sideDrawerBackground: '#666666',
  text: '#FFF',
  tooltipBackground: '#9660f9',
  tooltipText: 'FFF',
  uiBackground: '#9660f9',
};

const theme = lightTheme;

export default theme;

const size = {
  mobileXS: '200px',
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  mobileXL: '500px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const device = {
  mobileXS: `(min-width: ${size.mobileXS})`,
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  mobileXL: `(min-width: ${size.mobileXL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
};
