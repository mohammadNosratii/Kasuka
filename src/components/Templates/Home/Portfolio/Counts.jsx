import CountsImg from "../../../../assets/images/counts-img.jpg";
import Statistics from "./Statistics";

export default function Counts() {
  return (
    <div className="flex flex-col xl:flex-row xl:items-center gap-10">
      <div>
        <img className="w-full" src={CountsImg} alt="" />
      </div>
      <div className="px-5">
        <div>
          <h1 className="text-4xl font-VasirBold">
            شایسته ترین لذت را به هر حال ارائه می دهد
          </h1>
          <p className="my-3">
            خود درد ممکن است درد زیادی باشد ، اما دلیل اصلی آن درد است ، اما من
            به آن زمان می دهم تا مانند یک درد و درد بزرگ در آن فرو برود. درد
            مقصر است
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-5 xl:gap-y-20 md:gap-x-5">
          <Statistics />
          <Statistics />
          <Statistics />
          <Statistics />
        </div>
      </div>
    </div>
  );
}
