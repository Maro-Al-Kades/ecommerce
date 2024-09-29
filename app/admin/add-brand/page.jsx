import CategoryType from "@/components/shared/CategoryType";
import { Button, Input } from "@nextui-org/react";

const AddBrand = () => {
  return (
    <section className="flex flex-col gap-20">
      <CategoryType CategoryName={`اضافة ماركة جديدة`} />

      <form action="" className="flex flex-col gap-6 items-center justify-center">
        <Input
          label="اختر صورة.."
          type="file"
          name="file"
          variant="faded"
          color="primary"
          className="max-w-md"
        />

        <Input
          label="اسم الماركة الجديدة"
          type="text"
          variant="faded"
          color="primary"
          className="max-w-md"
        />

        <Button className="max-w-md" fullWidth color="primary">
          حفظ التعديلات
        </Button>
      </form>
    </section>
  );
};

export default AddBrand;
