import { memo } from 'react';
import { SelectOption } from './type.ts';

export type OptionProps = {
  onClick: (val: SelectOption | undefined) => void
  dataType: string
  children: React.ReactNode
  dataOption: SelectOption
}
function OptionComponent(props: OptionProps) {
  const {
    onClick,
    dataType,
    children,
    dataOption,
  } = props;

  const clickHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();
    onClick(dataOption);
  };

  const keyDownHandler = (e: React.KeyboardEvent<HTMLLIElement>) => {
    e.stopPropagation();
    onClick(dataOption);
  };

  return (
    <li
      className="pt-3 pl-4"
      role="presentation"
      onKeyDown={keyDownHandler}
      onClick={clickHandler}
      data-option={dataOption}
      data-type={dataType}
    >
      {children}
    </li>
  );
}

const Option = memo(OptionComponent);
export default Option;
