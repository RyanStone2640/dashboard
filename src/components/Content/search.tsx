import { useCallback, useEffect, useState } from 'react';

import Select from '@/components/UI/Select/index.tsx';
import { yearData, cityData, areaData } from '@/data/data.ts';
import { SelectOption } from '../UI/Select/type.ts';
import { City } from './type.ts';

const yearSelectTypeObj = { name: '年份', value: 'year' };
const citySelectTypeObj = { name: '縣/市', value: 'city' };
const districtSelectTypeObj = { name: '區', value: 'district' };

type Data = {
  year: SelectOption,
  city: SelectOption | undefined,
  district: SelectOption | undefined,
}

function Content() {
  const [data, setData] = useState<Data>({
    year: { label: '110', value: '110' },
    city: undefined,
    district: undefined,
  });
  const [districtOptions, setDistrictOptions] = useState<SelectOption[]>([]);

  const changeHandler = useCallback((val: SelectOption | undefined, type: string) => {
    setData((prev) => ({
      ...prev,
      [type]: val,
    }));
  }, []);

  const submitHandler = async () => {
    const url = `https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/${data.year?.value}?COUNTY=${data.city?.value}&TOWN=${data.district?.value}`;
    const res = await fetch(url);
    const resData = await res.json();
    console.log(resData);
  };

  useEffect(() => {
    if (data.city?.value) {
      const handlerDistrictData = areaData[data.city?.value as City].map((item) => (
        { label: item, value: item }
      ));
      setDistrictOptions(handlerDistrictData);
    }
  }, [data.city?.value]);

  return (
    <div className=" flex-grow flex flex-col items-center">
      <h2 className="text-3xl mb-12">人口數、戶數按戶別及性別統計</h2>
      <div className="flex gap-3">
        <Select
          selectType={yearSelectTypeObj}
          placeholder="請選擇年份"
          options={yearData}
          onChange={changeHandler}
          selectValue={data.year}
        />
        <Select
          selectType={citySelectTypeObj}
          placeholder="請選擇縣/市"
          options={cityData}
          onChange={changeHandler}
          selectValue={data.city}
        />
        <Select
          selectType={districtSelectTypeObj}
          placeholder={data.city === undefined ? '請先選擇縣/市' : '請選擇'}
          options={districtOptions}
          onChange={changeHandler}
          selectValue={data.district}
          disabled={data.city === undefined}
        />
        <button
          className="w-20 h-9 pt-3 pb-3 pl-4 pr-4 flex justify-center items-center bg-myColor-gray rounded"
          type="submit"
          disabled={!data.year?.value || !data.city?.value || !data.district?.value}
          onClick={submitHandler}
        >
          SUBMIT
        </button>
      </div>
      <div className="
      relative mt-12 pt-2 pb-2 pl-3 pr-3 border rounded-2xl"
      >
        搜尋結果
      </div>
    </div>

  );
}

export default Content;
