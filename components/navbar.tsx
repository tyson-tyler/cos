import Image from "next/image";
import Logo from "@/public/assets/logo.svg";
import { Button } from "@heroui/button";
import Heart from "@/public/assets/heart.svg";

export const Navbar = () => {
  return (
    <div className="w-full flex justify-between  items-center">
      <div className="logo text-2xl font-semibold flex gap-1 items-center">
        <Image src={Logo} width={40} height={40} alt="hello" /> Build
        <span className="text-[#6563FF]">Hub</span>
      </div>
      <div className="flex gap-6 text-center ml-16 items-center text-sm font-bold justify-center">
        <span>HOME</span>
        <span>ABOUT</span>
        <span>PROGRAM</span>
        <span>PRICING</span>

        <span>BLOG</span>
      </div>
      <div className="flex gap-3">
        <Button color="primary"> Get Started</Button>
        <Button variant="ghost">
          Sponsors
          <Image src={Heart} width={20} height={20} alt="hello" />
        </Button>
      </div>
    </div>
  );
};
