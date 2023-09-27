import { memo } from 'react';
import { SelectOption, OptionChange } from './type.ts';

export type OptionProps = {
  onClick: OptionChange
  optionType: string
  option: SelectOption
}
function OptionComponent(props: OptionProps) {
  const {
    onClick,
    optionType,
    option,
  } = props;

  const clickHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();
    onClick(option, optionType);
  };

  const keyDownHandler = (e: React.KeyboardEvent<HTMLLIElement>) => {
    e.stopPropagation();
    onClick(option, optionType);
  };

  return (
    <li
      className="pt-3 pl-4"
      role="presentation"
      onKeyDown={keyDownHandler}
      onClick={clickHandler}
    >
      {option.label}
    </li>
  );
}

const Option = memo(OptionComponent);
export default Option;
