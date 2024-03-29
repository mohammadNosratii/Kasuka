import Box from "./Box";

export default function OurServices() {
  return (
    <div>
      <div className="px-3 md:px-8 lg:px-16 2xl:px-80">
        <div className=" space-y-1">
          <div className="flex items-center gap-x-3">
            <span className=" text-gray-500">خدمات</span>
            <div className="w-32 h-[1px] bg-orange-10"></div>
          </div>
          <h2 className="text-3xl font-VasirBold">خدمات ما را بررسی کنید</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
        </div>
      </div>
      <div className="ourservices-bg-img">
        <h3 className="text-3xl font-VasirBold">فراخوانی برای اقدام</h3>
        <p className="text-justify">
          اما محکوم کردن درد در فیلم غیرقابل تصور است ، در لذت می خواهد از درد
          سیلوس بودن بدون نتیجه فرار کند. آنها استثنائاتی هستند که کورها به
          دنبال آن هستند ، آنها نمی بینند ، آنها کسانی هستند که مسئولیت های خود
          را به تقصیری واگذار می کنند که سختی های روح را تسکین می دهد.
        </p>
        <button className="text-xl border-2 border-white px-6 py-2 rounded-md hover:bg-orange-10 hover:text-black hover:border-orange-10 transition-all duration-300">
          فراخوانی برای اقدام
        </button>
      </div>
    </div>
  );
}
