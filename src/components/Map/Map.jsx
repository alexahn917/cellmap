import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography/Typography";
import Divider from "@material-ui/core/Divider/Divider";
import {AutoComplete, Button, Col, Row} from "antd";
import Graph from 'react-graph-vis';
import {Card, CardActions, CardContent} from "@material-ui/core";
import Loader from "../Main/Loader";

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '600px',
    margin: theme.spacing.unit * 2,
  },
  header: {
    display: 'flex',
    alignItems: 'baseline',
  },
  divider: {
    margin: '20px 0 20px 0',
  },
  graphContainer: {
    margin: theme.spacing.unit * 2,
    border: 'solid',
    borderWidth: '1px',
    borderRadius: '20px',
    borderColor: 'aliceblue',
    backgroundColor: 'rgba(190,190,240,0.2)',
    boxShadow: '3px 4px #c7c7c7',
  },
  card: {
    borderRadius: '20px',
    margin: theme.spacing.unit * 2,
  },
  cardAction: {
    display: 'flex',
    justifyContent: 'center',
  },
});

const options = {
  layout: {
    hierarchical: true
  },
  nodes: {
    color: {
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

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      targetNodes: null,
      targetEdges: null,
      network: null,
    };
    this.graph = React.createRef();
  }

  onSelect = (event) => {
    const {nodes, edges} = event;
    this.setState({
      targetNodes: nodes,
      targetEdges: edges,
    })
  };

  onSearchCell = (cellID) => {
    this.graph.current.Network.selectNodes([cellID]);
    this.setState({
      targetNodes: this.graph.current.Network.getSelectedNodes(),
      targetEdges: [],
    })
  };

  onClickDetail = () => {
    alert('not implemented yet');
  };

  render() {
    const {classes, data} = this.props;

    if (!data) {
      return <Loader/>
    }

    const nodesSelected = this.state.targetNodes
        && this.state.targetNodes.length > 0;
    const edgesSelected = this.state.targetEdges
        && this.state.targetEdges.length > 0;

    return (
        <div className={classes.container}>
          <div>
            <Row gutter={23} className={classes.header}>
              <Col xs={12} sm={12} md={12}>
                <Typography className={classes.title} variant="display2"
                            align="left">
                  <b>{'Map'}</b>
                </Typography>
              </Col>
              <Col xs={12} sm={12} md={12}>
                <AutoComplete
                    dataSource={data.nodes.map((item) => {return {value: item.id, text: item.label}})}
                    style={{width: 200, color: 'black'}}
                    onSelect={this.onSearchCell}
                    filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                    placeholder="search"
                />
              </Col>
            </Row>
            <Divider className={classes.divider}/>
            <Col xs={24} sm={24} md={12}>
              <div className={classes.graphContainer}>
                {data ? <Graph
                    ref={this.graph}
                    graph={data}
                    options={options}
                    events={{
                      select: this.onSelect
                    }}
                /> : null}
              </div>
            </Col>
            <Col xs={24} sm={24} md={12}>
              {nodesSelected || edgesSelected ?
                  <Card className={classes.card} raised>
                    <CardContent>
                      {nodesSelected ? <div>
                        <Typography variant="display2"
                                    className={classes.title}
                                    color="textSecondary">
                          Cells
                        </Typography>
                        <Typography variant="subheading"
                                    className={classes.title}
                                    color="textSecondary">
                          {this.state.targetNodes.map((node) =>
                              <div key={node}>
                                {node}
                              </div>
                          )}
                        </Typography>
                      </div> : null}
                      {edgesSelected ? <div>
                        <Typography variant="display2"
                                    className={classes.title}
                                    color="textSecondary">
                          Markers
                        </Typography>
                        <Typography variant="subheading"
                                    className={classes.title}
                                    color="textSecondary">
                          {this.state.targetEdges.map((edge) =>
                              <div key={edge}>
                                {edge}
                              </div>
                          )}
                        </Typography>
                      </div> : null}
                    </CardContent>
                    <CardActions className={classes.cardAction}>
                      <Button type="secondary"
                              onClick={this.onClickDetail}>
                        Details
                      </Button>
                    </CardActions>
                  </Card>
                  : null
              }
            </Col>
          </div>
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
