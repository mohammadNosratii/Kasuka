import "./Header.css";
import Box from "./Box";

export default function Header() {
  return (
    <div className="header-container flex flex-col items-center justify-center gap-y-20 px-3 md:px-16">
      <div className="header-title text-lg mt-24">
        <h1 className="text-3xl">
          راه حل های قدرتمند دیجیتال با
          <br />
          <span>kasuka</span>
        </h1>
        <h3 className="mt-3 text-xl">ما تیمی از بازاریابان با استعداد دیجیتال هستیم</h3>
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
