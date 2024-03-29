import Team from "../../../../assets/images/team-4.jpg";

export default function OurTeamBox() {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      <div className="relative group">
        <img src={Team} alt="" />
        <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 child:bg-white child:opacity-90 child:shadow-lg child:rounded-lg child:w-9 child:h-9 flex justify-center gap-5 absolute bottom-6 left-0 right-0">
          <a className="flex items-center justify-center hover:bg-orange-10 transition-all duration-300" href="">
            <i className="fa fa-twitter"></i>
          </a>
          <a className="flex items-center justify-center hover:bg-orange-10 transition-all duration-300" href="">
            <i className="fa fa-facebook"></i>
          </a>
          <a className="flex items-center justify-center hover:bg-orange-10 transition-all duration-300" href="">
            <i className="fa fa-instagram"></i>
          </a>
          <a className="flex items-center justify-center hover:bg-orange-10 transition-all duration-300" href="">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="p-4">
        <h4 className=" font-VasirBold text-lg">آماندا جپسون</h4>
        <span>حسابدار</span>
      </div>
    </div>
  );
}
