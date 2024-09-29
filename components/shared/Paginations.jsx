"use client";

import { Pagination, Button } from "@nextui-org/react";
import { useState } from "react";

const Paginations = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex flex-col gap-5 items-center justify-center pt-6">
      <Pagination
        total={10}
        color="primary"
        page={currentPage}
        onChange={setCurrentPage}
      />
      <div className="flex gap-2">
        <Button
          size="sm"
          variant="flat"
          color="primary"
          onPress={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
        >
          السابق
        </Button>
        <Button
          size="sm"
          variant="flat"
          color="primary"
          onPress={() =>
            setCurrentPage((prev) => (prev < 10 ? prev + 1 : prev))
          }
        >
          التالي
        </Button>
      </div>
    </div>
  );
};

export default Paginations;
