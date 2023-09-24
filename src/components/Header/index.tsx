import setting from '@/assets/Vector.svg';
import logo from '@/assets/LOGO.svg';

function Header() {
  return (
    <header className="bg-myColor-#651FFF flex items-center  justify-between py-4 px-4 h-12">
      <img src={logo} alt="logo" />
      <button className=" w-8 h-8 rounded-lg border" type="button">
        <img className="p-2" src={setting} alt="settingLogo" />
      </button>
    </header>
  );
}

export default Header;
