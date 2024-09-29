import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col gap-4 items-start justify-center ">
        <h1 className="text-5xl font-bold text-primary">
          {" "}
          نأسف الصفحة المطلوبة غير موجودة
        </h1>
        <Button className="mx-auto" color="primary" as={Link} href="/">
          العودة للصفحة الرئيسية
        </Button>
      </div>
      <div>
        <Image src="/notFound.svg" alt="notfound" width={500} height={500} />
      </div>
    </section>
  );
};

export default NotFound;
