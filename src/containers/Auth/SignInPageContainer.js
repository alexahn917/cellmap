import {connect} from 'react-redux';
import SignInPage from "../../components/Auth/SignIn"
import {bindActionCreators} from "redux";
// import {authComplete, authLoad} from "../../actions/Auth";

const mapStateToProps = (state) => ({
  user: state.auth.user,
  loading: state.auth.loading,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    // authLoad,
    // authComplete,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
