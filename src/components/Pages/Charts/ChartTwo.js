import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class ChartTwo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {},
      sers: [44, 55, 41, 17, 15],
      labels: ['A', 'B', 'C', 'D', 'E']
    }
  }

  render() {

    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.sers} type="donut" width="330" />
      </div>
    );
  }
}

export default ChartTwo;