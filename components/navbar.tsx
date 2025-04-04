import Image from "next/image";
import Logo from "@/public/assets/logo.svg";
import { Button } from "@heroui/button";
import Heart from "@/public/assets/heart.svg";
import MobileMenu from "./resposive/menu";

export const Navbar = () => {
  return (
    <div className="w-full flex justify-between  items-center">
      <div className="logo text-2xl font-semibold flex gap-1  items-center">
        <Image src={Logo} width={40} height={40} alt="hello" />{" "}
        <span className="hidden md:flex">
          Build <span className="text-[#6563FF]">Hub</span>
        </span>
      </div>

      <div className="hidden lg:flex gap-6 text-center ml-16 items-center text-sm font-bold justify-center">
        <span>HOME</span>
        <span>ABOUT</span>
        <span>PROGRAM</span>
        <span>PRICING</span>

        <span>BLOG</span>
      </div>
      <div className="flex gap-3">
        <Button color="primary"> Get Started</Button>
        <Button variant="ghost" className="lg:flex hidden">
          Sponsors
          <Image src={Heart} width={20} height={20} alt="hello" />
        </Button>
        <div className="md:hidden flex">
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};
