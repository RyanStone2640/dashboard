export type OptionProps = {
  onKeyDown: (e:never) => void
  onClick: (e:never) => void
  dataType: string
  children: React.ReactNode
}

export default function Option(props: OptionProps) {
  const {
    onKeyDown,
    onClick,
    dataType,
    children,
  } = props;
  return (
    <li>
      <div
        role="button"
        tabIndex={0}
        className="mt-3 ml-4"
        onKeyDown={onKeyDown}
        onClick={onClick}
        data-type={dataType}
      >
        {children}
      </div>
    </li>
  );
}
