import { Menu, Transition } from '@headlessui/react'
import React,{Fragment} from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Logo from '../images/logo.svg'
import {RiTodoFill , RiAlarmWarningLine} from 'react-icons/ri'
import {BsCalendarEvent} from 'react-icons/bs'
import {GoClock} from 'react-icons/go'




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  return (
    <div className='flex m-8'>
      <img src={Logo} />
       <Menu as="div" className="relative ml-40 inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-xl   px-4 py-2  font-medium text-xl  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          Features
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  <div className='flex'>

                  <RiTodoFill className='text-purple-500' size={25} />
                  <h1 className='font-medium pl-4'>Todo List </h1>
                  </div>
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
                  <div className='flex'>

<BsCalendarEvent className='text-blue-400' size={25} />
<h1 className='font-medium pl-4'>Calender </h1>
</div>
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
                  <div className='flex'>

<RiAlarmWarningLine className='text-yellow-500 ' size={25} />
<h1 className='font-medium pl-4'>Reminders </h1>
</div>
                </a>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
<div className='flex'>

<GoClock className='text-purple-500' size={25} />
<h1 className='font-medium pl-4'>Planning </h1>
</div>                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
    </div>
  )
}

export default Navbar
