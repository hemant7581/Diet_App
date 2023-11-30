import React from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Carbs',
    uv: 300,
    fill: '#8884d8',
  },
  {
    name: 'Protein',
    uv: 6.8,
    fill: '#83a6ed',
  },
  {
    name: 'Fats',
    uv: 120,
    fill: '#8dd1e1',
    backgroundFill: '#F18404',
  },
];

const RadialChart = () => {
  const legendclassName = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
    borderRadius: '50%',
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="50%" outerRadius="80%"  barSize={20} data={data}>
          <RadialBar minAngle={15} label={{ position: 'insideStart', fill: 'black' }} background clockWise dataKey="uv" />
          <Legend iconSize={15} layout="vertical" verticalAlign="middle" wrapperclassName={legendclassName} />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadialChart;



