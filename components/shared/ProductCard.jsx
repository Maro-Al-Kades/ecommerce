import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Image,
} from "@nextui-org/react";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";
// import Image from "next/image";

const ProductCard = ({ title, price, imageSrc, ProductLink }) => {
  return (
    <Card
      isHoverable
      className="rounded-3xl cursor-pointer w-[300px] h-[480px] flex items-center flex-col justify-center p-3"

   >
      <CardHeader className="flex items-center justify-center">
        <Image src={imageSrc} alt="/" className="h-[250px] w-[300px]" />
      </CardHeader>

      <CardBody className="flex flex-col items-start justify-center gap-3 overflow-hidden">
        <p className="text-right w-56 truncate ...">{title}</p>
        <Chip>{price} جنيه مصري</Chip>
      </CardBody>

      <CardFooter className="flex gap-2">
        <Button className="flex-1" color="primary" as={Link} href='/product/1'>
          مشاهدة المنتج
        </Button>
        <Button isIconOnly color="primary" variant="faded">
          <FaCartPlus />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
