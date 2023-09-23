import { memo } from 'react';

export type OptionProps = {
  onClick: () => void
  dataType: string
  children: React.ReactNode
}
function OptionComponent(props: OptionProps) {
  const {
    onClick,
    dataType,
    children,
  } = props;

  const clickHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();
    onClick();
  };

  const keyDownHandler = (e: React.KeyboardEvent<HTMLLIElement>) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <li
      className="pt-3 pl-4"
      role="presentation"
      onKeyDown={keyDownHandler}
      onClick={clickHandler}
      data-type={dataType}
    >

      {children}
    </li>
  );
}

const Option = memo(OptionComponent);
export default Option;
