import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import { red,orange,grey } from '@material-ui/core/colors';


const mytheme = createMuiTheme({
    palette: {
      primary:{
        main: '#fba71a',
      },                                                                                                                   
      secondary: grey,
    },
    status: {
      danger: red,
    },
    typography:{
      fontFamily:[
        "'Montserrat', sans-serif"
        
      ]
    },
    overrides: {
      MuiButton: {
        containedSecondary: {
          backgroundColor: 'white',
          color          : 'black',
          border         : '1px solid',
          borderColor    : '#fba71a'
        },
        containedPrimary: {
          color: 'white',
        }
      },
    
    }
  });

ReactDOM.render(

  <ThemeProvider theme = {mytheme}>
  <App />
   </ThemeProvider>,
  document.getElementById('root')
);

