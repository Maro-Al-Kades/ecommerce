import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full flex flex-row items-center justify-between flex-wrap mt-16 bg-primary/20 p-4 rounded-xl dark:text-white">
      <div className="flex flex-row gap-3">
        <Link href="/">الشروط والاحكام</Link>
        <Link href="/">سياسة الخصوصية</Link>
        <Link href="/">اتصل بنا</Link>
      </div>
      <div className="flex flex-row gap-3">
        <FaFacebook size={20} />
        <FaInstagram size={20} />
        <FaLinkedin size={20} />
      </div>
    </div>
  );
};

export default Footer;
