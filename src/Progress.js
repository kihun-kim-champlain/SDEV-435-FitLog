// src/Progress.js
import React from 'react';
import './Progress.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Progress = () => {
  return (
    <div className="flex-container-progress">
      <div className="upper-container">
        <div className="goals">
          <div className="goals-title">Goals</div>
          <ul>
            <li>&#123;goal_1&#125;</li>
            <li>&#123;goal_2&#125;</li>
            <li>&#123;goal_3&#125;</li>
            <li>&#123;goal_4&#125;</li>
            <li>&#123;goal_5&#125;</li>
          </ul>
        </div>
      </div>
      <div className='graph-container'>
        <div className="graph-title"> Graph </div>
        <ResponsiveContainer className="graph" width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="uv" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Progress;
