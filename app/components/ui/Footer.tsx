import React from "react";
import Image from "next/image";

const accessContent = [
  {
    title: "Follow Us",
    descriptions: ["Facebook", "Discord"],
  },
  {
    title: "Read More",
    descriptions: ["Docs", "Terms & Conditions", "Privacy Policy"],
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative w-full">
      <div className="absolute inset-0 z-0">
        <Image
          src="/footerBg.svg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 max-w-[1200px] mx-auto">
          {accessContent.map((section, index) => (
            <div
              key={index}
              className="hover:bg-background/30 p-8 rounded-lg hvoer:backdrop-blur-sm"
            >
              <h2 className="text-2xl text-white mb-2">{section.title}</h2>
              <ul className="space-y-2">
                {section.descriptions.map((desc, idx) => (
                  <li
                    key={idx}
                    className="text-xl text-white/90 flex items-start"
                  >
                    <span className="text-accent mr-2">•</span>
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr className="border-t-[0.5px] border-white" />
        <div className="text-white text-sm my-6">
          Copyright @ {currentYear} Flexable. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
