import Image from "next/image";
import star from "@/public/Stars.svg";
import img1 from "@/public/images/thirdteam.svg";
import img2 from "@/public/images/firstteam.svg";
import img3 from "@/public/images/sisthteam.svg";
import slide from "@/public/Slider Dots.svg";
import button from "@/public/Slider Buttons.png";

export default function Review() {
  return (
    <>
      <section className="w-full px-[64px] py=[112px]">
        <h2 className="myheading mb-[24px]">Customer testimonials</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
        {/* card div */}
        <div className="mt-[80px]  w-full inline-flex flex-row gap-[32px] ">
          <div className="p-[32px] w-[362px] border-[1px] border-[black] ">
            <div>
              <Image
                src={star}
                alt="star"
                width={116}
                height={18.89}
                className="w-[116px] h-[19.89] mb-[24px]"
              />
            </div>
            <p className="mb-[24px]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit
              Suspendisse varius enim in eros elementum tristique Duis cursus mi
              quis viverra ornare
            </p>
            <div className="flex gap-[20px]">
              <div className="w-[56px] h-[56px] rounded-full overflow-hidden">
                <Image
                  src={img1}
                  alt="img"
                  width={56}
                  height={56}
                 
                />
              </div>
              <div className="flex flex-col flex-col justify-center  h-full">
                James Nduku
                <p className="text-[400]">Software Developer</p>
              </div>
            </div>
          </div>

          {/* sec */}

          <div className="p-[32px] w-[362px] border-[1px] border-[black] hidden xsm:block">
            <div>
              <Image
                src={star}
                alt="star"
                width={116}
                height={18.89}
                className="w-[116px] h-[19.89] mb-[24px]"
              />
            </div>
            <p className="mb-[24px]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit
              Suspendisse varius enim in eros elementum tristique Duis cursus mi
              quis viverra ornare
            </p>
            <div className="flex gap-[20px]">
              <div className="w-[56px] h-[56px] rounded-full overflow-hidden">
                <Image src={img2} alt="img" width={56} height={56} />
              </div>
              <div className="flex flex-col flex-col justify-center  h-full">
                Erick Kipkemboi
                <p className="text-[400]">Scrum Master</p>
              </div>
            </div>
          </div>
          {/* third */}

          <div className="p-[32px] w-[362px] border-[1px] border-[black] hidden  xsm:block">
            <div>
              <Image
                src={star}
                alt="star"
                width={116}
                height={18.89}
                className="w-[116px] h-[19.89] mb-[24px]"
              />
            </div>
            <p className="mb-[24px]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit
              Suspendisse varius enim in eros elementum tristique Duis cursus mi
              quis viverra ornare
            </p>
            <div className="flex gap-[20px]">
              <div className="w-[56px] h-[56px] rounded-full overflow-hidden">
                <Image src={img3} alt="img" width={56} height={56} />
              </div>
              <div className="flex flex-col flex-col justify-center  h-full">
                Stephen Kerubo
                <p className="text-[400]">UI/UX Designer</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex  justify-between items-center mt-8 w-full max-w-screen-lg
          hidden xsm:block"
        >
          <Image src={slide} alt="Slide indicators" width={72} height={8} />
          <Image src={button} alt="Slider buttons" width={72} height={8} />
        </div>
      </section>
    </>
  );
}
