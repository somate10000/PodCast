import React from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Project", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavBar() {
  return (
    <Disclosure as="nav" className={"bg-white"}>
      {({ open }) => (
        <>
          <div className="px-2 mx-auto bg-white border-b min-w-7xl sm:px-6 lg:px-8 border-gray-50">
            <div className="relative flex items-center justify-between h-16 mx-0 md:mx-20">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open Main menu</span>
                  {open ? (
                    <XIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                <div className="flex items-center flex-shrink-0">
                  <h1 className="text-xl font-semibold cursor-pointer">
                    Stream<span className="text-violet-500">line</span>
                  </h1>
                </div>
                <div className="hidden sm:block sm:ml-6 md: ml-60">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        href={item.href}
                        key={item.name}
                        className={classNames(
                          item.current
                            ? "bg-violet-500 shadow-lg text-white"
                            : "text-gray-300 hover:shadow-lg hover:bg-violet-400 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 ml-6 sm:static sm:inset-auto sm: sm:pr-0">
                <button className="px-3 py-2 my-2 text-sm font-medium rounded-md md:my-0 border-violet-100 hover:bg-violet-500 hover:shadow-lg hover:text-white text-violet-400">
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  href={item.href}
                  as="a"
                  key={item.name}
                  className={classNames(
                    item.current
                      ? "bg-violet-500 shadow-lg text-white"
                      : "text-gray-300 hover:shadow-lg hover:bg-violet-400 hover:text-white",
                    "px-3 py-2 rounded-md text-sm font-medium block"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default NavBar;
