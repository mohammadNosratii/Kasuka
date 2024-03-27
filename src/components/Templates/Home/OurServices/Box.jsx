import Tv from "../../../../assets/icons/Tv";

export default function Box() {
  return (
    <div className="h-[361px] border border-gray-200 rounded-md flex flex-col justify-center items-center gap-y-4 p-5 hover:-translate-y-2.5 transition-all duration-500 hover:shadow-xl">
      <div className="w-16 h-16 bg-orange-10 flex items-center justify-center rounded-md">
        <Tv />
      </div>
      <h3 className="text-[23px] md:text-2xl text-center font-VasirBold">اما همانطور که مشاهده می کنید</h3>
      <p className="text-justify text-sm">
        آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ،
        آنها کسانی هستند که در خدمات خود مقصر هستند
      </p>
    </div>
  );
}
