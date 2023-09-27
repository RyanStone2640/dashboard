import React, { memo, useState } from 'react';

import cn from '@/utilities/twMerge.ts';
import arrowDropDon from '@/assets/arrow-drop-down.svg';
import xMark from '@/assets/xMark.svg';
import Option from './option.tsx';
import { SelectOption, SelectType, OptionChange } from './type.ts';

export type SelectProps = {
  disabled?: boolean
  placeholder: string
  options?: SelectOption[] | []
  selectType: SelectType
  onChange: OptionChange
  selectValue: SelectOption | undefined
}

function SelectComponent(props: SelectProps) {
  const {
    disabled,
    placeholder,
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

  const clearValueHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onChange(undefined, selectType.value);
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={toggleOptionHandler}
      onClick={toggleOptionHandler}
      onBlur={clearOptionHandler}
      before-dynamic-value={selectType?.name}
      className={cn(
        'w-40 h-10 relative border rounded  pt-3 pb-2 px-3 flex gap-4 cursor-pointer whitespace-nowrap',
        'before:block before:absolute before:text-xs before:-top-2 before:mx-1 before:bg-white',
        'focus:border-myColor-#651FFF focus:border-1 focus:before:text-myColor-#651FFF',
        'before:content-[attr(before-dynamic-value)]',
        { 'pointer-events-none border-myColor-#B6B6B6 text-myColor-#B6B6B6 before:text-myColor-#B6B6B6': disabled },
      )}

    >
      <span data-placeholder={placeholder} className={cn('flex-grow', 'empty:before:content-[attr(data-placeholder)]')}>{selectValue?.label}</span>
      <div className="flex gap-3">
        <button className={cn({ hidden: !selectValue?.value })} type="button" onClick={clearValueHandler}>
          <img src={xMark} alt="" />
        </button>
        <button className="pointer-events-none" type="button">
          <img src={arrowDropDon} alt="" />
        </button>
      </div>
      <ul className={cn(
        'absolute top-10 left-0 rounded w-full max-h-64 overflow-y-auto z-10 bg-myColor-#FFFDFD shadow-lg shadow-slate-300',
        { hidden: toggle },
      )}
      >
        {options?.map((item: SelectOption) => (
          <Option
            onClick={onChange}
            optionType={selectType?.value}
            option={item}
            key={item.value}
          />
        ))}
      </ul>
    </div>
  );
}

SelectComponent.defaultProps = {
  options: [],
  disabled: false,
};

const Select = memo(SelectComponent);

export default Select;
