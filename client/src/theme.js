import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import './fonts.css';

const unica = "'Unica One', cursive";
const oxygen = "'Oxygen', sans-serif";

let theme = createMuiTheme({
  typography: {
    fontFamily: [
      oxygen,
      unica
    ].join(','),
    h1: {
      fontFamily: [unica]
    },
    h2: {
      fontFamily: [unica]
    },
    h3: {
      fontFamily: [unica]
    },
    h4: {
      fontFamily: [unica]
    },
    h5: {
      fontFamily: [unica]
    },
    h6: {
      fontFamily: [unica]
    },
    subtitle1: {
      fontFamily: [oxygen],
      fontStyle: 'italic'
    },
    subtitle2: {
      fontFamily: [oxygen],
      fontWeight: 700,
      fontSize: '1rem'
    }
  },
  palette: {
    primary: {
      main: '#D6E2E9' //Light Blue
    },
    secondary: {
      main: '#DBE7E4' //Green
    },
    neutral: {
      main: '#F0EFEB' //Grey/peach
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
        },
        '@font-face': [oxygen],
      },
    },
    MuiButton: {
      text: {
        fontSize: '3rem'
      }
    }
  },
});

theme = responsiveFontSizes(theme);
export default theme;