import { Button, ButtonGroup } from "@nextui-org/react";

const CategoriesBar = () => {
  return (
    <div className="py-6">
      <ButtonGroup color="primary" className="flex flex-row flex-wrap">
        <Button>الكل</Button>
        <Button>الكترونيات</Button>
        <Button>ملابس</Button>
        <Button>كهربية</Button>
        <Button>تخفيضات</Button>
        <Button>تخفيضات</Button>
        <Button>تخفيضات</Button>
        <Button>تخفيضات</Button>
        <Button>تخفيضات</Button>
        <Button>المزيد</Button>
      </ButtonGroup>
    </div>
  );
};

export default CategoriesBar;
