import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import '../dist/fonts.css';

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
      fontFamily: [unica],
      textAlign: 'center'
    },
    h4: {
      fontFamily: [unica]
    },
    h5: {
      fontFamily: [unica]
    },
    h6: {
      fontFamily: [unica],
      textAlign: 'center'
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
    },
    mediumBlue: {
      main: '#BCD4E6'
    },
    darkBlue: {
      main: '#99C1DE'
    },
    darkestBlue: {
      main: '#173347'
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
        },
        '@font-face': [oxygen]
      },
    },
    MuiButton: {
      text: {
        fontFamily: unica,
        fontSize: '1.25rem'
      }
    },
    MuiTabs: {
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: '#99C1DE'
      }
    },
    MuiAppBar: {
      colorSecondary: {
        backgroundColor: '#F0EFEB'
      }
    },
    MuiGrid: {
      container: {
        width: '100%'
      }
    },
    MuiContainer: {
      root: {
        height: '100%'
      }
    },
    MuiInput: {
      root: {
        width: '200px'
      }
    },
    MuiTableCell: {
      root: {
        padding: '5px 16px',
        fontSize: '16px'
      }
    }
  },
});

theme = responsiveFontSizes(theme);
export default theme;