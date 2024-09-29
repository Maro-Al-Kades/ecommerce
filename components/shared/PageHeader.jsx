"use client";

import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

const PageHeader = ({
  pageName,
  itemOne,
  itemTwo,
  itemThree,
  itemFour,
  itemFive,
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-6">
      <h1 className="text-3xl text-center">{pageName}</h1>
      <Breadcrumbs
        color="primary"
        size="lg"
        separator="/"
        itemClasses={{
          separator: "px-2",
        }}
      >
        <BreadcrumbItem>{itemOne}</BreadcrumbItem>
        <BreadcrumbItem>{itemTwo}</BreadcrumbItem>
        {itemThree && <BreadcrumbItem>{itemThree}</BreadcrumbItem>}
        {itemFour && <BreadcrumbItem>{itemFour}</BreadcrumbItem>}
        {itemFive && <BreadcrumbItem>{itemFive}</BreadcrumbItem>}
      </Breadcrumbs>
    </div>
  );
};

export default PageHeader;
