import Cube from '../../../../assets/icons/Cube'
import Photo from '../../../../assets/icons/Photo'
import Shield from '../../../../assets/icons/Shield'
import NewsPaper from "../../../../assets/icons/NewsPaper";
import Feature from "../../../../assets/images/features.jpg";

export default function Features() {
  return (
    <div className="grid lg:grid-cols-2 gap-x-8 gap-y-10 mb-32">
      <div>
        <img className='lg:h-[400px]' src={Feature} alt="" />
      </div>
      <div className="flex flex-col justify-between gap-y-8 lg:gap-y-6">
        <div className="flex items-center gap-x-3">
          <NewsPaper />
          <div className=" space-y-2">
            <h4 className="text-xl font-VasirBold">تبلیغ سختی است</h4>
            <p>نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند</p>
          </div>
        </div>
        <div className="flex items-center gap-x-3">
          <Cube />
          <div className=" space-y-2">
            <h4 className="text-xl font-VasirBold">کدام یک از اینهاست</h4>
            <p>
              کسانی که هوس سیاهان می کنند نمی بینند ، آنها مقصر هستند که خدمات
              خود را رها کرده اند
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-3">
          <Photo />
          <div className=" space-y-2">
            <h4 className="text-xl font-VasirBold">یا کور شده است</h4>
            <p>
              یا می پذیرد یا زمانی که هیچ کس از همه اجتناب نمی کند. همه دردهایی
              که آنها را بیشتر می کند
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-3">
          <Shield />
          <div className=" space-y-2">
            <h4 className="text-xl font-VasirBold">حقیقت مبارک</h4>
            <p>آنها بدون تحمل حقیقت در زمان ستایش زندگی از هیچ چیزی پیروی نمی کنند</p>
          </div>
        </div>
      </div>
    </div>
  );
}
