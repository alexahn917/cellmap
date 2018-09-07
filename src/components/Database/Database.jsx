import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography/Typography";
import Divider from "@material-ui/core/Divider/Divider";
import {Col} from "antd";

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '800px',
  },
  divider: {
    margin: '20px 0 20px 0',
  }
});

class Database extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    const {classes} = this.props;
    return (
        <div className={classes.container}>
          <Col span={20} offset={2}>
            <Typography className={classes.title} variant="display2" align="left">
              <b>{'Database'}</b>
            </Typography>
            <Divider className={classes.divider}/>
          </Col>
        </div>
    );
  }
}

Database.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Database);
