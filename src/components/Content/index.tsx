import { useEffect, useState } from 'react';

import brand from '@/assets/brand.png';
import Select from '@/components/UI/Select/index.tsx';
import { SelectOption } from '../UI/Select/type.ts';

const yearData = [
  { label: '106', value: '106' },
  { label: '107', value: '107' },
  { label: '108', value: '108' },
  { label: '109', value: '109' },
  { label: '110', value: '110' },
  { label: '111', value: '111' },
];

function Content() {
  const [year, setYear] = useState<SelectOption | undefined>({ label: '110', value: '110' });
  const [city, setCity] = useState<SelectOption | undefined>({ label: '台北市', value: 'taipei' });
  const [district, setDistrict] = useState<SelectOption | undefined>({ label: '台北市', value: 'taipei' });
  const changeHandler = (val: SelectOption | undefined) => {
    setCity(val);
  };
  const changeYearHandler = (val: SelectOption | undefined) => {
    setYear(val);
  };
  const changeDistrictHandler = (val: SelectOption | undefined) => {
    setDistrict(val);
  };

  useEffect(() => {
    const fetchHandler = async () => {
      const res = await fetch(`https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/${year?.value}`);
      const data = await res.json();
      console.log(data);
    };
    fetchHandler();
  }, [year]);

  return (

    <div className="mt-2 flex">
      <div className="h-4/5">
        <img
          className="h-full"
          src={brand}
          alt="brand"
        />
      </div>
      <div className=" flex-grow flex flex-col items-center">
        <h2 className="text-3xl mb-12">人口數、戶數按戶別及性別統計</h2>
        <div className="flex gap-3">
          <Select
            selectType={{ name: '年份', value: 'year' }}
            placeholder="請選擇年份"
            options={yearData}
            onChange={changeYearHandler}
            selectValue={year}
          />
          <Select
            selectType={{ name: '縣市', value: 'year' }}
            placeholder="請選擇縣/市"
            options={[{ label: 'test', value: 'test' }, { label: '1', value: '1' }, { label: '2', value: '2' }]}
            onChange={changeHandler}
            selectValue={city}
            disabled={!!true}
          />
          <Select
            selectType={{ name: '區', value: 'district' }}
            placeholder="請先選擇縣/市"
            options={[{ label: 'test', value: 'test' }, { label: '1', value: '1' }, { label: '2', value: '2' }]}
            onChange={changeDistrictHandler}
            selectValue={district}
            disabled={!!true}
          />
          <button className="w-20 h-9 pt-3 pb-3 pl-4 pr-4 flex justify-center items-center  bg-myColor-gray rounded" type="submit">SUBMIT</button>
        </div>
        <div className="
          relative mt-12 pt-2 pb-2 pl-3 pr-3 border rounded-2xl"
        >
          搜尋結果
        </div>
      </div>
    </div>

  );
}

export default Content;
