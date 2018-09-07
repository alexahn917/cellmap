import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import * as routes from "./constants/routes";
import MainPageContainer from "./containers/Main/MainPageContainer";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#749afd',
      main: '#365fb5',
      dark: '#1a5284',
      contrastText: '#fff',
    },
    secondary: {
      light: '#FF8A80',
      main: '#E53935',
      dark: '#B71C1C',
      contrastText: '#FFEBEE',
    },
  },
  typography: {
    fontFamily: ['Jaldi', 'Titillium Web', "Roboto", "Helvetica", "Arial",
      "sans-serif"],
    fontSize: '14',
    fontWeightLight: '300',
    fontWeightRegular: '400',
    fontWeightMedium: '500'
  }
});

class App extends Component {

  render() {
    return (
        <div className="App">
          <MuiThemeProvider theme={theme}>
            <CssBaseline>
              <Router>
                <Switch>
                  <Route exact path={routes.LANDING}
                         component={() => <MainPageContainer/>}/>
                  {/*<Route exact path={routes.SIGN_IN}*/}
                  {/*component={() => <SignInPageContainer/>}/>*/}
                  {/*<Route exact path={routes.PASSWORD_FORGET}*/}
                  {/*component={() => <PasswordForgetPage/>}/>*/}
                  <Route path="*" component={() => <MainPageContainer/>}/>
                </Switch>
              </Router>
            </CssBaseline>
          </MuiThemeProvider>
        </div>
    );
  }
}

export default App;
