
import Achiv from "@/components/achivements";

import Courseslist from "@/components/mcourse";
import Course from "@/components/course";
import Footer from "@/components/footer";

import Hero from "@/components/hero";
import Logo from "@/components/logo";
import Reviews from "@/components/reviews";
import Team from "@/components/team";


export default function Home() {
  return (
    <>
 <Hero/>
   <Logo/>
   <Courseslist/>
   <Achiv/>
   <Team/>
   <Course/>
   <Reviews/>
   <Footer/>
    </>
  );
}
