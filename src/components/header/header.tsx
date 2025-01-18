import React from "react";
import { RiSearch2Line, RiHeart3Line, RiMenuFill, RiAccountCircleLine } from "react-icons/ri";
import { TbShoppingBag } from "react-icons/tb";
import { VscAccount, VscHeart,VscMenu, VscSearch,VscLock } from "react-icons/vsc";
import { Logo } from "./logo";
import NextLink from "next/link";
import Image from "next/image";

export const Header = () => {
    // const [openBurger, setOpenBurger] = useState(false);

    return (
        <header className="w-full h-[78px] lg:h-[200px] px-5 pt-2 lg:py-[15px] text-center">
            <div className="flex justify-between items-center lg:px-[80px] ">
                <button><RiMenuFill size="48" color="black" /></button>
                <Logo classNameLogo='w-[94px] h-[78px] lg:w-[204px] lg:h-[170px]' classNameLink={""} />
                <div className="flex items-center gap-6">
                <ul className="hidden lg:flex gap-6">
                    <li>
                        <NextLink  href=""><RiSearch2Line size="48"/></NextLink>
                    </li>
                    <li>
                        <NextLink href=""><RiHeart3Line size="48" /></NextLink>
                    </li>
                    <li>
                        <NextLink href=""><RiAccountCircleLine size="48" /></NextLink>
                    </li>
                    
                </ul>
                 <NextLink href=""><TbShoppingBag size="48" /></NextLink></div>
            </div>
            
        </header>
    )
}