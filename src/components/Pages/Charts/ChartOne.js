import React, { Component } from "react";
import Chart from "react-apexcharts";

class ChartOne extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          },
          plotOptions: {
            column: {
                borderRadius: 10  // How to make it only for top side. Don't apply it to bottom side ? 
            }
        }
        },
        plotOptions: {
          column: {
            borderRadiusTopLeft: 5,
            borderRadiusTopRight: 5,
          },
        },
       
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          }
        ]
      };
      
    }
  
    render() {
      
      return (
        <div className="app">
          <div className="row">
            <div className="mixed-chart">
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="bar"
                width="300"
                style={{
                  borderTopLeftRadius: '50% !important',
                  borderTopRightRadius:'50% !important',
                  borderRadius:20
                }}
              />
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default ChartOne;
  