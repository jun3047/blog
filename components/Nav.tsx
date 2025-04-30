"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// const Rallit_RESUME =
//   "https://www.rallit.com/hub/resumes/578089/%EC%A0%95%EC%A4%80";

const MEUNS = [
  { title: "Home", url: "/" },
  { title: "Post", url: "/post" },
  // { title: "Resume", url: Rallit_RESUME },
];

const Nav = () => {
  const currentUrl = usePathname();

  return (
    <nav className="fixed left-1/2 transform -translate-x-1/2 bottom-6">
      <ul className="border-white border border-opacity-10 mx-20 flex gap-4 bg-[var(--background)] rounded-2xl px-6 m-auto shadow-neutral-900 shadow-[black_0px_0px_10px_4px]">
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
