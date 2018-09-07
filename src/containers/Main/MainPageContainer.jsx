import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import MainPage from "../../components/Main/MainPage";
import {logOut} from "../../actions/Auth";
import {fetchCellMapData} from "../../actions/Model";

const mapStateToProps = (state) => ({
  user: state.auth.user,
  token: state.auth.token,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    logOut,
    fetchCellMapData
  }, dispatch);
};

// const authCondition = (authUser) => !!authUser;
// export default compose(withAuthorization(authCondition), connect(mapStateToProps, mapDispatchToProps))(MainPage);

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
