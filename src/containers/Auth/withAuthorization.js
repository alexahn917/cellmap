import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'recompose';
import {withRouter} from 'react-router-dom';

import {firebase} from '../../firebase/index';
import * as routes from '../../constants/routes';

const withAuthorization = (condition) => (Component) => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        if (!condition(authUser)) {
          this.props.history.push(routes.SIGN_IN);
        }
      });
    }

    render() {
      return this.props.user ? <Component/> : null;
    }
  }

  const mapStateToProps = (state) => ({
    user: state.auth.user,
  });

  return compose(
      withRouter,
      connect(mapStateToProps),
  )(WithAuthorization);
};

export default withAuthorization;