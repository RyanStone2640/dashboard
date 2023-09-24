import { useCallback, useEffect, useState } from 'react';

import Select from '@/components/UI/Select/index.tsx';
import { yearData, cityData, areaData } from '@/data/data.ts';
import { SelectOption } from '../UI/Select/type.ts';

type City = '臺北市' | '新北市' | '基隆市' | '桃園市' | '新竹縣' | '新竹市' | '苗栗縣' | '臺中市' | '南投縣' | '彰化縣' | '雲林縣' | '嘉義縣' | '嘉義市' | '臺南市' | '高雄市' | '屏東縣' | '宜蘭縣' | '花蓮縣' | '臺東縣' | '澎湖縣' | '金門縣' | '連江縣';

const yearSelectTypeObj = { name: '年份', value: 'year' };
const citySelectTypeObj = { name: '縣/市', value: 'year' };
const districtSelectTypeObj = { name: '區', value: 'district' };

function Content() {
  const [year, setYear] = useState<SelectOption | undefined>({ label: '110', value: '110' });
  const [city, setCity] = useState<SelectOption | undefined>(undefined);
  const [district, setDistrict] = useState<SelectOption | undefined>(undefined);
  const [districtOptions, setDistrictOptions] = useState<SelectOption[]>([]);

  const changeYearHandler = useCallback((val: SelectOption | undefined) => {
    setYear(val);
  }, []);

  const changeCityHandler = useCallback((val: SelectOption | undefined) => {
    setCity(val);
    setDistrict(undefined);
  }, []);

  const changeDistrictHandler = useCallback((val: SelectOption | undefined) => {
    setDistrict(val);
  }, []);

  useEffect(() => {
    if (city?.value) {
      const handlerDistrictData = areaData[city?.value as City].map((item) => (
        { label: item, value: item }
      ));
      setDistrictOptions(handlerDistrictData);
    }
  }, [city?.value]);

  return (
    <div className=" flex-grow flex flex-col items-center">
      <h2 className="text-3xl mb-12">人口數、戶數按戶別及性別統計</h2>
      <div className="flex gap-3">
        <Select
          selectType={yearSelectTypeObj}
          placeholder="請選擇年份"
          options={yearData}
          onChange={changeYearHandler}
          selectValue={year}
        />
        <Select
          selectType={citySelectTypeObj}
          placeholder="請選擇縣/市"
          options={cityData}
          onChange={changeCityHandler}
          selectValue={city}
        />
        <Select
          selectType={districtSelectTypeObj}
          placeholder={city === undefined ? '請先選擇縣/市' : '請選擇'}
          options={districtOptions}
          onChange={changeDistrictHandler}
          selectValue={district}
          disabled={city === undefined}
        />
        <button className="w-20 h-9 pt-3 pb-3 pl-4 pr-4 flex justify-center items-center  bg-myColor-gray rounded" type="submit">SUBMIT</button>
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
