"use client";

import CategoryType from "@/components/shared/CategoryType";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";

export const animals = [
  { key: "cat", label: "Cat" },
  { key: "dog", label: "Dog" },
  { key: "elephant", label: "Elephant" },
  { key: "lion", label: "Lion" },
  { key: "tiger", label: "Tiger" },
  { key: "giraffe", label: "Giraffe" },
  { key: "dolphin", label: "Dolphin" },
  { key: "penguin", label: "Penguin" },
  { key: "zebra", label: "Zebra" },
  { key: "shark", label: "Shark" },
  { key: "whale", label: "Whale" },
  { key: "otter", label: "Otter" },
  { key: "crocodile", label: "Crocodile" },
];

const AdminAddSubCategory = () => {
  return (
    <section className="flex flex-col gap-20">
      <CategoryType CategoryName="اضافة تصنيف فرعي" />

      <form className="flex flex-col gap-6 items-center justify-center">
        <Input
          label="اسم التصنيف"
          type="text"
          placeholder="اكتب هنا اسم التصنيف"
          className="max-w-md"
          color="primary"
          variant="faded"

        />

        <Select
          label="اختر تصنيف"
          // placeholder="Select an animal"
          className="max-w-md"
          color="primary"
          variant="faded"

        >
          {animals.map((animal) => (
            <SelectItem key={animal.key}>{animal.label}</SelectItem>
          ))}
        </Select>

        <Button type="submit" fullWidth className="max-w-md" color="primary">انشاء التصنيف الفرعي</Button>
      </form>
    </section>
  );
};

export default AdminAddSubCategory;
