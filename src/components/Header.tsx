import ToggleTheme from './toggletheme/ToggleTheme';

function Header() {
  return (
    <div
      className="flex w-100 mb-20 h-20 justify-between items-center px-5 bg-gray-500
                sm:rounded-xl sm:m-5 dark:bg-gray-800"
    >
      <span className="text-gray-100 hidden sm:block">Seja Bem Vindo</span>
      <h1 className="text-gray-100 text-xl">SUASORTE.COM</h1>
      <ToggleTheme />
    </div>
  );
}

export default Header;
