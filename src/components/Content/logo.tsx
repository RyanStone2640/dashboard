import brand from '@/assets/brand.png';

function Logo() {
  return (
    <div className="h-4/5">
      <img
        className="h-full"
        src={brand}
        alt="brand"
      />
    </div>
  );
}

export default Logo;
