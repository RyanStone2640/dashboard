import brand from '@/assets/brand.png';

function Logo() {
  return (
    <div className="w-40 phone:absolute phone:bg-white phone:opacity-5">
      <img
        className="h-full"
        src={brand}
        alt="brand"
      />
    </div>
  );
}

export default Logo;
