import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import * as routes from '../../constants/routes';
import {auth} from '../../firebase/index';
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  ListItem,
  Typography
} from "@material-ui/core";
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: `calc(10%)`,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  text: {
    margin: theme.spacing.unit * 1,
    padding: theme.spacing.unit * 1,
  },
  margin: {
    margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    flexBasis: 250,
  },
  button: {
    justifyContent: 'center',
    width: '150px',
  },
});

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetPage extends Component {
  constructor(props) {
    super(props);
    this.state = {...INITIAL_STATE};
  }

  onSubmit = (event) => {
    const {email} = this.state;
    const {history} = this.props;

    auth.doPasswordReset(email)
    .then(() => {
      this.setState(() => ({...INITIAL_STATE}));
      history.push(routes.SIGN_IN);
    })
    .catch(error => {
      this.setState(updateByPropertyName('error', error));
    });

    event.preventDefault();
  };

  render() {
    const {classes} = this.props;
    const {email, error} = this.state;
    const isInvalid = email === '';
    return (
        <div className={classes.root}>
          <form onSubmit={this.onSubmit} className={classes.form}>
            <Typography className={classes.text} variant="display1">
              Reset Password
            </Typography>
            <ListItem>
              <FormControl
                  className={classes.textField}>
                <InputLabel
                    htmlFor="email">Email Address</InputLabel>
                <Input
                    id="email"
                    type={'text'}
                    value={email}
                    onChange={event => this.setState(
                        updateByPropertyName('email',
                            event.target.value))}/>
              </FormControl>
            </ListItem>
            <ListItem>
              <Button className={classes.button}
                      variant="raised"
                      color="primary"
                      disabled={isInvalid}
                      type="submit">
                Reset
              </Button>
            </ListItem>
            {error && <p>{error.message}</p>}
          </form>
        </div>
    )
  }
};

const PasswordForgetLink = () =>
    <Link to={routes.PASSWORD_FORGET}>Forgot Password?</Link>;

export default withRouter(
    withStyles(styles, {withTheme: true})(PasswordForgetPage));

export {PasswordForgetLink,};
