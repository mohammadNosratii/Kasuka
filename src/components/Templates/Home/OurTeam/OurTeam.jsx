import OurTeamBox from "./OurTeamBox";

export default function OurTeam() {
  return (
    <div className="px-3 md:px-8 lg:px-16 2xl:px-80">
      <div className="space-y-1 my-14">
        <div className="flex items-center gap-x-3">
          <span className=" text-gray-500">تیم</span>
          <div className="w-32 h-[1px] bg-orange-10"></div>
        </div>
        <h2 className="text-3xl font-VasirBold">تیم ما را بررسی کنید</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-10 md:gap-5 mb-32">
        <OurTeamBox />
        <OurTeamBox />
        <OurTeamBox />
        <OurTeamBox />
      </div>
    </div>
  );
}
