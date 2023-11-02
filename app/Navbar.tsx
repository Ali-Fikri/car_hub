import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/logo.svg";
import { Button } from "@/components";
import { MouseEvent } from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center max-w-[1440px] mx-auto px-6 py-4 sm:px-16">
      <Link href="/">
        <Image
          src={Logo}
          alt={"Logo"}
          width={118}
          height={18}
          className="object-contain"
        />
      </Link>
      <Button
        title="Sign in"
        containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
      />
    </nav>
  );
};

export default Navbar;
