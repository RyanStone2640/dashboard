import setting from '@/assets/Vector.svg';
import logo from '@/assets/LOGO.svg';

function Header() {
  return (
    <header className="bg-myColor-purple flex justify-between px-4">
      <img className="my-4" src={logo} alt="logo" />
      <button className="my-4 w-8 h-8 rounded-lg border" type="button">
        <img className="p-2" src={setting} alt="settingLogo" />
      </button>
    </header>
  );
}

export default Header;
