import { Button } from "@nextui-org/react";
import Link from "next/link";
import { AiOutlineProduct } from "react-icons/ai";
import { TbShoppingBagSearch } from "react-icons/tb";
import {
  BiLogoMedium,
  BiSolidCategory,
  BiSolidCategoryAlt,
} from "react-icons/bi";
import { BsFillBagPlusFill } from "react-icons/bs";

const AdminRightBar = () => {
  return (
    <div className="w-[270px] rounded-2xl h-screen bg-content1 flex flex-col justify-between">
      <div>
        <Link href="/admin" className="text-3xl font-bold flex items-center justify-center pt-3 pb-8">
          الادارة
        </Link>
        <div className="flex flex-col px-3 gap-5">
          <Button
            as={Link}
            href="/admin/all-products"
            color="primary"
            variant="solid"
            endContent={<AiOutlineProduct size={18} />}
          >
            ادارة المنتجات
          </Button>
          <Button
            as={Link}
            href="/admin/all-orders"
            color="primary"
            variant="solid"
            endContent={<TbShoppingBagSearch size={18} />}
          >
            ادارة الطلبات
          </Button>
          <Button
            as={Link}
            href="/admin/add-brand"
            color="primary"
            variant="solid"
            endContent={<BiLogoMedium size={18} />}
          >
            اضف ماركة
          </Button>
          <Button
            as={Link}
            href="/admin/add-category"
            color="primary"
            variant="solid"
            endContent={<BiSolidCategory size={18} />}
          >
            اضف تصنيف
          </Button>
          <Button
            as={Link}
            href="/admin/add-subCategory"
            color="primary"
            variant="solid"
            endContent={<BiSolidCategoryAlt size={18} />}
          >
            اضف تصنيف فرعي
          </Button>
          <Button
            as={Link}
            href="/admin/add-product"
            color="primary"
            variant="solid"
            endContent={<BsFillBagPlusFill size={18} />}
          >
            اضف منتج
          </Button>
        </div>
      </div>

      <div className="pb-5 flex justify-center">
        <span>MARO-SYSTEMS</span>
      </div>
    </div>
  );
};

export default AdminRightBar;
