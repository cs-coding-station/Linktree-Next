import Avatar from "@/components/Avatar";
import CardLink from "@/components/CardLink";
import Share from "@/components/Share";
import { Instagram, Linkedin, Youtube } from "lucide-react";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-red-400 to-sky-200">
      <div className="flex justify-center items-center pt-4">
        <Avatar />
      </div>

      <div className="text-center text-white font-medium text-lg mt-2 pb-4">
        <h1>Coding Station</h1>
        <h2>Cândido Silva</h2>
      </div>

      <div className="flex flex-col items-center gap-4">
        {links.map((link) => (
          <CardLink link={link} key={link.text} />
        ))}
      </div>

      <Share />
    </div>
  );
}

const links = [
  {
    link: "https://www.youtube.com/channel/UCRf0nh12CLg_S9khtuEMfQQ",
    text: "Youtube",
    icon: <Youtube className="-mr-8" size={32} color="tomato" />,
  },
  {
    link: "https://www.instagram.com/codingstation_/",
    text: "Instagram",
    icon: <Instagram className="-mr-8" size={32} color="tomato" />,
  },
  {
    link: "https://www.linkedin.com/in/candido-silva-developer/",
    text: "Linkedin",
    icon: <Linkedin className="-mr-8" size={32} color="tomato" />,
  },
];
