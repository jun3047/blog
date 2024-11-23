"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MEUNS = [
  { title: "홈", url: "/" },
  { title: "공부기록", url: "/post" },
  { title: "프로젝트", url: "/project" },
];

const Nav = () => {
  const currentUrl = usePathname();

  return (
    <nav className="fixed left-1/2 transform -translate-x-1/2 bottom-6">
      <ul className="mx-20 flex gap-4 bg-white rounded-2xl px-6 m-auto">
        {MEUNS.map(({ title, url }) => (
          <li className="py-2 flex items-center" key={title}>
            <Link
              className={`text-black whitespace-nowrap relative after:content-[attr(title)] after:font-bold after:block after:h-0 after:invisible ${
                currentUrl === url ? "font-bold" : "hover:font-bold"
              }`}
              href={url}
              title={title}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
