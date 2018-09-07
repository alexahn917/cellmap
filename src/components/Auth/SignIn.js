import React, {Component} from 'react';
import {auth} from '../../firebase/index';
import * as routes from '../../constants/routes';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";
import withStyles from '@material-ui/core/styles/withStyles';
import Loader from "../Main/Loader";
import ListItem from "@material-ui/core/ListItem/ListItem";
import Button from "@material-ui/core/Button/Button";
import IconButton from "@material-ui/core/IconButton/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";
import Input from "@material-ui/core/Input/Input";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import FormControl from "@material-ui/core/FormControl/FormControl";
import List from "@material-ui/core/List/List";
import Typography from "@material-ui/core/Typography/Typography";
import {PasswordForgetLink} from "../../containers/Auth/PasswordForgetPage";
import {showError} from "../../actions/Utils/notification";

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: `calc(10%)`,
  },
  text: {
    margin: theme.spacing.unit * 1,
    padding: theme.spacing.unit * 1,
  },
  button: {
    justifyContent: 'center',
    width: '200px',
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    flexBasis: 250,
  },
  listContainer: {
    justifyContent: 'center',
  }
});

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_STATE,
      showPassword: false,
    };
  }

  componentWillMount() {
    if (this.props.user) {
      this.props.history.push(routes.LANDING);
    }
  }

  onSubmit = (event) => {
    const {email, password,} = this.state;

    auth.doSignInWithEmailAndPassword(email, password)
    .then(() => {
      this.setState(() => ({...INITIAL_STATE}));
    })
    .catch(error => {
      showError(error);
    });

    event.preventDefault();
  };

  handleGoogleLogin = (event) => {
    const {
      history,
    } = this.props;

    auth.doSignInWithGoogleAccount(history)
    .then(() => {
      this.setState(() => ({...INITIAL_STATE}));
    })
    .catch(error => {
      showError(error);
    });

    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState({showPassword: !this.state.showPassword});
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const {
      classes,
      history,
      loading,
    } = this.props;

    const isInvalid =
        password === '' ||
        email === '';

    if (loading === null || loading) {
      return <Loader/>
    }

    return (
        <div className={classes.root}>
          <form onSubmit={this.onSubmit}>
            <Typography className={classes.text}
                        variant="display2"
                        align="center">
              Snowball
            </Typography>
            <List className={classes.listContainer}>
              <ListItem>
                <FormControl className={classes.textField}>
                  <InputLabel htmlFor="email">Email Address</InputLabel>
                  <Input
                      id="email"
                      type='text'
                      value={email}
                      onChange={event => this.setState(
                          updateByPropertyName('email',
                              event.target.value))}
                  />
                </FormControl>
              </ListItem>
              <ListItem>
                <FormControl className={classes.textField}>
                  <InputLabel
                      htmlFor="adornment-password">Password</InputLabel>
                  <Input
                      id="password"
                      type={this.state.showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={event => this.setState(
                          updateByPropertyName('password',
                              event.target.value))}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                              aria-label="Toggle password visibility"
                              onClick={this.handleClickShowPassword}
                              onMouseDown={this.handleMouseDownPassword}
                          >
                            {this.state.showPassword ? <VisibilityOff/> :
                                <Visibility/>}
                          </IconButton>
                        </InputAdornment>
                      }
                  />
                </FormControl>
              </ListItem>
              <ListItem>
                <Button className={classes.button}
                        variant="raised"
                        color="primary"
                        disabled={isInvalid}
                        type="submit">
                  Sign In with Email
                </Button>
              </ListItem>
              <ListItem>
                <Button className={classes.button}
                        variant="raised"
                        color="primary"
                        style={{backgroundColor: '#BF360C'}}
                        onClick={this.handleGoogleLogin}
                >
                  Sign in with Google
                </Button>
              </ListItem>
              <ListItem style={{justifyContent: 'center'}}>
                <PasswordForgetLink history={history}/>
              </ListItem>
            </List>
            {error && <p>{error.message}</p>}
          </form>
        </div>
    );
  }
}

SignInPage.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  user: PropTypes.object,
  authLoad: PropTypes.func.isRequired,
  authComplete: PropTypes.func.isRequired,
};

export default withRouter(withStyles(styles, {withTheme: true})(SignInPage));
