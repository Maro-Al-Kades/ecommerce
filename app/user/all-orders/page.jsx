import CartCard from "@/components/other/CartCard";
import CategoryType from "@/components/shared/CategoryType";
import Paginations from "@/components/shared/Paginations";

const AdminAllOrders = () => {
  return (
    <section className="flex flex-col w-full items-start gap-8">
      <CategoryType CategoryName="ادارة جميع الطلبات" />

      <div className="flex flex-col w-full gap-4">
        <CartCard />
        <CartCard />
        <CartCard />
      </div>

      <div className="mx-auto">
      <Paginations />
      </div>
    </section>
  );
};

export default AdminAllOrders;
