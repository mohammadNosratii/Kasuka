import Logo from "../../../assets/images/logo.png";
import ChevronLeftMini from "../../../assets/icons/ChevronLeftMini";

export default function Footer() {
  return (
    <div className="child:px-3 child:md:px-8 child:lg:px-16 child:2xl:px-80">
      <div className="bg-zinc-800 text-white flex flex-col items-center gap-y-10 lg:flex-row gap-x-10 2xl:gap-x-20 py-16">
        <div className="space-y-5">
          <div className="flex items-center">
            <img className="w-20 h-20" src={Logo} alt="" />
            <h2 className="text-4xl">KASUKA</h2>
          </div>
          <div className="flex flex-col">
            <span>تهران خیابان آزادی</span>
            <span>تلفن: 01234567895</span>
            <span>ایمیل: info@example.com</span>
          </div>
          <div className="flex items-center gap-x-3 child:h-9 child:w-9 child:bg-zinc-700 child:flex child:items-center child:justify-center child:rounded-md child:cursor-pointer child:transition-all child:duration-300">
            <div className="hover:bg-orange-10 hover:text-black">
              <i className="fa fa-twitter"></i>
            </div>
            <div className="hover:bg-orange-10 hover:text-black">
              <i className="fa fa-facebook"></i>
            </div>
            <div className="hover:bg-orange-10 hover:text-black">
              <i className="fa fa-instagram"></i>
            </div>
            <div className="hover:bg-orange-10 hover:text-black">
              <i className="fa fa-skype"></i>
            </div>
            <div className="hover:bg-orange-10 hover:text-black">
              <i className="fa fa-linkedin"></i>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-10">
          <div>
            <h4 className="text-lg">لینک های مفید</h4>
            <ul className="child:flex child:items-center space-y-5 mt-3 child:text-sm child:transition-all child:duration-300">
              <li className="hover:text-orange-10">
                <ChevronLeftMini />
                <a href="">خانه</a>
              </li>
              <li className="hover:text-orange-10">
                <ChevronLeftMini />
                <a href="">درباره ما</a>
              </li>
              <li className="hover:text-orange-10">
                <ChevronLeftMini />
                <a href="">خدمات</a>
              </li>
              <li className="hover:text-orange-10">
                <ChevronLeftMini />
                <a href="">شرایط استفاده از خدمات</a>
              </li>
              <li className="hover:text-orange-10">
                <ChevronLeftMini />
                <a href="">سیاست حفظ حریم خصوصی</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg">خدمات ما</h4>
            <ul className="child:flex child:items-center space-y-5 mt-3 child:text-sm child:transition-all child:duration-300">
              <li className="hover:text-orange-10">
                <ChevronLeftMini />
                <a href="">طراحی وبسایت</a>
              </li>
              <li className="hover:text-orange-10">
                <ChevronLeftMini />
                <a href="">توسعه وب</a>
              </li>
              <li className="hover:text-orange-10">
                <ChevronLeftMini />
                <a href="">مدیریت تولید</a>
              </li>
              <li className="hover:text-orange-10">
                <ChevronLeftMini />
                <a href="">بازاریابی</a>
              </li>
              <li className="hover:text-orange-10">
                <ChevronLeftMini />
                <a href="">طراحی گرافیک</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-5">
          <h3 className="text-lg">خبرنامه ما</h3>
          <p>
            با این حال ، هیچ یک از چیزهایی که من می خوانم تقصیر بزرگ ما نخواهد
            بود
          </p>
          <form
            action=""
            className="child:py-3 child:text-black rounded-md overflow-hidden relative"
          >
            <input
              className="w-full px-2 outline-none"
              type="email"
              placeholder="ایمیل خود را وارد کنید"
            />
            <button className="bg-orange-10 hover:opacity-85 transition-all duration-300 absolute left-0 px-5">
              دنبال کردن
            </button>
          </form>
        </div>
      </div>
      <div className="bg-black text-white flex flex-col gap-y-2 justify-center items-center py-10">
        <h4>Kasukaهمه حقوق محفوظ است</h4>
        <h6>
          طراحی شده توسط
          <span className="text-orange-10">Kasuka</span>
        </h6>
      </div>
    </div>
  );
}
