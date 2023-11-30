import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const Circularchart = ({ fats, protein, carbs }) => {
  const data = {
    labels: ['Fats', 'Protein', 'Carbs'],
    datasets: [
      {
        data: [fats, protein, carbs],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const options = {
    cutoutPercentage: 70, // Adjust the cutout to control the thickness of the circular chart
  };

  return <Doughnut data={data} options={options} />;
};

export default Circularchart;
