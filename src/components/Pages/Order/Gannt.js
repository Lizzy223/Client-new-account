import React from 'react'
import { Chart } from "react-google-charts";
import { Link } from 'react-router-dom';

const columns = [
  { type: "string", label: "Task ID" },
  { type: "string", label: "Task Name" },
  { type: "string", label: "Resource" },
  { type: "date", label: "Start Date" },
  { type: "date", label: "End Date" },
  { type: "number", label: "Duration" },
  { type: "number", label: "Percent Complete" },
  { type: "string", label: "Dependencies" },
];

const rows = [
  [
    "Research",
    "Find sources",
    null,
    new Date(2015, 0, 1),
    new Date(2015, 0, 5),
    null,
    100,
    null,
  ],
  [
    "Write",
    "Write paper",
    "write",
    null,
    new Date(2015, 0, 9),
    3 * 24 * 60 * 60 * 1000,
    25,
    "Research,Outline",
  ],
  [
    "Cite",
    "Create bibliography",
    "write",
    null,
    new Date(2015, 0, 7),
    1 * 24 * 60 * 60 * 1000,
    20,
    "Research",
  ],
  [
    "Complete",
    "Hand in paper",
    "complete",
    null,
    new Date(2015, 0, 10),
    1 * 24 * 60 * 60 * 1000,
    0,
    "Cite,Write",
  ],
  [
    "Outline",
    "Outline paper",
    "write",
    null,
    new Date(2015, 0, 6),
    1 * 24 * 60 * 60 * 1000,
    100,
    "Research",
  ],
];


export const data = [columns, ...rows];

export const options = {
  gantt: {
    criticalPathEnabled: false, // Critical path arrows will be the same as other arrows.
    arrow: {
      angle: 100,
      width: 2,
      color: "grey",
      radius: 0,
    },
  },
};

const Gannt = () => {
  return (
    <main>
        <div class='cards container-fluid p-5'>
            <div class='row'>
           <Link to='/order/chart' class='text-dark mr-2'> <i class='fa fa-arrow-left'/></Link>
            <h3 class='mb-4'>Gantt chart</h3> <hr/>
                <div class='col-md-12'>
                <Chart
      chartType="Gantt"
      width="100%"
      height="70%"
      data={data}
      options={options}
    />
                </div>            
            </div>
        </div>
    </main>
  )
}

export default Gannt