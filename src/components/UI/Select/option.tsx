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

  const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClick();
  };

  const keyDownHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <li>
      <div
        className="pt-3 pl-4"
        onKeyDown={keyDownHandler}
        onClick={clickHandler}
        data-type={dataType}
      >
        {children}
      </div>
    </li>
  );
}

const Option = memo(OptionComponent);
export default Option;
