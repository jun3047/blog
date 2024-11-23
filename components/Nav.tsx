"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MEUNS = [
  { title: "Home", url: "/" },
  { title: "Post", url: "/post" },
  // { title: "About", url: "/project" },
];

const Nav = () => {
  const currentUrl = usePathname();

  return (
    <nav className="fixed left-1/2 transform -translate-x-1/2 bottom-6">
      <ul className="mx-20 flex gap-4 bg-[var(--background)] rounded-2xl px-6 m-auto shadow-neutral-900 shadow-md">
        {MEUNS.map(({ title, url }) => (
          <li className="py-2 flex items-center" key={title}>
            <Link
              className={`text-white whitespace-nowrap relative after:content-[attr(title)] after:font-bold after:block after:h-0 after:invisible ${
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
