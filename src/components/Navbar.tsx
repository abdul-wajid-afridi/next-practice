import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/contact"}>Contact us</Link>
      <Link href={"/products"}>My Products</Link>
    </div>
  );
};

export default Navbar;
