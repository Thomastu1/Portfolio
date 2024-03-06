import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import profileImage from '../logototu.png';

const navigation = [
  { name: 'Acceuil', href: '#', current: true },
  { name: 'Présentation', href: '#presentation', current: false },
  { name: 'Projets', href: '#projets', current: false },
  { name: 'Contact', href: '#contact', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Nav() {
  return (
    <Disclosure as="nav" className="fixed top-0 z-50 w-full bg-black text-white overflow-hidden">
      {({ open, close }) => (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Logo */}
          <img className="logo" src={profileImage} alt="Profil" />

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <Disclosure.Button
              onClick={open ? close : undefined}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              {open ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </Disclosure.Button>
          </div>

          {/* Navigation (hidden on small screens) */}
          <div className="hidden sm:flex space-x-4 ml-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'rounded-md px-3 py-2 text-sm font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu (hidden on larger screens) */}
          <Disclosure.Panel className="sm:hidden fixed top-0 left-0 w-full h-full bg-black opacity-80">
        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col items-center space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => {
                  close(); // Utilisez la fonction de fermeture close ici
                }}
                className={classNames(
                  item.current
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white',
                  'text-lg font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </Disclosure.Panel>
    </div>
  )}
</Disclosure>
  );
}
