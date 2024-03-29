import Map from "../../../../assets/icons/Map";

export default function Info() {
  return (
    <div className="flex items-center gap-x-3">
      <div className="bg-orange-10 rounded-md w-11 h-11 flex justify-center items-center">
        <Map />
      </div>
      <div>
        <h4 className="text-2xl font-VasirBold">آدرس:</h4>
        <span>تهران خیابان آزادی</span>
      </div>
    </div>
  );
}
