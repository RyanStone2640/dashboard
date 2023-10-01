import { useRef } from 'react';
import { useLoaderData } from 'react-router-dom';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

type ResData = {
  district_code: string,
  household_business_f: string,
  household_business_m: string,
  household_business_total: string,
  household_ordinary_f: string,
  household_ordinary_m: string,
  household_ordinary_total: string,
  household_single_f: string,
  household_single_m: string,
  household_single_total: string,
  site_id: string,
  statistic_yyy: string,
  village: string
}

type LoaderData = {
  responseData: ResData[];
  year: string,
  city: string,
  district: string
};

export default function Result() {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const {
    responseData,
    year,
    city,
    district,
  } = useLoaderData() as LoaderData;
  const filterDataHandler = (resData: ResData[]) => {
    const fetchData = {
      household_single_m: 0,
      household_single_f: 0,
      household_ordinary_m: 0,
      household_ordinary_f: 0,
      household_single_total: 0,
      household_ordinary_total: 0,
    };

    for (let i = 0; i < resData.length - 1; i += 1) {
      const item = resData[i];
      fetchData.household_single_m += (+item.household_single_m);
      fetchData.household_single_f += (+item.household_single_f);
      fetchData.household_ordinary_m += (+item.household_ordinary_m);
      fetchData.household_ordinary_f += (+item.household_ordinary_f);
      fetchData.household_single_total += (+item.household_single_total);
      fetchData.household_ordinary_total += (+item.household_ordinary_total);
    }

    return fetchData;
  };
  const filterData = filterDataHandler(responseData);
  const chartData = {
    household_single: {
      men: filterData.household_single_m,
      women: filterData.household_single_f,
      total: filterData.household_single_total,
    },
    household_ordinary: {
      men: filterData.household_ordinary_m,
      women: filterData.household_ordinary_f,
      total: filterData.household_ordinary_total,
    },
  };

  // chart data
  const columnOptions: Highcharts.Options = {
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
      text: `${year} ${city} ${district}`,
      margin: 40,
    },
    series: [
      {
        name: '男性',
        type: 'column',
        data: [chartData?.household_ordinary?.men, chartData?.household_single?.men],
        color: '#8a2fff',
      },
      {
        name: '女性',
        type: 'column',
        data: [chartData?.household_ordinary?.women, chartData?.household_single?.women],
        color: '#c646ff',
      },
    ],
  };

  const houseTotal = chartData.household_single.total + chartData.household_ordinary.total;
  const householdSingleTotalRate = chartData.household_single.total / houseTotal;
  const householdOrdinaryTotalRate = chartData.household_ordinary.total / houseTotal;
  const pieOption: Highcharts.Options = {
    chart: {
      plotBackgroundColor: undefined,
      plotBorderWidth: undefined,
      plotShadow: false,
      type: 'pie',
    },
    title: {
      text: '戶數統計',
      align: 'center',
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '{point.percentage:.1f} %',
        },
        showInLegend: true,
      },
    },
    series: [
      {
        name: 'Brands',
        colorByPoint: true,
        type: undefined,
        data: [
          {
            name: '獨立生活',
            y: householdSingleTotalRate,
            sliced: true,
            selected: true,
            color: '#5451bf',
          }, {
            name: '共同生活',
            y: householdOrdinaryTotalRate,
            color: '#ba99ff',
          },
        ],
      }],
  };

  return (
    <>
      <HighchartsReact
        highcharts={Highcharts}
        options={columnOptions}
        ref={chartComponentRef}
      />
      <HighchartsReact
        highcharts={Highcharts}
        options={pieOption}
        ref={chartComponentRef}
      />
    </>
  );
}

export async function loader({ params }) {
  const { year, city, district } = params;
  const url = `https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/${year}?COUNTY=${city}&TOWN=${district}`;
  const res = await fetch(url);

  if (res.status === 404) {
    throw new Response('Not Found', { status: 404 });
  }

  const { responseData, responseMessage } = await res.json();
  if (responseMessage === '查無資料') {
    throw new Response('Not Found', { status: 404 });
  }

  return {
    responseData,
    year,
    city,
    district,
  };
}
