import Image from "next/image";
import sec1 from "@/public/section2a.png";
import sec2 from "@/public/section2b.png";
import sec3 from "@/public/section2c.png";
import sec4 from "@/public/section2d.png";

export default function Section2() {
  return (
    <div className="mt-[100px] max-w-full lg:max-w-[1128px] mx-auto px-3 lg:px-0">
      <p className="text-center text-2xl lg:text-[32px] font-semibold mt-[52px] lg:mt-[80px]">
        Your Trusted Partner in Credentialing Excellence
      </p>

      {/* section 2 */}
      <div className=" flex flex-col lg:flex-row gap-4 mt-[90px] ">
        {/* 1st div */}
        <div className="bg-white rounded-lg p-[10px]">
          <Image alt="" src={sec1} height={249} width={249} />
          <div className="mt-5 text-center">
            <p className=" text-base font-semibold ">Customizable Templates</p>
            <p className="mt-[10px] text-[14px]">
              Design certificates and badges that align with your brand
              identity.
            </p>
          </div>
        </div>

        {/* 2nd div */}
        <div className="bg-white rounded-lg p-[10px]">
          <Image alt="" src={sec2} height={249} width={249} />
          <div className="mt-5 text-center">
            <p className=" text-base font-semibold ">Customizable Templates</p>
            <p className="mt-[10px] text-[14px]">
              Design certificates and badges that align with your brand
              identity.
            </p>
          </div>
        </div>

        {/* 3rd div */}
        <div className="bg-white rounded-lg p-[10px]">
          <Image alt="" src={sec3} height={249} width={249} />
          <div className="mt-5 text-center">
            <p className=" text-base font-semibold ">Customizable Templates</p>
            <p className="mt-[10px] text-[14px]">
              Design certificates and badges that align with your brand
              identity.
            </p>
          </div>
        </div>

        {/* 4th div */}
        <div className="bg-white rounded-lg p-[10px]">
          <Image alt="" src={sec4} height={249} width={249} />
          <div className="mt-5 text-center">
            <p className=" text-base font-semibold ">Customizable Templates</p>
            <p className="mt-[10px] text-[14px]">
              Design certificates and badges that align with your brand
              identity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}