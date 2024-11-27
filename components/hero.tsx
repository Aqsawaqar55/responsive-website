"use client"
import Image from "next/image";



import images from "@/public/photo.svg";
import { Button } from "./ui/button";


export default function Hero() {
  return (
    <><section className="">
      {/* top div */}
      <div className="
      flex
      flex-col
      xsm:flex-row">
{/* left div */}
<div className="
w-full xsm:w-1/2
py-[64px] xsm:py[250px]
px-[24px] xsm:px-0
   flex
     justify-center
      items-center">
<div className="px-0 w-full xsm:px-[80px]  ">
           <h1 className="text-[40px]  xsm:text-[56px] leading-[120%] font-bold mb-[24px]">
             Learn new skills<br/>online with ease
           </h1>
           <p className="text-[18px] leading-[150%] text-[Roboto] mb-[40px]">
             Discover a wide range of courses covering a<br/>variety of subjects, taught by expert instructors.
           </p>
           <div>
            <Button className="mr-[16px] " >Start Learning Now</Button>
           <Button variant={"transparent"}>Explore Courses</Button></div>
          
        </div></div>
{/* right div */}
<div className="
w-full xsm:w-1/2 
h-[390px] xsm:h-[800px]
flex
justify-center
overflow-hidden">
<Image
           src={images}
           alt="Designer Library"
           width={640}
          height={900}
          className="
         w-[428px] xsm:w-[640px]
         h-[600px] xsm:h-[900px]"
        />

</div>

     </div>
      </section> 
    
    
     </>
  );
}
     
  
