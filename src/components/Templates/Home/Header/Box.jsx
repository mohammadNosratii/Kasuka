import "./Box.css"
import CalenderDays from "../../../../assets/icons/calender-days.svg"

export default function Box() {
  return (
    <div className="box-wrapper w-full md:w-40 md:h-40 py-5">
        <img className="box-icon" src={CalenderDays} alt="" />
        <a href="#">نمونه کارها</a>
    </div>
  )
}
