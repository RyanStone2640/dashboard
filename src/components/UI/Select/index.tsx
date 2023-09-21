import React, { memo, useState } from 'react';

import cn from '@/utilities/twMerge.ts';
import arrowDropDon from '@/assets/arrow-drop-down.svg';
import xMark from '@/assets/xMark.svg';
import Option from './option.tsx';
import { SelectOption, SelectType } from './type.ts';

export type SelectProps = {
  options?: SelectOption[] | []
  selectType: SelectType
  onChange: (val: SelectOption | undefined) => void
  selectValue: SelectOption | undefined
}

function SelectComponent(props: SelectProps) {
  const {
    options,
    selectType,
    onChange,
    selectValue,
  } = props;
  const [toggle, setToggle] = useState(true);

  const toggleOptionHandler = () => {
    setToggle((prev) => !prev);
  };

  const clearOptionHandler = () => {
    setToggle(true);
  };

  const clearValueHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onChange(undefined);
  };

  return (
    <div
      onKeyDown={toggleOptionHandler}
      onClick={toggleOptionHandler}
      onBlur={clearOptionHandler}
      role="button"
      tabIndex={0}
      before-dynamic-value={selectType?.name}
      className={cn(`w-40 h-10  relative border rounded  pt-3 pb-2 px-3 flex gap-4 cursor-pointer
        before:block before:absolute before:text-xs before:-top-2 before:mx-1 before:bg-white
        focus:border-myColor-purple focus:border-1 focus:before:text-myColor-purple`, 'before:content-[attr(before-dynamic-value)]')}

    >
      <span className="flex-grow">{selectValue?.label}</span>
      <div className="flex gap-3">
        <button className={cn({ hidden: selectValue === undefined })} type="button" onClick={clearValueHandler}>
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
        {options?.map((item: SelectOption) => (
          <Option
            onClick={() => { onChange(item); }}
            dataType={selectType?.value}
            key={item.value}
          >
            {item.value}
          </Option>
        ))}
      </ul>
    </div>
  );
}

SelectComponent.defaultProps = {
  options: [],
};

const Select = memo(SelectComponent);

export default Select;
