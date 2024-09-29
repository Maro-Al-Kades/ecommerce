"use client";

import CategoryType from "@/components/shared/CategoryType";
import { Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { RadioGroup, Radio, cn, Button } from "@nextui-org/react";

export const CustomRadio = (props) => {
  const { children, ...otherProps } = props;

  return (
    <Radio
      {...otherProps}
      classNames={{
        base: cn(
          "inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between",
          "flex-col min-w-[100px] cursor-pointer rounded-xl gap-4 p-4 border-2 border-transparent",
          "data-[selected=true]:border-primary"
        ),
      }}
    >
      {children}
    </Radio>
  );
};

const AddProductPage = () => {
  return (
    <section className="flex flex-col gap-20">
      <CategoryType CategoryName="اضافة منتج جديد" />

      <form
        action=""
        className="flex flex-col gap-6 items-center justify-center"
      >
        <Input
          label="اختر صورة.."
          type="file"
          name="file"
          color="primary"
          className="max-w-3xl"
          variant="faded"
        />

        <Input
          // label="اسم المنتج"
          type="text"
          color="primary"
          placeholder="اكتب هنا اسم المنتج..."
          className="max-w-3xl"
          variant="faded"
        />

        <Textarea
          // label="وصف المنتج"
          placeholder="اكتب هنا وصف المنتج..."
          color="primary"
          className="max-w-3xl"
          minRows={6}
          variant="faded"
        />

        <Input
          // label="السعر قبل الخصم"
          type="text"
          color="primary"
          placeholder="اكتب هنا السعر قبل الخصم..."
          className="max-w-3xl"
          variant="faded"
        />

        <Select
          // label="Favorite Animal"
          placeholder="التصنيف الرئيسي"
          className="max-w-3xl"
          color="primary"
          variant="faded"
        >
          <SelectItem>egypt</SelectItem>
        </Select>

        <Input
          // label="اسم المنتج"
          type="text"
          color="primary"
          placeholder="التصنيف الفرعي"
          className="max-w-3xl"
          variant="faded"
        />

        <Select
          // label="Favorite Animal"
          placeholder="الماركة"
          className="max-w-3xl"
          color="primary"
          variant="faded"
        >
          <SelectItem>egypt</SelectItem>
        </Select>

        <RadioGroup>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            <CustomRadio description="اسود" value="اسود" />
            <CustomRadio description="احمر" value="احمر" />
            <CustomRadio description="ازرق" value="ازرق" />
            <CustomRadio description="ابيض" value="ابيض" />
            <CustomRadio description="اصفر" value="اصفر" />
            <CustomRadio description="اخضر" value="اخضر" />
          </div>
        </RadioGroup>

        <Button className="max-w-3xl" fullWidth color="primary">
          حفظ التعديلات
        </Button>
      </form>
    </section>
  );
};

export default AddProductPage;
