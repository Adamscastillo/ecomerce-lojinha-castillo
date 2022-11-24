import React from 'react'
import { Link } from "react-router-dom";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import ImgPerfil from '../../assets/noname.png'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function LoginOnOff() {
  return (
    <div className="opacity-100 z-50 ">
       
        <Menu as="div" className="relative inline-block text-left">
        <div>
            <Menu.Button className="flex items-center pl-8 w-full text-base font-normal text-gray-900 transition duration-75 rounded-lg group  hover:text-indigo-400 dark:text-white">

                <Menu> <a href=""><img className='w-[30px] rounded-full' src={ImgPerfil} alt="" /></a></Menu>
            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </Menu.Button>
        </div>

        <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
        >
            <Menu.Items className="opacity-100 absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
                <Menu.Item>
                {({ active }) => (
                    <a

                   
                    className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                    )}
                    >
                        <Link to={"/DadosUser"}>Editar Conta</Link>
                   
                    </a>
                )}
                </Menu.Item>
                <Menu.Item>
                {({ active }) => (
                    <a
                    href="#"
                    className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                    )}
                    >
                    Suporte
                    </a>
                )}
                </Menu.Item>
                <Menu.Item>
                {({ active }) => (
                    <a
                    href="#"
                    className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                    )}
                    >
                    Licensa
                    </a>
                )}
                </Menu.Item>
                
                <Menu.Item>
                    {({ active }) => (
                    <button
                        onClick={() => {localStorage.clear()
                        window.location.assign("/") 
                       
                     }}              

                        type="submit"
                        className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block w-full px-4 py-2 text-left text-sm'
                        )}
                    >
                        Sair
                    </button>
                    )}
                </Menu.Item>
            
            </div>
            </Menu.Items>
        </Transition>
        </Menu>
    </div>
  )
}
 