import brand from '@/assets/brand.png';
import Input from '@/components/UI/Input/index.tsx';

function Content() {
  return (
    <div className="mt-2 flex">
      <div className="max-h-full h-full object-cover">
        <img
          className="h-full"
          src={brand}
          alt=""
        />
      </div>
      <div className="w-full flex justify-center">
        <h2>人口數、戶數按戶別及性別統計</h2>
        <Input />
      </div>
    </div>
  );
}

export default Content;
