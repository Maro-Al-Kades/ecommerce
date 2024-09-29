import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Pagination,
  Textarea,
} from "@nextui-org/react";
import { FaStar } from "react-icons/fa";
import Paginations from "../shared/Paginations";

const CommentsSection = () => {
  return (
    <div className="mt-28 bg-dark bg-content1 rounded-2xl p-8">
      <div className="flex flex-col items-start justify-start gap-4">
        <div className="head flex items-center justify-start gap-3">
          <h3 className="text-3xl font-semibold">التقييمات</h3>

          <span className="flex flex-row gap-2 items-center text-lg">
            <FaStar className="text-yellow-400" size={18} /> 4.5
            <span className="text-primary">(160 تقييم)</span>
          </span>
        </div>

        <div className="w-full flex flex-col gap-4">
          <Textarea
            label="التعليق"
            placeholder="اكتب تعليقك هنا...."
            className="max-w-full p-3"
            variant="faded"
            minRows={6}
          />
          <Button className="w-[250px] mx-auto" color="primary">
            اضف التعليق
          </Button>
        </div>
      </div>

      <Divider className="mt-8 max-w-2xl mx-auto" />
      <div className="mt-12 flex flex-col gap-4">
        <Card className="p-4" isHoverable>
          <CardHeader className="flex flex-row justify-between ">
            <h2 className="text-lg font-semibold">مارو عصام</h2>
            <div className="flex flex-row gap-2 items-center text-lg text-yellow-400">
              <FaStar className="" size={18} /> 4.5
            </div>
          </CardHeader>

          <CardBody className="items-start">
            <p className="text-gray-400">
              عميل تمام ما شكلته عليه والتجارة تحققت فيها على الأقل. تقيمته على
              مستوى 5 بالنسبة لي.
            </p>
          </CardBody>
        </Card>

        <Card className="p-4" isHoverable>
          <CardHeader className="flex flex-row justify-between ">
            <h2 className="text-lg font-semibold">مارو عصام</h2>
            <div className="flex flex-row gap-2 items-center text-lg text-yellow-400">
              <FaStar className="" size={18} /> 4.5
            </div>
          </CardHeader>

          <CardBody className="items-start">
            <p className="text-gray-400">
              عميل تمام ما شكلته عليه والتجارة تحققت فيها على الأقل. تقيمته على
              مستوى 5 بالنسبة لي.
            </p>
          </CardBody>
        </Card>

        <Card className="p-4" isHoverable>
          <CardHeader className="flex flex-row justify-between ">
            <h2 className="text-lg font-semibold">مارو عصام</h2>
            <div className="flex flex-row gap-2 items-center text-lg text-yellow-400">
              <FaStar className="" size={18} /> 4.5
            </div>
          </CardHeader>

          <CardBody className="items-start">
            <p className="text-gray-400">
              عميل تمام ما شكلته عليه والتجارة تحققت فيها على الأقل. تقيمته على
              مستوى 5 بالنسبة لي.
            </p>
          </CardBody>
        </Card>

        <Card className="p-4" isHoverable>
          <CardHeader className="flex flex-row justify-between ">
            <h2 className="text-lg font-semibold">مارو عصام</h2>
            <div className="flex flex-row gap-2 items-center text-lg text-yellow-400">
              <FaStar className="" size={18} /> 4.5
            </div>
          </CardHeader>

          <CardBody className="items-start">
            <p className="text-gray-400">
              عميل تمام ما شكلته عليه والتجارة تحققت فيها على الأقل. تقيمته على
              مستوى 5 بالنسبة لي.
            </p>
          </CardBody>
        </Card>
      </div>

      <Paginations />
    </div>
  );
};

export default CommentsSection;
