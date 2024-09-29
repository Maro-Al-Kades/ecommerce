import { Button, Card, CardBody, Chip, Input } from "@nextui-org/react";
import Image from "next/image";
import { BsTrash } from "react-icons/bs";

const CartCard = () => {
  return (
    <Card className="p-3" isHoverable>
      <CardBody className="flex flex-col lg:flex-row items-start justify-between">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start gap-10">
          <Image src="/5.png" alt="img" width={120} height={300} />
          <div className="flex-1 w-full flex flex-col gap-4 items-start justify-start">
            <Chip color="primary">الالكترونيات</Chip>

            <h3 className="text-lg lg:w-[500px] items-start text-start">
              ايفون XR بذاكرة سعة 120 جيجابايت وبدعم تقنية 5G مع تطبيق فيس تايم
            </h3>

            <div className="flex flex-row gap-2 items-center">
              <h3 className="text-lg font-semibold">الماركة :</h3>
              <span>أبل</span>
            </div>

            <span className="w-8 h-8 rounded-full bg-red-600 cursor-pointer" />

            <Input
              type="text"
              label="الكمية"
              className="w-full lg:max-w-[150px]"
              placeholder="..."
            />
          </div>
        </div>

        <div className="flex flex-row lg:flex-col items-center lg:items-end w-full pt-4 justify-between">
          <Button isIconOnly color="danger">
            <BsTrash size={18} />
          </Button>

          <p className="font-semibold text-lg lg:mt-40 text-primary">3000 جنيه مصري</p>
        </div>
      </CardBody>
    </Card>
  );
};

export default CartCard;
