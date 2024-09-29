import CartCard from "@/components/other/CartCard";
import CategoryType from "@/components/shared/CategoryType";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Input,
} from "@nextui-org/react";

import Image from "next/image";
import Link from "next/link";
import { BsCashStack, BsTrash } from "react-icons/bs";

const Cartpage = () => {
  return (
    <section className="flex flex-col gap-5">
      <CategoryType CategoryName="عربة التسوق" />

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="flex flex-col gap-6">
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
          </div>
        </div>
        <div className=" lg:min-w-[500px]">
          <Card className="p-3">
            <CardHeader className="flex items-center flex-row gap-3">
              <Input
                type="text"
                label="كود الخصم"
                placeholder="اكتب هنا كود الخصم..."
              />
              <Button className="px-6" color="primary">
                تطبيق الخصم
              </Button>
            </CardHeader>
            <CardBody>
              <Button isDisabled>34000 جنيه مصري</Button>
            </CardBody>
            <CardFooter>
              <Button
                fullWidth
                color="primary"
                endContent={<BsCashStack size={18} />}
                as={Link}
                href="/payment"
              >
                اتمام الشراء
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Cartpage;
