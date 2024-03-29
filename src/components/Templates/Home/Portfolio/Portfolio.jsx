import Portfolio1 from "../../../../assets/images/portfolio-1.jpg";
import Portfolio2 from "../../../../assets/images/portfolio-2.jpg";
import Portfolio3 from "../../../../assets/images/portfolio-3.jpg";
import Portfolio4 from "../../../../assets/images/portfolio-4.jpg";
import Portfolio5 from "../../../../assets/images/portfolio-5.jpg";
import Portfolio6 from "../../../../assets/images/portfolio-6.jpg";
import Portfolio7 from "../../../../assets/images/portfolio-7.jpg";
import Portfolio8 from "../../../../assets/images/portfolio-8.jpg";
import Portfolio9 from "../../../../assets/images/portfolio-9.jpg";
import CountsImg from "./Counts";
import Testimonials3 from "../../../../assets/images/testimonials-3.jpg";

export default function Portfolio() {
  return (
    <div>
      <div className="px-3 md:px-8 lg:px-16 2xl:px-80">
        <div className="space-y-1">
          <div className="flex items-center gap-x-3">
            <span className=" text-gray-500">نمونه کارها</span>
            <div className="w-32 h-[1px] bg-orange-10"></div>
          </div>
          <h2 className="text-3xl font-VasirBold">
            نمونه کار های ما را بررسی کنید
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-12">
          <img className="row-span-1" src={Portfolio3} alt="" />
          <img className="row-span-1" src={Portfolio2} alt="" />
          <img className="row-span-2 h-full" src={Portfolio1} alt="" />
          <img className="row-span-2 w-full" src={Portfolio5} alt="" />
          <img className="row-span-1 h-full" src={Portfolio4} alt="" />
          <img className="row-span-1 h-full" src={Portfolio7} alt="" />
          <img className="row-span-2 w-full" src={Portfolio6} alt="" />
          <img className="row-span-1 h-full" src={Portfolio9} alt="" />
          <img className="row-span-1 h-full" src={Portfolio8} alt="" />
        </div>
        <CountsImg />
      </div>
      <div className="testimonials mt-16 flex flex-col gap-y-5 items-center text-white px-10 py-20 md:px-20 lg:px-40 lg:py-24 2xl:px-80">
        <div className="flex flex-col items-center justify-center gap-y-1">
          <img
            className="w-[88px] h-[88px] border-[6px] border-zinc-500 rounded-full"
            src={Testimonials3}
            alt=""
          />
          <h3 className=" font-VasirBold text-xl">ینا کارلیس</h3>
          <h4>صاحب فروشگاه</h4>
        </div>
        <p className="text-lg text-justify">
          زیرا اگر زحمت کسانی که خدایان هستند را صادر کنید ، کار کسانی که مهم
          هستند ، چیزهایی که هیچ کدام از آنها نخواهد آمد ، و زحمت کسانی که
          کمترین زمان را دارند ، زحماتی که من کشیدم ، و عشق به کسانی که کمترین
          افراد خواهند بود.
        </p>
      </div>
    </div>
  );
}
