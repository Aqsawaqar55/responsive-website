
import Image from "next/image";
import image1 from "@/public/blackwhite.svg"
import images2 from "@/public/squrelogo.svg"
import images3 from "@/public/ibsum logo.svg"
import images4 from "@/public/last.svg"
import images5 from "@/public/roundlogo.png"
import images6 from "@/public/secondlast.png"

export default function Logo() {
    return (
      <>
      {/* bottom div */}
<div className="
w-full 
py-[48px] xsm:py-[80px] 
px-[24px] xsm:px-[8px] 
flex 
flex-col xsm:flex-row
justify-between 
items-center
gap-[24px] xsm:gap-0 
bg-maincolor">
  <div className=" w-[320px]">
    <p  className="text-[24px] leading-[140%] font-bold">
            Trusted by 2000+ companies worldwide.
          </p></div>
          <div className="
          flex
          gap-[1px] xsm:gap-[19] 
          overflowx-auto">
            <Image 
            src={image1}
            alt="logo"
            height={124}
            width={38}
            className="w-[107px] xsm:w-[124px] h-[33] xsm:h-[38px]"
               />

<Image 
            src={images2}
            alt="logo"
            height={124}
            width={38}
             className="w-[107px] xsm:w-[124px] h-[33] xsm:h-[38px]"/>

<Image 
            src={images3}
            alt="logo"
            height={124}
            width={38}
             className="w-[107px] xsm:w-[124px] h-[33] xsm:h-[38px]"/>

<Image 
            src={images5}
            alt="logo"
            height={124}
            width={38}
             className="w-[107px] xsm:w-[124px] h-[33] xsm:h-[38px]"/>

<Image 
            src={images6}
            alt="logo"
            height={124}
            width={38}
             className="w-[107px] xsm:w-[124px] h-[33] xsm:h-[38px]"
            />

<Image 
            src={images4}
            alt="logo"
            height={124}
            width={38}
             className="w-[107px] xsm:w-[124px] h-[33] xsm:h-[38px]"/>

  </div>    



</div>
      </>
    );
  }
  