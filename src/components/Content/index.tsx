import Logo from './logo.tsx';
import Search from './search.tsx';

export default function Content() {
  return (
    <div className=" mt-5 flex phone:max-w-sm phone:overflow-hidden">
      <Logo />
      <Search />
    </div>

  );
}
