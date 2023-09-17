import arrowDropDon from '@/assets/arrow-drop-down.svg';
import xMark from '@/assets/xMark.svg';

export type SelectOption = {
  label: string
  value: string | number
}

type SelectProps = {
  value?: SelectOption[] | []
  onChange: (value: SelectOption | undefined) => void
}

function Select(props: SelectProps) {
  const { value: propsVal } = props;

  return (
    <div
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      className="
      min-w-5rem  relative border rounded  pt-3 pb-2 px-3 flex gap-4  cursor-pointer
      before:block before:absolute before:content-['縣/市'] before:text-xs before:-top-2 before:mx-1 before:bg-white
      focus:border-myColor-purple focus:border-2 focus:before:text-myColor-purple
    "
    >
      <span className="flex-grow">{propsVal[0]?.label}</span>
      <div className="flex gap-3">
        <button type="button">
          <img src={xMark} alt="" />
        </button>
        <button className="pointer-events-none" type="button">
          <img src={arrowDropDon} alt="" />
        </button>
      </div>
      <ul className="absolute top-10 left-0 rounded w-full max-h-64 overflow-y-auto bg-myColor-#FFFDFD  shadow-lg shadow-slate-300 ">
        {propsVal?.map((item) => (
          <li className="mt-3 ml-4" key={item.value}>
            {item?.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

Select.defaultProps = {
  value: [],
};

export default Select;
