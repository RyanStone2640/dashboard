import brand from '@/assets/brand.png';
import Select from '@/components/UI/Select/index.tsx';

function Content() {
  return (
    <div className="mt-2 flex">
      <div>
        <img
          src={brand}
          alt="brand"
        />
      </div>
      <div className=" flex-grow flex flex-col items-center">
        <h2 className="text-3xl mb-12">人口數、戶數按戶別及性別統計</h2>
        <div className="flex gap-3">
          <Select value={[{ label: 'test', value: 'test' }, { label: '1', value: '1' }, { label: '2', value: '2' }]} />
          {/* <Select />
          <Select /> */}
          <button className="bg-slate-600 rounded" type="submit">SUBMIT</button>
        </div>
      </div>
    </div>
  );
}

export default Content;
