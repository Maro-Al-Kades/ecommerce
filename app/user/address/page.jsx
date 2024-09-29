import AddressCard from "@/components/other/AddressCard";
import CategoryType from "@/components/shared/CategoryType";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { BiPlusCircle } from "react-icons/bi";

const UserAddress = () => {
  return (
    <section className="flex flex-col w-full gap-8">
      <CategoryType CategoryName={`العناوين الشخصية`} />

      <div className="flex flex-col gap-4">
        <AddressCard />
        <AddressCard />
      </div>

      <div className="flex items-center justify-center">
        <Button
          className="w-[250px] "
          color="primary"
          endContent={<BiPlusCircle size={18} />}
          as={Link}
          href="/user/add-address"
        >
          اضافة عنوان جديد
        </Button>
      </div>
    </section>
  );
};

export default UserAddress;
