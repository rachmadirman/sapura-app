import React, {useState} from "react";
import { Link } from "react-router-dom";
import { TbDatabase, TbDatabaseSearch, TbCloudUpload, TbSettings, TbUserCircle,TbLogout2, TbHome, TbHelpCircle } from "react-icons/tb";

const Sidebar = () => {

  const Menus = [
    {title: "Home", icon: <TbHome />, path:"/Home"},
    {title: "View Batch", icon: <TbDatabase />, path:"/Preview"},
    {title: "View All Data", icon: <TbDatabaseSearch />, path:"/Detail"},
    {title: "Upload File", icon: <TbCloudUpload />, path:"/Upload"},
    {title: "LHDN Config", icon: <TbSettings/>,path:"/Config"},
    {title: "Profile", icon: <TbUserCircle />, path:"/Profile"},
    {title: "Help", icon: <TbHelpCircle />, path:"/Help"},
    {title: "Logout", icon: <TbLogout2 />, path:"/Login"}
  ]

  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-14 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white  items-center justify-between relative md:w-64 z-5 py-4 px-6">
        <div className="md:flex-col md:items-stretch  md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">

          <img className="w-44 mx-4" src={"LHDN-01.png"} alt="eInvoice"/>
          <p
            className="md:block text-center md:pb-10 text-izeno-black mr-0 inline-block whitespace-nowrap text-sm  font-bold py-1 px-0 text-xl"
          >
            e-Invoice
          </p>
          <ul className="pt2">
            {Menus.map((menu, index) => (
              <>
              <li key={index} className="text-izeno-black text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-100 rounded-md mt-2">
                <Link to={menu.path}>
                <span className="text-2xl block float-left">
                  {menu.icon}
                </span>
                <span className="text-base font-medium flex-1 gap-x-4 p-2">{menu.title}</span>
                </Link>
              </li>
              </>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
