import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography/Typography";
import Divider from "@material-ui/core/Divider/Divider";
import {Col} from "antd";
import Graph from 'react-graph-vis';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '600px',
  },
  divider: {
    margin: '20px 0 20px 0',
  },
  graphContainer: {
    border: 'solid',
    borderWidth: '1px',
    borderRadius: '40px',
    borderColor: 'aliceblue',
    backgroundColor: 'rgba(190,190,240,0.2)',
    boxShadow: '3px 4px #c7c7c7',
  },
});

const options = {
  layout: {
    hierarchical: true
  },
  nodes: {
    color: {
      // color: "#ffbc50",
      highlight: "#ff7049",
      hover: "#d48c83",
    },
    font: {
      face: 'Jaldi'
    }
  },
  edges: {
    color: {
      color: "#3d679d",
      highlight: "#5991e1",
      hover: "#56abd4",
    },
    font: {
      face: 'Jaldi'
    }
  },
  interaction: {
    hover: true,
  },
  height: '500px',
  width: '100%',
  autoResize: true,
};

const events = {
  select: function(event) {
    var { nodes, edges } = event;
    console.log(event)
  },
  hoverNode: function(event) {

  },
  hoverEdge: function(event) {

  },
};

class Map extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    const {classes, data} = this.props;

    return (
        <div className={classes.container}>
          <Col span={20} offset={2}>
            <Typography className={classes.title} variant="display2" align="left">
              <b>{'Map'}</b>
            </Typography>
            <Divider className={classes.divider}/>
            <div className={classes.graphContainer}>
              {data ?
                <Graph
                    graph={data}
                    options={options}
                    events={events}
                />
                : null}
            </div>
          </Col>
        </div>
    );
  }
}

Map.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  data: PropTypes.object,
};

export default withStyles(styles, {withTheme: true})(Map);
