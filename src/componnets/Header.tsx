import setting from '../assets/Vector.svg';
import logo from '../assets/LOGO.svg';

function Header() {
  return (
    <header className="bg-purple-700 flex justify-between">
      <img src={logo} alt="logo" />
      <button type="button">
        <img src={setting} alt="settingLogo" />
      </button>
    </header>
  );
}

export default Header;
