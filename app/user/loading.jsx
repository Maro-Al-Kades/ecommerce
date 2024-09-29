import { Spinner } from "@nextui-org/react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Spinner label="جاري التحميل" color="primary" labelColor="primary" />
    </div>
  );
};

export default Loading;
