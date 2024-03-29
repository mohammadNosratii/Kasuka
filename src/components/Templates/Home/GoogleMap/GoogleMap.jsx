import Info from "./Info";

export default function GoogleMap() {
  return (
    <div className="px-3 md:px-8 lg:px-16 2xl:px-80">
      <div className="space-y-1 my-14">
        <div className="flex items-center gap-x-3">
          <span className=" text-gray-500">تماس با ما</span>
          <div className="w-32 h-[1px] bg-orange-10"></div>
        </div>
        <h2 className="text-3xl font-VasirBold">با ما تماس بگیرید</h2>
      </div>
      <iframe
        width="100%"
        height="300"
        src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=52.70967533219885, -8.020019531250002&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>
      <div className="flex flex-col lg:flex-row gap-x-20 xl:gap-x-40 gap-y-10 my-14">
        <div className="space-y-10 w-2/4 lg:w-1/3">
          <Info />
          <Info />
          <Info />
        </div>
        <div className="w-full flex flex-col gap-y-5">
          <div className="child:border-2 flex flex-col gap-y-5 md:flex-row gap-x-2 child:w-full child:p-3 child:rounded-md">
            <input type="text" placeholder="نام" />
            <input type="email" name="" id="" placeholder="ایمیل" />
          </div>
          <input
            className="border-2 p-3 rounded-md"
            type="text"
            name=""
            id=""
            placeholder="عنوان"
          />
          <textarea
            className="border-2 rounded-md p-3"
            name="message"
            id="message"
            cols="30"
            rows="4"
            placeholder="پیام"
          ></textarea>
          <button className="w-28 h-11 mx-auto rounded-md bg-orange-10 hover:opacity-85 transition-all duration-300">ارسال پیام</button>
        </div>
      </div>
    </div>
  );
}
