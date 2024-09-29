import CategoryType from "@/components/shared/CategoryType";
import { Button, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { TbTrash } from "react-icons/tb";

const UserProfile = () => {
  const userName = "مارو عصام";
  const PhoneNumber = 1285374684;
  const userEmail = "marolinkedin@gmail.com";
  const userPassword = "****************"
  return (
    <section className="flex flex-col w-full gap-8">
      <CategoryType CategoryName={`الصفحة الشخصية`} />

      <div>
        <Card className="p-3">
          <CardHeader className="flex flex-row items-center justify-between">
            <h4 className="text-lg ">
              الاسم: <span className="text-primary">{userName}</span>
            </h4>

            <div className="flex flex-row gap-2">
              <Button color="warning">
                <FaEdit size={18} />
              </Button>
              <Button color="danger">
                <TbTrash size={18} />
              </Button>
            </div>
          </CardHeader>
          <CardBody>
            <h4 className="text-right text-lg ">
              رقم الهاتف: <span className="text-primary">{PhoneNumber}</span>
            </h4>
          </CardBody>
          <CardFooter className="flex flex-col gap-5 items-start">
            <h4 className="text-lg ">
              الايميل: <span className="text-primary">{userEmail}</span>
            </h4>
            <h4 className="text-lg ">
              كلمة المرور : <span className="text-primary">{userPassword}</span>
            </h4>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default UserProfile;
