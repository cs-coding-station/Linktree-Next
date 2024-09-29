import Image from "next/image";
import image from "../assets/images/logo.jpg";
export default function Avatar() {
  return <Image src={image} className="w-24 h-24 rounded-full " />;
}
