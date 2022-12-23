import { useState } from 'react';
import arrow_left from '../../assets/left.png';
import logo from '../../assets/logo.png';

import dashboard from '../../assets/dashboard.png'
import inbox from '../../assets/inbox.png'
import account from '../../assets/account.png'
import planning from '../../assets/planning.png'
import search from '../../assets/search.png'
import analytics from '../../assets/analytics.png'
import files from '../../assets/files.png'
import settings from '../../assets/settings.png'

export const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: dashboard },
    { title: "Inbox", src: inbox },
    { title: "Accounts", src: account, gap: true },
    { title: "Schedule", src: planning },
    { title: "Search", src: search },
    { title: "Analytics", src: analytics, gap: true },
    { title: "Files", src: files },
    { title: "Setting", src: settings },
  ]

  return <div className="flex">
    <div className={`${open ? 'w-72' : 'w-24'} duration-300 h-screen p-5 pt-8 bg-zinc-800 relative`}>
      <img src={arrow_left} className={`absolute cursor-pointer -right-3 top-9 w-7 border-2 border-dark-purple rounded-full ${!open && 'rotate-180'}`}
        onClick={() => setOpen(!open)} />
      <div className="flex gap-x-4 items-center">
        <img width={50} src={logo} className={`cursor-pointer duration-500 ${!open && "rotate-[360deg]"}`} />
        <h1
          className={`text-white origin-left font-medium text-xl duration-300 ${!open && 'scale-0'}`}>
          Sidebar
        </h1>
      </div>
      <ul className="pt-6">
        {Menus.map((menu, index) =>
          <li key={index} className={`${open && 'hover:bg-zinc-500'} flex items-center text-gray-300 duration-300 text-sm mb-3 cursor-pointer hover:bg-light-white rounded-full ${menu.gap ? "mt-9" : "mt-2"} ${index === 0 && 'bg-light-white'}`}>
            <img className="rounded-full h-12" width={50} src={menu.src} />
            <span className={
              `ml-2 origin-left duration-300 text-white ${!open && 'hidden'}`
            }>{menu.title}</span>
          </li>
        )}
      </ul>

    </div>
    <div className="p-7 bg-zinc-50 text-2x1 font-semibold flex-1 h-screen">
      <h1>Home Page</h1>
    </div>
  </div>
}