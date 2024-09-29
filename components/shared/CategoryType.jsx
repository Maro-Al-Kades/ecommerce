import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const CategoryType = ({ CategoryName, BtnName, BtnLink }) => {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="right">
        {CategoryName && (
          <h2 className="text-3xl font-semibold">{CategoryName}</h2>
        )}
      </div>
      <div className="left">
        {BtnName && (
          <Button
            as={Link}
            size="lg"
            href={BtnLink}
            color="primary"
            variant="shadow"
          >
            {BtnName}
          </Button>
        )}
      </div>
    </div>
  );
};

export default CategoryType;
