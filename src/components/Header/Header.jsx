import { IoMdMenu } from "react-icons/io";
import { NavbarMenu } from "../../constants";

import './Header.css'

const Header = () => {
  return (
    <header>
      <div className="container-h py-10 flex justify-between items-center">
        {/* logo section */}
        <div className="logo-section py-10">
          <h1 className="font-bold text-2xl text-[#042f52]">
            Green Energy Col
          </h1>
        </div>

        {/* ** menu section in header ** */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {
              NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <a href={menu.path} 
                    className="inline-block py-2 px-3 text-[#042f52] hover:text-[#009963] relative group">
                      {/* <div
                        className="
                          absolute 
                          w-2 h-2
                          bg-[#009963]
                          mt-4
                          rounded-full
                          left-1/2
                          -translate-x-1/2
                          top-1/2
                          bottom-0
                          group-hover:block hidden
                        "></div> */}
                    {menu.title}
                  </a>
                </li>
              ))
            }
          </ul>
        </nav>

        {/*  ** mobile hamburger button ** */}
        <div className="lg:hidden">
          <IoMdMenu
            className="text-4xl" 
          />
        </div>
      </div>
    </header>
  )
}

export default Header