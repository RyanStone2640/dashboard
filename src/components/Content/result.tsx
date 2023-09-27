import { useRef } from 'react';

import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function Result({ chartData, chartTitle }: any) {
  console.log(chartTitle)
  const options: Highcharts.Options = {
    chart: {
      type: 'column',
    },
    subtitle: {
      text: '人口數統計',
      style: {
        fontSize: '1rem',
        fontWeight: 'bolder',
        color: 'black',
      },
      y: 50,
    },
    xAxis: {
      categories: [
        '共同生活',
        '獨立生活',
      ],
      crosshair: true,
      title: {
        text: '型態',
        style: {
          fontSize: '1rem',
          fontWeight: 'bolder',
          color: 'black',
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: '數量',
        rotation: 0,
        offset: 0,
        align: 'high',
        y: -20,
        x: -10,
        style: {
          fontSize: '1rem',
          fontWeight: 'bolder',
          color: 'black',
        },
      },
    },
    tooltip: {
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    title: {
      text: chartTitle,
      margin: 40,
    },
    series: [
      {
        name: '男性',
        type: 'column',
        data: [chartData?.householdOrdinary?.men, chartData?.householdSingle?.men],
        color: '#8a2fff',
      },
      {
        name: '女性',
        type: 'column',
        data: [chartData?.householdOrdinary?.women, chartData?.householdSingle?.women],
        color: '#c646ff',
      },
    ],
  };
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartComponentRef}
    />
  );
}

export default Result;
