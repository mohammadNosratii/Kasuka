import "./Box.css"
import CalenderDays from "../../../../assets/icons/calender-days.svg"

export default function Box() {
  return (
    <div className="box-wrapper">
        <img className="box-icon" src={CalenderDays} alt="" />
        <a href="#">نمونه کارها</a>
    </div>
  )
}
