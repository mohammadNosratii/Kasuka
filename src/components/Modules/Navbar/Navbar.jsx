import "./Navbar.css"

export default function NavBar() {
  return (
    <div className="nav-container">
        <h1>
            <a className="nav-logo" href="#">
                Kasuka
                <img src="logo.png" alt="" />
            </a>
        </h1>
        <nav>
            <ul className="nav-link">
                <li><a href="">خانه</a></li>
                <li><a href="">درباره ی ما</a></li>
                <li><a href="">خدمات</a></li>
                <li><a href="">نمونه کارها</a></li>
                <li><a href="">تیم</a></li>
                <li><a href="">لیست کشویی</a></li>
                <li><a href="">تماس با ما</a></li>
            </ul>
        </nav>
        <a className="nav-begin-btn" href="">شروع</a>
    </div>
  )
}
