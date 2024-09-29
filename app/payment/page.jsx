
import { MdOutlineLocalShipping } from "react-icons/md";
import { SiVisa } from "react-icons/si";
import { RadioGroup, Radio, cn, Card, CardBody, Button } from "@nextui-org/react";
import Link from "next/link";
import { BsCashStack } from "react-icons/bs";

export const CustomRadio = (props) => {
  const { children, ...otherProps } = props;

  return (
    <Radio
      {...otherProps}
      classNames={{
        base: cn(
          "inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between",
          "flex-col min-w-[250px] cursor-pointer rounded-xl gap-4 p-4 border-2 border-transparent",
          "data-[selected=true]:border-primary"
        ),
      }}
    >
      {children}
    </Radio>
  );
};

const page = () => {
  return (
    <section className="flex flex-col gap-10">
      <RadioGroup>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <CustomRadio description="الدفع عن طريق الفيزا" value="visa">
            <SiVisa size={100} className="text-primary" />
          </CustomRadio>
          <CustomRadio description="الدفع عند الاستلام " value="cash">
            <MdOutlineLocalShipping size={100} className="text-primary" />
          </CustomRadio>
        </div>
      </RadioGroup>

      <div className="flex flex-row gap-4 items-center justify-center">
        <Button isDisabled size="lg">
          34000 جنيه مصري
        </Button>
        <Button
          color="primary"
          endContent={<BsCashStack size={18} />}
          as={Link}
          href="/payment"
          fullWidth={false}
          size="lg"
        >
          اتمام الشراء
        </Button>
      </div>
    </section>
  );
};

export default page;
