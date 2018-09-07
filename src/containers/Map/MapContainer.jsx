import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import Map from "../../components/Map/Map";

const mapStateToProps = state => ({
  user: state.auth.user,
  token: state.auth.token,
  data: state.model.data,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Map)
