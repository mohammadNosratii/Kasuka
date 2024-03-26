import "./Header.css";
import Box from "./Box";

export default function Header() {
  return (
    <div className="header-container h-auto md:h-[90vh] flex flex-col items-center justify-center gap-y-20 px-3 md:px-16">
      <div className="header-title mt-24 lg:mt-32">
        <h1 className="text-3xl md:text-5xl xl:max-w-[430px]">
          راه حل های قدرتمند دیجیتال با
          <br />
          <span>kasuka</span>
        </h1>
        <h3 className="mt-3 text-xl md:text-2xl">ما تیمی از بازاریابان با استعداد دیجیتال هستیم</h3>
      </div>
      <div className="flex flex-wrap gap-5 justify-center mb-20">
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    </div>
  );
}
