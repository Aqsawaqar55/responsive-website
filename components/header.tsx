import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import images from "@/public/Ddsgnr Library.png";

import Link from "next/link";

import { IoMenu } from "react-icons/io5";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <>
      
      <header className="w-full flex flex-col gap-[16px] " >
        <div className=" w-full h-[54px]  bg-maincolor px-[62px] xsm:flex justify-between items-center hidden border-b-[1px] border-[black] flex ">
      <div className="h-[30px] flex justify-center items-center gap-[16px] text-[14px] leading-[150%]  ">
            <p className="">
              Phone Number: 956 742 455 678
            </p>
            <div className="w-[1px] h-[30px] bg-[#676767]"></div>
            <p className="">
              Email: info@ddsgnr.com
            </p>
          </div>
          
           <div className="flex justify-center items-center gap-[12px]">
            <FaFacebookF size={24} />
            <FaInstagram size={24}  />
            <FaTwitter size={24}  />
            <FaLinkedin  size={24} />
          </div>
          </div>
         
{/* bottom div */}
        <div className="w-full h-[72px] xsm:px-[64px] py-[15px] bg-maincolor  flex justify-between items-center px:[24px] border-b-[1px] border-[black]">

        
            <Image
              src={images}
              alt="Ddsgnr Logo"
              width={150}
              height={50}
              objectFit="contain"
              className="w-auto h-auto"
            />
          <div className="xsm:flex justify-between items-center gap-[32px] hidden">
            <ul className="flex gap-[52px] justify-center items-center text-[16px]">
            <li className=""><Link href="/">Home</Link></li>
              <li className=""><Link href="/">Courses</Link></li>
              <li className=""><Link href="/">Services</Link></li>
              <li className=""><Link href="/">Achievement</Link></li>
              <li className=""><Link href="/">About Us</Link></li>
              <li className=""><Link href="/">Testimonial</Link></li>
              </ul>
              
              <div className="flex justify-center items-center gap-[16px]">
              <Button variant={"transparent"}>Login</Button>
              <Button>Sign up</Button>
              </div>
              </div>
              <IoMenu size={24}  className="xsm:hidden"/>
        </div>
      </header>
</>
   ) } 



