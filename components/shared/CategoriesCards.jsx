import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const CategoriesCards = () => {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-10">
      <Card isHoverable isPressable>
        <CardBody>
          <Image src="/3.jpg" alt="Category Image" width={200} height={200} />
        </CardBody>
      </Card>
      <Card isHoverable isPressable>
        <CardBody>
          <Image src="/3.jpg" alt="Category Image" width={200} height={200} />
        </CardBody>
      </Card>
      <Card isHoverable isPressable>
        <CardBody>
          <Image src="/3.jpg" alt="Category Image" width={200} height={200} />
        </CardBody>
      </Card>
      <Card isHoverable isPressable>
        <CardBody>
          <Image src="/3.jpg" alt="Category Image" width={200} height={200} />
        </CardBody>
      </Card>
      <Card isHoverable isPressable>
        <CardBody>
          <Image src="/3.jpg" alt="Category Image" width={200} height={200} />
        </CardBody>
      </Card>
      <Card isHoverable isPressable>
        <CardBody>
          <Image src="/3.jpg" alt="Category Image" width={200} height={200} />
        </CardBody>
      </Card>
    </div>
  );
};

export default CategoriesCards;
