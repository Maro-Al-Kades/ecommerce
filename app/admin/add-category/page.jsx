import CategoryType from "@/components/shared/CategoryType";
import { Button, Input } from "@nextui-org/react";

const AddCategory = () => {
  return (
    <section className="flex flex-col gap-20">
      <CategoryType CategoryName={`اضافة تصنيف جديد`} />

      <form
        action=""
        className="flex flex-col gap-6 items-center justify-center"
      >
        <Input
          label="اختر صورة.."
          type="file"
          name="file"
          color="primary"
          variant="faded"

          className="max-w-md"
        />

        <Input
          label="اسم التصنيف الجديد"
          type="text"
          color="primary"
          variant="faded"

          placeholder="اكتب هنا اسم التصنيف الجديد.."
          className="max-w-md"
        />

        <Button className="max-w-md" fullWidth color="primary">
          حفظ التعديلات
        </Button>
      </form>
    </section>
  );
};

export default AddCategory;
