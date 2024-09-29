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
import { BiPencil, BiTrash } from "react-icons/bi";

const AdminProductCard = ({ title, price, imageSrc, ProductLink }) => {
  return (
    <Card
      isHoverable
      className="rounded-3xl cursor-pointer w-[320px] h-[480px] flex items-center flex-col justify-center p-3"
    >
      <CardHeader className="flex items-center justify-center">
        <Image src={imageSrc} alt="/" className="h-[250px] w-[300px]" />
      </CardHeader>

      <CardBody className="flex flex-col items-start justify-center gap-3 overflow-hidden">
        <p className="text-right w-56 truncate ...">{title}</p>
        <Chip>{price} جنيه مصري</Chip>
      </CardBody>

      <CardFooter className="flex w-full items-center justify-between gap-2">
        <Button
          fullWidth
          className=""
          color="warning"
          as={Link}
          href="/product/1"
          endContent={<BiPencil size={18} />}
        >
          تعديل المنتج
        </Button>
        <Button fullWidth color="danger" endContent={<BiTrash size={18} />}>
          حدف المنتج
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AdminProductCard;
