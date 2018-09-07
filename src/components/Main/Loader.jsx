import React from "react";
import {CircularProgress} from "@material-ui/core";

class Loader extends React.Component {
  render() {
    return (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '200px',
        }}>
          <CircularProgress/>
        </div>
    )
  }
}

export default Loader