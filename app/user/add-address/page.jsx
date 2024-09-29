import CategoryType from "@/components/shared/CategoryType";
import { Button, Input, Textarea } from "@nextui-org/react";
import React from "react";

const UserAddAdress = () => {
  return (
    <section className="flex flex-col w-full gap-8">
      <CategoryType CategoryName={`اضافة عنوان جديد`} />

      <form className="flex flex-col max-w-2xl gap-5">
        <Input
          type="text"
          label="العنوان مثلا (المنزل - العمل)"
          // placeholder=""
          color="primary"
        />
        <Textarea label="العنوان بالتفصيل" color="primary" minRows={6} />
        <Input type="number" color="primary" label="رقم الهاتف" />

        <Button color="primary">اضافة الي العناوين</Button>
      </form>
    </section>
  );
};

export default UserAddAdress;
