"use client";

import React from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Input,
} from "@nextui-org/react";
import { FaCartArrowDown, FaSearch } from "react-icons/fa";
import { ThemeSwitcher } from "../other/ThemeSwitcher";
import Logo from "@/components/Global/Logo";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      isBordered={false}
      isBlurred={false}
      className="backdrop-blur-3xl
       rounded-lg"
    >
      <div className="flex items-center gap-4">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden p-3"
        />
        <Logo />
      </div>
      <NavbarContent
        as="div"
        className="hidden w-full sm:flex gap-4 items-center"
        justify="center"
      >
        <Input
          classNames={{
            base: "w-full px-8  h-10 rounded-xl",
            mainWrapper: "h-full rounded-xl",
            input: "text-small rounded-xl",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20 rounded-xl",
          }}
          placeholder="ابحث هنا..."
          size="md"
          startContent={<FaSearch size={16} />}
          type="search"
        />
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/auth/login">تسجيل الدخول</Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Button as={Link} isIconOnly size={12} color="primary" href="/cart" variant="flat">
            <FaCartArrowDown size={18} className="dark:text-white" />
          </Button>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="flex flex-col justify-between py-10">
        <NavbarMenuItem>
          <Input
            classNames={{
              base: "w-full px-8  h-10 rounded-xl",
              mainWrapper: "h-full rounded-xl",
              input: "text-small rounded-xl",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20 rounded-xl",
            }}
            placeholder="ابحث هنا..."
            size="md"
            startContent={<FaSearch size={16} />}
            type="search"
          />
        </NavbarMenuItem>
        <div className="flex items-center gap-4">
          <NavbarMenuItem>
            <Button
              as={Link}
              isIconOnly
              color="primary"
              href="#"
              variant="solid"
            >
              تسجيل حساب جديد
            </Button>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="#">تسجيل الدخول</Link>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
