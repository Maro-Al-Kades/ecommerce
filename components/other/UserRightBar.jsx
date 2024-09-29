import { Button } from "@nextui-org/react";
import Link from "next/link";
import { AiOutlineProduct } from "react-icons/ai";
import { BiHeartCircle, BiUserCircle } from "react-icons/bi";
import { MdLocationCity } from "react-icons/md";

const UserRightBar = () => {
  return (
    <div className="w-[270px] rounded-2xl h-screen bg-content1 flex flex-col justify-between">
      <div>
        <Link
          href="/admin"
          className="text-2xl font-bold flex items-center justify-center pt-3 pb-8"
        >
          الملف الشخصي
        </Link>
        <div className="flex flex-col px-3 gap-5">
          <Button
            as={Link}
            href="/user"
            color="primary"
            variant="solid"
            endContent={<AiOutlineProduct size={18} />}
          >
            ادارة الطلبات
          </Button>
          <Button
            as={Link}
            href="/user/favourite"
            color="primary"
            variant="solid"
            endContent={<BiHeartCircle size={18} />}
          >
            قائمة المفضلة
          </Button>
          <Button
            as={Link}
            href="/user/address"
            color="primary"
            variant="solid"
            endContent={<MdLocationCity size={18} />}
          >
            العناوين الشخصية
          </Button>
          <Button
            as={Link}
            href="/user/profile"
            color="primary"
            variant="solid"
            endContent={<BiUserCircle size={18} />}
          >
            الصفحة الشخصية
          </Button>
        </div>
      </div>

      <div className="pb-5 flex justify-center">
        <span>MARO-SYSTEMS</span>
      </div>
    </div>
  );
};

export default UserRightBar;
