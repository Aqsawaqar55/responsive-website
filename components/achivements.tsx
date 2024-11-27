export default function Achiv() {
  return (
    <>
      <div
        className="flex flex-col items-center bg-white
                px-[48px] xsm:px-[64px]
                py-[24px]  xsm:py-[12px] 
                gap-[80px]  
                w-full xsm:w-[1280px] 
                xsm:h-[488px]  
 "
      >
        <div
          className="flex flex-col justify-center items-center
                px-0 
                gap-[24px] 
                w-[380px] xsm:w-[1152px] 
                xsm:h-[264px]"
        >
          <h1
            className="text-[Roboto] text-[700] text:[32px] xsm:text-[48px] 
                items-center"
          >
            OUR ACHIVEMENTS
          </h1>
          <p className="text-[Roboto] text-[400] text-[18px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra
            <br /> ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
        </div>
        <div
          className="flex 
          flex-col xsm:flex-row
          w-full xsm:w-[1256px] 
          gap-[24px]"
        >
          <div className="flex   items-start px-0 py-2 gap-[24px] xsm:w-[616px] h-[96px]">
            <div className="flex flex-col items-center  gap-[8px] w-[296px] h-[80px] ">
              <h1 className="text-[Roboto] text-[700] text-[40px]">+200</h1>
              <p className="text-[400] text-[16px]">courses</p>
            </div>

            <div className="flex flex-col items-center  gap-[8px] w-[296px] h-[80px] ">
              <h1 className="text-[Roboto] text-[700] text-[40px]">50k</h1>
              <p className="text-[400] text-[16px]">Mentors</p>
            </div>
          </div>
          <div className="flex flex-row  gap-[24px] xsm:w-[616px] h-[96px]">
                        <div className="flex flex-col items-center  gap-[8px] w-[296px] h-[80px] ">
                            <h1 className="text-[Roboto] text-[700] text-[40px]">379k</h1>
                            <p className="text-[400] text-[16px]">students</p>
                        </div>

                        <div className="flex flex-col items-center  gap-[8px] w-[296px] h-[80px] ">
                            <h1 className="text-[Roboto] text-[700] text-[40px]">100+</h1>
                            <p className="text-[400] text-[16px]">Recognition</p>
                        </div>
                    </div>
        </div>
      </div>

      {/* second */}
      <div className="flex flex-col items-center px-[64px] py-[12px] gap-[80px]  w-[1280px] h-[488px]  bg-white hidden xsm:block">
        <div className="flex flex-col justify-center items-center px-0 gap-[24px] w-[1152px] h-[264px]">
          <h1 className="text-[Roboto] text-[700] text-[48px] items-center">
            OUR ACHIVEMENTS
          </h1>
          <p className="text-[Roboto] text-[400] text-[18px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra
            <br /> ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
        </div>
        <div className="flex w-[1256px] h-[96px] gap-[24px]">
          <div className="flex flex-row items-start px-0 py-2 gap-[24px] w-[616px] h-[96px]">
            <div className="flex flex-col items-center  gap-[8px] w-[296px] h-[80px] ">
              <h1 className="text-[Roboto] text-[700] text-[40px]">+200</h1>
              <p className="text-[400] text-[16px]">courses</p>
            </div>

            <div className="flex flex-col items-center  gap-[8px] w-[296px] h-[80px] ">
              <h1 className="text-[Roboto] text-[700] text-[40px]">50k</h1>
              <p className="text-[400] text-[16px]">Mentors</p>
            </div>
          </div>
          <div className="flex flex-row  gap-[24px] w-[616px] h-[96px]">
            <div className="flex flex-col items-center  gap-[8px] w-[296px] h-[80px] ">
              <h1 className="text-[Roboto] text-[700] text-[40px]">379k</h1>
              <p className="text-[400] text-[16px]">students</p>
            </div>

            <div className="flex flex-col items-center  gap-[8px] w-[296px] h-[80px] ">
              <h1 className="text-[Roboto] text-[700] text-[40px]">100+</h1>
              <p className="text-[400] text-[16px]">Recognition</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
