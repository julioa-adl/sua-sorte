import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useEffect } from 'react';

function ToggleTheme() {
  const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const pageClasses = document.documentElement.classList;

  useEffect(() => {
    systemPreference && pageClasses.add('dark');
  });
  const toggle = () => {
    pageClasses.toggle('dark');
  };
  return (
    <div>
      <MoonIcon
        className="h-8 text-gray-100 block cursor-pointer dark:hidden"
        onClick={ toggle }
      />
      <SunIcon
        className="h-8 text-gray-100 hidden cursor-pointer dark:block"
        onClick={ toggle }
      />
    </div>
  );
}

export default ToggleTheme;
