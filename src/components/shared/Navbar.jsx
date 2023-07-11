import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState(false);

    //   STYLING ====
    const ListStyle = "hover:text-primary cursor-pointer transition-all delay-100 duration-300";
    const spanStyle = "flex justify-center items-center";
    const mblSlyle ="flex justify-between items-center p-3 border-b border-white";



    return (
        <nav className="bg-black text-white">
            <div className="max-w-[1440px] mx-auto p-1 relative pt-3">
                <div className="md:flex md:justify-between md:items-center ">
                    {/* first part */}
                    <div className="flex items-center">
                        <RiMenu2Fill
                            onClick={() => setOpen(!open)}
                            className="me-3 lg:hidden cursor-pointer text-4xl"
                        />
                        <div className="mx-auto">
                            <img
                                src="https://img.freepik.com/free-vector/gradient-laptop-logo-template_23-2148995853.jpg"
                                alt="logo"
                                className="h-12"
                            />
                        </div>
                    </div>
                    {/* second part */}
                    <ul className="hidden lg:flex font-semibold space-x-6">
                        <li className={ListStyle}>
                            <span className={spanStyle}>
                                Home <BiChevronDown className="text-xl" />
                            </span>
                        </li>
                        <li className={ListStyle}>
                            <span className={spanStyle}>
                                Add-Product <BiChevronDown className="text-xl" />
                            </span>
                        </li>
                        <li className={ListStyle}>
                            <span className={spanStyle}>
                                See-All <BiChevronDown className="text-xl" />
                            </span>
                        </li>
                        <li className={ListStyle}>
                            <span className={spanStyle}>
                                Blog <BiChevronDown className="text-xl" />
                            </span>
                        </li>
                    </ul>
                </div>
                {/* mobile navbar */}
                <div
                    className={`lg:hidden bg-red-500 w-[280px] md:w-[260px] h-screen absolute ${open
                        ? "-top-4 -left-2 transition-all duration-700 "
                        : "top-0 -left-full transition-all duration-1000 delay-100"
                        }`}
                >
                    <div className="p-[17px] flex justify-between items-center">
                        <span className="cursor-pointer">
                            <img
                                src="https://img.freepik.com/free-vector/gradient-laptop-logo-template_23-2148995853.jpg"
                                alt="logo"
                                className="h-7"
                            />
                        </span>
                        <IoIosClose
                            className="hover:text-red-600 text-3xl font-bold cursor-pointer transition-all duration-200"
                            onClick={() => setOpen(!open)}
                        />
                    </div>
                    <ul className="space-y-3 text-sm cursor-pointer">
                        <li
                            className="border-b border-white"
                        >
                            <div
                                onClick={() => setSubmenuOpen(!submenuOpen)}
                                className="flex justify-between items-center p-3"
                            >
                                Home
                                <span>
                                    <BiChevronDown className="text-2xl" />
                                </span>
                            </div>
                            {/* submenu */}
                            <div
                                className={` ${submenuOpen
                                    ? "max-h-auto transition-all "
                                    : "max-h-0 overflow-hidden"
                                    } `}
                                style={{ background: "#F38681" }}
                            >
                                <ul className="space-y-5 p-6">
                                    <li>Home</li>
                                    <li>Home Two</li>
                                    <li>Home Three</li>
                                    <li>Home Four</li>
                                </ul>
                            </div>
                        </li>
                        <li
                            className={mblSlyle}
                        >
                            Add-Product
                            <span>
                                <BiChevronDown className="text-xl" />
                            </span>
                        </li>
                        <li
                            className={mblSlyle}
                        >
                            See-All
                            <span>
                                <BiChevronDown className="text-xl" />
                            </span>
                        </li>
                        <li
                            className={mblSlyle}
                        >
                            Blog
                            <span>
                                <BiChevronDown className="text-xl" />
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;