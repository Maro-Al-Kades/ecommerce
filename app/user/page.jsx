import CartCard from "@/components/other/CartCard";
import CategoryType from "@/components/shared/CategoryType";
import Paginations from "@/components/shared/Paginations";

const AdminPage = () => {
  return (
    <section className="flex flex-col w-full gap-5">
      <CategoryType CategoryName={`اهلا بك مارو عصام`} />

      <div className="flex flex-col gap-4">
        <CartCard />
        <CartCard />
        <CartCard />
      </div>

      <Paginations />
    </section>
  );
};

export default AdminPage;
