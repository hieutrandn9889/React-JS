import React, { Component } from 'react';

class SizeSetting extends Component {
  render() {
    return (
    <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">Size : 15px</h3>
        </div>
        <div className="panel-body">
          <button type="button" className="btn btn-success">Giam</button>
          <button type="button" className="btn btn-success">Tang</button>
        </div>
    </div>
    );
  }
}

export default SizeSetting;
