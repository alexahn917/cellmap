import React from 'react';
import {connect} from 'react-redux';
import {firebase} from '../../firebase/index';
// import {setAuthUserAsync} from "../../actions/Auth";
import Loader from "../../components/Main/Loader";

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    componentDidMount() {
      const {onSetAuthUser} = this.props;
      firebase.auth.onAuthStateChanged(authUser => {
        authUser
            ? onSetAuthUser(authUser)
            : onSetAuthUser(null);
      });
    }

    render() {
      const {loading} = this.props;
      return (
          <div>
            {loading ? <Loader/> : <Component/>}
          </div>
      );
    }
  }

  const mapStateToProps = (state) => ({
    loading: state.auth.loading,
  });

  const mapDispatchToProps = (dispatch) => ({
    onSetAuthUser: (user) => {
      // TODO: migrate from MCMS auth to Firebase Auth when IAM is ready
      // dispatch(setAuthUserAsync(user));
    },
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithAuthentication);
};

export default withAuthentication;