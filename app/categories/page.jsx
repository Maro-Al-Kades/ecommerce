import CategoriesCards from "@/components/shared/CategoriesCards";
import PageHeader from "@/components/shared/PageHeader";
import Paginations from "@/components/shared/Paginations";

const Categoryies = () => {
  return (
    <section className="flex flex-col gap-12">
      <PageHeader
        pageName="جميع التصنيفات"
        itemOne="الصفحةالرئيسية"
        itemTwo="جميع التصنيفات"
      />

      <CategoriesCards />
      <Paginations />
    </section>
  );
};

export default Categoryies;
