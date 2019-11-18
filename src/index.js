import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { red,grey } from '@material-ui/core/colors';


const mytheme = createMuiTheme({
    palette: {
      primary:{main:'#fba71a'
      },
                                                                                                                        
      secondary: grey,
    },
    status: {
      danger: red,
    },
  });

ReactDOM.render(

  <ThemeProvider theme={mytheme}> 

  <App />
   </ThemeProvider>,
  document.getElementById('root')
);

