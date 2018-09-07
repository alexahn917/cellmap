import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import Settings from "../../components/Settings/Settings";

const mapStateToProps = state => ({
  user: state.auth.user,
  token: state.auth.token,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
