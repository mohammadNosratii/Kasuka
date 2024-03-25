import "./Navbar.css";
import Logo from "../../../assets/images/logo.png"
import ChevronDown from "../../../assets/icons/ChevronDown"
import ChevronLeft from "../../../assets/icons/ChevronLeft";


export default function NavBar() {
  return (
    <div className="nav-container">
      <h1>
        <a className="nav-logo" href="#">
          <img className="logo" src={Logo} alt="" />
          KASUKA
        </a>
      </h1>
      <nav>
        <ul className="nav-link">
          <li>
            <a href="">خانه</a>
          </li>
          <li>
            <a href="">درباره ی ما</a>
          </li>
          <li>
            <a href="">خدمات</a>
          </li>
          <li>
            <a href="">نمونه کارها</a>
          </li>
          <li>
            <a href="">تیم</a>
          </li>
          <li className="group relative">
            <a className="dropdown-menu h-11" href="#">
              <span className="group-hover:text-orange-10">لیست کشویی</span>
              <ChevronDown />
            </a>
            <ul className="invisible opacity-0 group-hover:visible flex flex-col justify-evenly group-hover:opacity-100 transition-all duration-300 delay-75 absolute top-full right-3 w-52 h-56 bg-white rounded-lg p-3 child:p-2 child:transition-all child:duration-300 child:rounded-md">
              <li className="hover:bg-orange-10"><a href="">لیست کشویی ۱</a></li>
              <li className="hover:bg-orange-10 list-menu-wrapper relative">
                <a className="flex items-center justify-between" href="">
                <span>لیست کشویی عمیق</span>
                <ChevronLeft />
                </a>
                <ul className="list-menu invisible opacity-0 flex flex-col justify-evenly group-hover:opacity-100 transition-all duration-300 delay-75 absolute top-full -right-[119%] w-52 h-56 bg-white rounded-lg p-3 child:p-2 child:transition-all child:duration-300 child:rounded-md shadow-lg">
                  <li className="hover:bg-orange-10"><a href="">لیست کشویی عمیق ۱</a></li>
                  <li className="hover:bg-orange-10"><a href="">لیست کشویی عمیق ۲</a></li>
                  <li className="hover:bg-orange-10"><a href="">لیست کشویی عمیق ۳</a></li>
                  <li className="hover:bg-orange-10"><a href="">لیست کشویی عمیق ۴</a></li>
                  <li className="hover:bg-orange-10"><a href="">لیست کشویی عمیق ۵</a></li>
                </ul>
              </li>
              <li className="hover:bg-orange-10"><a href="">لیست کشویی ۲</a></li>
              <li className="hover:bg-orange-10"><a href="">لیست کشویی ۳</a></li>
              <li className="hover:bg-orange-10"><a href="">لیست کشویی ۴</a></li>
            </ul>
          </li>
          <li>
            <a href="">تماس با ما</a>
          </li>
        </ul>
      </nav>
      <a className="nav-begin-btn" href="">
        شروع
      </a>
    </div>
  );
}
