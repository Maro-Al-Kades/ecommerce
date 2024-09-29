"use client";

import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/breadcrumbs";
import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <section className="flex items-center justify-center flex-col gap-12">
      <div className="flex items-center justify-center flex-col gap-4">
        <h1 className="text-4xl font-semibold flex items-center justify-center text-primary">
          تسجيل حساب جديد
        </h1>
        <Breadcrumbs separator="|">
          <BreadcrumbItem as={Link} href="/">
            الصفحة الرئيسية
          </BreadcrumbItem>
          <BreadcrumbItem>تسجيل حساب جديد</BreadcrumbItem>
        </Breadcrumbs>
      </div>

      <div className="flex flex-row items-center w-3/4 justify-between">
        <form className="flex flex-col gap-5">
          <Input
            type="username"
            label="اسم المستخدم"
            placeholder="اكتب اسم المستخدم..."
            variant="faded"
            className="lg:min-w-[450px]"
            color="primary"
          />
          <Input
            type="email"
            label="الايميل"
            placeholder="اكتب الايميل الشخصي..."
            variant="faded"
            className="lg:min-w-[450px]"
            color="primary"
          />
          <Input
            type="password"
            label="كلمة السر"
            placeholder="اكتب كلمة السر..."
            variant="faded"
            className="lg:min-w-[450px]"
            color="primary"
          />

          <Button color="primary">تسجيل حساب الجديد</Button>

          <Button variant="light" as={Link} href="/auth/login">
            لديك حساب بالفعل <span className="text-primary">اضعط هنا</span>
          </Button>
        </form>

        <div>
          <Image src="/register.svg" alt="login img" width={400} height={400} />
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
