import "./Header.css";
import Box from "./Box";

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-title">
        <h1>
          راه حل های قدرتمند دیجیتال با
          <br />
          <span>kasuka</span>
        </h1>
        <h3>ما تیمی از بازاریابان با استعداد دیجیتال هستیم</h3>
      </div>
      <div className="boxs">
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    </div>
  );
}
