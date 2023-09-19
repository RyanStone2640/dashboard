import { useState } from 'react';

import cn from '@/utilities/twMerge.ts';
import arrowDropDon from '@/assets/arrow-drop-down.svg';
import xMark from '@/assets/xMark.svg';
import Option from './option.tsx';

type SelectOption = {
  label: string
  value: string | number
}

type SelectLabel = {
  name: string
  value: string
}

export type SelectProps = {
  options?: SelectOption[] | []
  selectLabel: SelectLabel
  onChange: (e: never) => void
  value: string
}

function Select(props: SelectProps) {
  const {
    options,
    selectLabel,
    onChange,
    value,
  } = props;
  const [toggle, setToggle] = useState(false);

  const toggleOptionHandler = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div
      role="button"
      tabIndex={0}
      before-dynamic-value={selectLabel?.name}
      className={cn(`min-w-5rem  relative border rounded  pt-3 pb-2 px-3 flex gap-4 cursor-pointer
        before:block before:absolute before:text-xs before:-top-2 before:mx-1 before:bg-white
        focus:border-myColor-purple focus:border-1 focus: before: text-myColor-purple`, 'before:content-[attr(before-dynamic-value)]')}
      onKeyDown={toggleOptionHandler}
      onClick={toggleOptionHandler}
    >
      <span className="flex-grow">{value}</span>
      <div className="flex gap-3">
        <button type="button">
          <img src={xMark} alt="" />
        </button>
        <button className="pointer-events-none" type="button">
          <img src={arrowDropDon} alt="" />
        </button>
      </div>
      <ul className={cn(
        'absolute top-10 left-0 rounded w-full max-h-64 overflow-y-auto bg-myColor-#FFFDFD shadow-lg shadow-slate-300',
        { hidden: toggle },
      )}
      >
        {options?.map((item) => (
          <Option
            onKeyDown={toggleOptionHandler}
            onClick={onChange}
            dataType={selectLabel?.value}
            key={item.value}
          >
            {item?.value}
          </Option>
        ))}
      </ul>
    </div>
  );
}

Select.defaultProps = {
  options: [],
};

export default Select;
