import React from 'react';
import PropTypes from 'prop-types';
import * as routes from "../../constants/routes";
import withStyles from "@material-ui/core/styles/withStyles";
import NotFound from "./NotFound";
import {Link, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import {Icon, Layout, Menu} from 'antd';
import MapContainer from "../../containers/Map/MapContainer";
import DatabaseContainer from "../../containers/Database/DatabaseContainer";
import SettingsContainer from "../../containers/Settings/SettingsContainer";

const {Header, Content, Footer, Sider} = Layout;

const styles = theme => ({
  sider: {
    minHeight: '800px',
  },
  header: {
    display: 'flex',
    justifyContent: 'flex-end',
    background: '#fff',
  },
  content: {
    margin: '24px 16px 0',
  },
  menu: {
    textAlign: 'left',
  },
  footer: {
    textAlign: 'center',
  },
  logo: {
    height: '100px',
    background: 'url(/logo.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    backgroundPosition: 'center center',
    margin: '15px',
    borderRadius: '5px',
  },
  selector: {},
});

class MainPage extends React.Component {
  state = {
    open: false,
  };

  handleLogout = () => {
    this.props.logOut();
  };

  componentDidMount() {
    this.props.fetchCellMapData();
  };

  render() {
    const {classes} = this.props;
    return (
        <Layout>
          <Sider
              className={classes.sider}
              breakpoint="lg"
              collapsedWidth="0"
              onBreakpoint={(broken) => {
              }}
              onCollapse={(collapsed, type) => {
              }}>
            <div className={classes.logo}/>
            <Menu className={classes.menu} theme="dark" mode="vertical-left"
                  defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Link to={routes.MAP}>
                  <Icon type="compass"/>
                  <span className="nav-text">Cell Map</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to={routes.DATABASE}>
                  <Icon type="database"/>
                  <span className="nav-text">Database</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to={routes.SETTINGS}>
                  <Icon type="setting"/>
                  <span className="nav-text">Settings</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header className={classes.header}>
              <Menu
                  theme="light"
                  mode="horizontal"
                  defaultSelectedKeys={['1']}
                  style={{lineHeight: '64px'}}
              >
                <Menu.Item key="1" onClick={this.handleLogout}>
                  Log Out
                </Menu.Item>
              </Menu>
            </Header>
            <Content className={classes.content}>
              <Switch>
                <Route exact path={routes.MAP}
                       component={() => <MapContainer/>}/>
                <Route exact path={routes.DATABASE}
                       component={() => <DatabaseContainer/>}/>
                <Route exact path={routes.SETTINGS}
                       component={() => <SettingsContainer/>}/>
                <Redirect from={routes.LANDING} to={routes.MAP}/>
                <Route path="*" component={() => <NotFound/>}/>
              </Switch>
            </Content>
            <Footer className={classes.footer}>
              Alex Ahn ©2018
            </Footer>
          </Layout>
        </Layout>
    );
  }
}

MainPage.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  logOut: PropTypes.func.isRequired,
  fetchCellMapData: PropTypes.func.isRequired,
};

export default withRouter(withStyles(styles, {withTheme: true})(MainPage));