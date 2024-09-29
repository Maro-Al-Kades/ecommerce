import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        className="cursor-pointer"
        src="/logo.svg"
        alt="logo"
        width={200}
        height={80}
      />
    </Link>
  );
};

export default Logo;
