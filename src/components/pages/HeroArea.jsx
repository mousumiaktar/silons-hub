import { AiFillStar } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
const HeroArea = () => {
    return (
        <div className="bg-gradient-to-r from-[#001027] via-[#002958] to-[#2D4E82] pt-5">
            <div className="container mx-auto p-3 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                {/* left */}
                <div className="md:mt-28 m-5">
                    <p className="mb-5 text-sm md:text-[20px] text-secondary-focus font-medium text-orange-500">
                        The Leader of online shop
                    </p>
                    <h1 className="md:text-5xl text-2xl font-bold leading-normal text-white">Engaging with us & Accessible Our All Products</h1>
                    {/* search part */}
                    <div className="space-y-3 md:space-y-0 md:grid grid-cols-2 md:justify-between md:items-center mt-10 mb-10 p-4 md:p-3 bg-white  md:rounded-full rounded-3xl">
                        {/* item 1 */}
                        <div className="flex items-center">
                            <FiSearch className="text-3xl md:text-4xl text-primary mr-2" size={20} />
                            <input
                                className="w-full border-none outline-none "
                                type="text"
                                placeholder="Search Here All..."
                            />
                        </div>
                        {/* item 2 */}
                        <div className="flex items-center md:justify-end gap-3 md:gap-0">
                            <div className="flex justify-between items-center bg-accent  px-8 md:mx-2 md:py-2 rounded-full font-medium ">
                                <span>Category</span>
                                <span>
                                    <BiChevronDown className="text-xl cursor-pointer" />
                                </span>
                            </div>
                            {/* item 3 */}
                            <div>
                                <BsFillArrowRightCircleFill className="text-primary text-3xl md:text-4xl cursor-pointer" />
                            </div>
                        </div>
                    </div>
                    <p className="text-sm md:text-[20px] mt-3 text-secondary-focus font-medium text-orange-500">
                        Trusted by over 15K Users
                    </p>
                    <p className="text-sm md:text-[20px] text-secondary-focus font-medium mt-3 text-orange-500">
                        worldwide since 2022
                    </p>
                    <div className="flex items-center mb-32 mt-5">
                        <div className="font-bold whitespace-nowrap md:text-[45px] text-white">1000+</div>
                        <div className="text-3xl font-bold mx-3 flex items-center">
                            <span className="md:text-[45px] text-white">4.4</span>
                            <span
                                className="mx-2 flex space-x-3 text-orange-500"
                                
                            >
                                <AiFillStar size={20} />
                                <AiFillStar size={20} />
                                <AiFillStar size={20} />
                                <AiFillStar size={20} />
                                <AiFillStar size={20} />
                            </span>
                        </div>
                    </div>
                </div>
                {/* right */}
                <div className="mb-16 md:mt-20">
                    <img
                        src="https://i.ibb.co/T2XrN7s/pngtree-innovative-3d-mobile-mockup-paired-with-web-development-banner-and-laptop-image-3742578-remo.png"
                        alt="banner-image"
                        className="md:w-[500px] md:h-[400px] w-[100%] h-auto mx-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroArea;