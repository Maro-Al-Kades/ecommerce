import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";

const Ads = () => {
  return (
    <section className="overflow-hidden">
      <Card>
        <CardBody
          className="flex flex-col md:flex-row items-center justify-between md:h-72 overflow-hidden
        px-20"
        >
          <h2 className="text-center md:text-right text-2xl md:text-4xl font-semibold text-primary">
            خصم يصل الي 30% علي الاجهزة الالكترونية
          </h2>
          <div>
            <Image src="/pc.svg" alt="ad image" width={300} height={200} />
          </div>
        </CardBody>
      </Card>
    </section>
  );
};

export default Ads;
