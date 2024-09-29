import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import { FaEdit } from "react-icons/fa";
import { TbTrash } from "react-icons/tb";

const AddressCard = () => {
  const PhoneNumber = "0123456789";
  return (
    <Card className={`w-full p-3`} isHoverable>
      <CardHeader className="flex flex-row items-center justify-between">
        <h4 className="text-xl font-semibold">المنزل</h4>
        <div className="flex flex-row gap-2">
          <Button color="warning">
            <FaEdit size={18} />
          </Button>
          <Button color="danger">
            <TbTrash size={18} />
          </Button>
        </div>
      </CardHeader>
      <CardBody>
        <p className="text-right">القاهرة مدينة نصر شارع التسعين عمارة 14</p>
      </CardBody>

      <CardFooter>
        <p>
          رقم الهاتف : <span className="text-primary">{PhoneNumber}</span>
        </p>
      </CardFooter>
    </Card>
  );
};

export default AddressCard;
