import { useState } from 'react';

import brand from '@/assets/brand.png';
import Select from '@/components/UI/Select/index.tsx';

function Content() {
  const [year, setYear] = useState('2023');
  const [city, setCity] = useState('台北市');
  const [district, setDistrict] = useState('信義區');

  const changeHandler = (e) => {
    console.log(e.target.dataset.type);
  };

  const dataArr = [
    {
      selectLabel: { name: '年份', value: 'year' },
      options: [{ label: 'test', value: 'test' }, { label: '1', value: '1' }, { label: '2', value: '2' }],
      onChange: changeHandler,
      value: year,
    },
    {
      selectLabel: { name: '縣市', value: 'city' },
      options: [{ label: 'test', value: 'test' }, { label: '1', value: '1' }, { label: '2', value: '2' }],
      onChange: changeHandler,
      value: city,
    },
    {
      selectLabel: { name: '區', value: 'district' },
      options: [{ label: 'test', value: 'test' }, { label: '1', value: '1' }, { label: '2', value: '2' }],
      onChange: changeHandler,
      value: district,
    },
  ];

  return (
    <div className="mt-2 flex">
      <div>
        <img
          src={brand}
          alt="brand"
        />
      </div>
      <div className=" flex-grow flex flex-col items-center">
        <h2 className="text-3xl mb-12">人口數、戶數按戶別及性別統計</h2>
        <div className="flex gap-3">
          {dataArr?.map((item) => (
            <Select
              key={item.value}
              selectLabel={item.selectLabel}
              options={item.options}
              onChange={item.onChange}
              value={item.value}
            />
          ))}
          <button className="bg-slate-600 rounded" type="submit">SUBMIT</button>
        </div>
      </div>
    </div>
  );
}

export default Content;
