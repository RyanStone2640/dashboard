import { useCallback, useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

import Select from '@/components/UI/Select/index.tsx';
import { yearData, cityData, areaData } from '@/data/data.ts';
import cn from '@/utilities/twMerge.ts';
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

export default function Search() {
  const [data, setData] = useState<Data>({
    year: { label: '110', value: '110' },
    city: undefined,
    district: undefined,
  });
  const [districtOptions, setDistrictOptions] = useState<SelectOption[]>([]);
  const isBtnDisabled = !data.year?.value || !data.city?.value || !data.district?.value;
  const navigate = useNavigate();
  const { year, city, district } = useParams();

  const changeHandler = useCallback((val: SelectOption | undefined, type: string) => {
    setData((prev) => ({
      ...prev,
      district: type === 'city' ? undefined : prev.district,
      [type]: val,
    }));
  }, []);

  const submitHandler = async () => {
    navigate(`/${data.year?.label}/${data.city?.label}/${data.district?.label}`);
  };

  useEffect(() => {
    if (!year || !city || !district) {
      return;
    }

    setData({
      year: { label: year, value: year },
      city: { label: city, value: city },
      district: { label: district, value: district },
    });
  }, [year, city, district]);

  useEffect(() => {
    if (data.city?.value) {
      const handlerDistrictData = areaData[data.city?.value as City].map((item) => (
        { label: item, value: item }
      ));
      setDistrictOptions(handlerDistrictData);
    }
  }, [data.city?.value]);

  return (
    <div className={cn(
      'flex-grow flex flex-col items-center',
      'phone:block phone:p-1.5',
    )}
    >
      <h2 className="text-3xl mb-12 phone:text-2xl phone:text-center">人口數、戶數按戶別及性別統計</h2>
      <div className="flex gap-3 phone:flex-col">
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
          className="phone:w-full"
        />
        <Select
          selectType={districtSelectTypeObj}
          placeholder={data.city === undefined ? '請先選擇縣/市' : '請選擇'}
          options={districtOptions}
          onChange={changeHandler}
          selectValue={data.district}
          className="phone:w-full"
          disabled={data.city === undefined}
        />
        <button
          className={cn(
            'w-20 h-9 pt-3 pb-3 pl-4 pr-4 flex justify-center items-center bg-myColor-gray rounded',
            { 'bg-myColor-#651FFF': !isBtnDisabled },
            'phone:w-full',
          )}
          type="submit"
          disabled={isBtnDisabled}
          onClick={submitHandler}
        >
          SUBMIT
        </button>
      </div>
      <div className={cn(
        'relative mt-12 py-2 px-3 bg-white text-xs text-myColor-#651FFF text-center border border-myColor-#651FFF rounded-2xl w-20',
        'phone: mx-auto',
      )}
      >
        搜尋結果
      </div>
      <div id="result">
        <Outlet />
      </div>
    </div>

  );
}
