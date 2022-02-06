import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  colour: {
    // Black
    void: '#2d2d2d',
    // Grey
    ash: '#333333',
    // Pink
    mistyRose: '#ffe4e1',
  },

  breakpoint: [
    '40em', // 640px
  ],

  space: [
  ],

  fontSize: {
    xsmall: '.75rem',
    small: '.875rem',
    normal: '1rem',
    large: '1.25rem',
    xlarge: '1.5rem',
    '2xlarge': '2rem',
    '3xlarge': '2.5rem',
    '4xlarge': '3rem',
    '5xlarge': '3.5rem',
    '6xlarge': '4rem',
  },

  fontFamily: {
    gentium: `'Gentium Book Basic', serif`,
    openSans: `'Open Sans', sans-serif`,
  }
}


export default theme
