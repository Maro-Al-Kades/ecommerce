import Image from "next/image";
import { Button, Chip } from "@nextui-org/react";
import { FaCartPlus, FaStar } from "react-icons/fa";

const ProductDetailsHeader = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-start justify-start gap-8">
        <div className="bg-primary/30 rounded-2xl w-[350px] h-[450px] flex items-center justify-center">
          <Image src="/5.png" alt="image" width={200} height={250} />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <Chip color="primary">الالكترونيات</Chip>
            <h3 className="text-xl">
              ايفون XR بذاكرة سعة 120 جيجابايت وبدعم تقنية 5G مع تطبيق فيس تايم
            </h3>
            <span className="flex flex-row gap-2 items-center text-lg">
              <FaStar className="text-yellow-400" size={18} /> 4.5
            </span>
          </div>
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-row items-center gap-2">
              <h4 className="text-2xl font-semibold">الماركة :</h4>
              <span className="text-xl ">ابل</span>
            </div>
            <div className="flex items-center flex-row gap-2">
              <span className="w-8 h-8 rounded-full bg-black cursor-pointer" />
              <span className="w-8 h-8 rounded-full bg-blue-600 cursor-pointer" />
              <span className="w-8 h-8 rounded-full bg-red-600 cursor-pointer" />
            </div>
          </div>
          <div>
            <h4 className="text-2xl font-semibold">المواصفات :</h4>

            <p className="text-lg max-w-[800px]">
              الايفون (iPhone) هو هاتف ذكي تم تطويره وتسويقه بواسطة شركة آبل
              (Apple). تم إطلاق أول جهاز iPhone في عام 2007، وأصبح منذ ذلك الحين
              واحدًا من أكثر الهواتف شعبية في العالم بفضل تصميمه الأنيق وتقنياته
              المتقدمة. إليك بعض المعلومات الرئيسية عن iPhone
            </p>
          </div>

          <div className="flex gap-3 flex-row">
            <Button
              isDisabled
              color="primary"
              variant="flat"
              className="opacity-100 dark:text-white"
            >
              34000 جنيه مصري
            </Button>
            <Button color="primary" variant="solid" endContent={<FaCartPlus />}>
              اضف الي العربة
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsHeader;
