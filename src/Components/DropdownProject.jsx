import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

export default function DropDownProject() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className='items-center'>
        <MenuButton className="pdl:w-58 menu-button justfy-between flex flex-row text-zlate-600 border border-slate-600 py-2 px-4 rounded-sm bg-[#e6dde3] hover:bg-[#b496aa] hover:text-white relative z-10">
          <span className='ml-2'>Pookie can choose~</span>
          <svg
            className="arrow ml-6 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="menu-item border border-slate-600 absolute bottom-full z-10 mb-2 origin-bottom-right rounded-md bg-[#2f252c] shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <h1 className='text-white text-center font-bold'>Up?</h1>
          <MenuItem>
            <a
              target='_blank'
              href="https://rezex.my.id/"
              className="block px-4 py-2 text-sm text-white hover:bg-[#372f35] rounded-md"
            >
              Give it all to me!!
            </a>
          </MenuItem>
          <h1 className='text-white text-center font-bold'>Or Bottom?</h1>
          <MenuItem>
            <a
              target='_blank'
              href="https://rezex.my.id/"
              className="block px-4 py-2 text-sm text-white hover:bg-[#372f35] rounded-md"
            >
              Let me take care of you, okay?
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
