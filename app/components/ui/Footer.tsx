import React from "react";
import Image from "next/image";
import Link from "next/link";

const accessContent = [
  {
    title: "Follow Us",
    items: [
      { label: "X", href: "#" },
      { label: "Discord", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "Telegram", href: "#" },
    ],
  },
  {
    title: "Read More",
    items: [
      { label: "Docs", href: "#" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
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

        <div className="absolute inset-0 bg-gradient-to-b from-background/30 to-background/30"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col justify-center lg:pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1200px] mx-auto pb-40">
          {accessContent.map((section, index) => (
            <div key={index} className="p-8 rounded-lg hover:backdrop-blur-sm">
              <h2 className="text-2xl text-white mb-2">{section.title}</h2>
              <ul className="space-y-2">
                {section.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-xl text-white/90 flex items-start"
                  >
                    <span className="text-accent mr-2">•</span>
                    <Link
                      href={item.href}
                      className="hover:text-accent transition-colors"
                    >
                      {item.label}
                    </Link>
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
